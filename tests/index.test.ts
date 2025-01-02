import { suite as makeSuite } from "uvu";
import { equal, throws } from "uvu/assert";
import fs from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

async function testValidation() {
  const kindsDir = resolve(__dirname, "validation");
  const kinds = fs.readdirSync(kindsDir).filter((t) => t[0] !== ".");

  for (const kind of kinds) {
    const suite = makeSuite(kind);

    const testsDir = resolve(kindsDir, kind);
    const tests = fs
      .readdirSync(testsDir)
      .filter((t) => t[0] !== "." && !t.endsWith(".d.ts"));

    for (const name of tests) {
      const module = await import(resolve(testsDir, name));
      const { Struct, data, only, skip, output } = module;
      const run = only ? suite.only : skip ? suite.skip : suite;
      run(name, () => {
        let actual;
        let err;

        if ("output" in module) {
          equal(Struct(data), output);
        } else if ("failures" in module) {
          throws(() => Struct(data));
          // const props = ['type', 'path', 'refinement', 'value', 'branch']
          // const actualFailures = err
          //   .failures()
          //   .map((failure) => pick(failure, ...props))

          // assert.deepStrictEqual(actualFailures, failures)
          // assert.deepStrictEqual(pick(err, ...props), failures[0])
        } else {
          throw new Error(
            `The "${name}" fixture did not define an \`output\` or \`failures\` export.`,
          );
        }
      });
    }
    suite.run();
  }
}

await testValidation();
