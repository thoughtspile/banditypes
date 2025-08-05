import { describe, test } from "node:test";
import { deepEqual, throws } from "node:assert";
import fs from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

async function testValidation() {
  const kindsDir = resolve(__dirname, "validation");
  const kinds = fs.readdirSync(kindsDir).filter((t) => t[0] !== ".");

  for (const kind of kinds) {
    describe(kind, async () => {
      const testsDir = resolve(kindsDir, kind);
      const tests = fs
        .readdirSync(testsDir)
        .filter((t) => t[0] !== "." && !t.endsWith(".d.ts"));

      for (const name of tests) {
        const module = await import(resolve(testsDir, name));
        const { Struct, data, output } = module;
        test(name, () => {
          if ("output" in module) {
            deepEqual(Struct(data), output);
          } else if ("failures" in module) {
            throws(() => Struct(data));
          } else {
            throw new Error(
              `The "${name}" fixture did not define an \`output\` or \`failures\` export.`,
            );
          }
        });
      }
    });
  }
}

await testValidation();
