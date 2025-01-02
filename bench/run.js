import { dirname } from "path";
import { fileURLToPath } from "url";
import { writeFileSync } from "fs";
import { mkdir } from "fs/promises";
import * as esbuild from "esbuild";
import * as terser from "terser";
import { gzipSync, brotliCompressSync } from "zlib";

const __dirname = dirname(fileURLToPath(import.meta.url));

const buildSuite = async (suite) => {
  const outfile = `${__dirname}/dist/${suite}.js`;
  const res = esbuild.buildSync({
    entryPoints: [`${__dirname}/${suite}.ts`],
    outfile,
    bundle: true,
    minify: false,
    write: false,
  });
  if (res.errors.length) {
    console.error(res.errors);
    process.exit(1);
  }

  const rawText = res.outputFiles[0].text;
  writeFileSync(outfile, rawText);
  const text = (await terser.minify(rawText, {})).code;
  writeFileSync(outfile.replace(".js", ".min.js"), text);

  return {
    rawSize: text.length,
    gzipSize: gzipSync(text).length,
    brotliSize: brotliCompressSync(text).length,
  };
};

function diff(baseline, checked) {
  return {
    rawSize: checked.rawSize - baseline.rawSize,
    gzipSize: checked.gzipSize - baseline.gzipSize,
    brotliSize: checked.brotliSize - baseline.brotliSize,
  };
}

async function runSuite(dir) {
  await mkdir(`${__dirname}/dist/${dir}`).catch(() => {});
  const baseline = await buildSuite(`${dir}/raw`);
  console.log(`\n${dir}\n---`);
  console.log("\nbaseline", baseline);

  for (const suite of ["zod", "superstruct", "banditypes"]) {
    const stats = await buildSuite(`${dir}/${suite}`);
    console.log(`${suite}\n  `, stats);
    console.log(`${suite}:diff\n  `, diff(baseline, stats));
  }
}

await mkdir(`${__dirname}/dist`).catch(() => {});
runSuite("full");
runSuite("basic");
runSuite("minimal");
