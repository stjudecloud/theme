const {green, cyan, red} = require("chalk");
const path = require("path");
const fse = require("fs-extra");
const execa = require("execa");
const cherryPick = require("cherry-pick").default;

const srcRoot = path.join(__dirname, "src");
const typesRoot = path.join(__dirname, "types");
const libRoot = path.join(__dirname, "lib");
const cjsRoot = path.join(libRoot, "cjs");
const esRoot = path.join(libRoot, "esm");

const targets = process.argv.slice(2);

const clean = () => fse.existsSync(libRoot) && fse.removeSync(libRoot);

const build = (name, fn) => async () => {
  console.log(cyan("Building: ") + green(name));
  await fn();
  console.log(cyan("Built: ") + green(name));
};

const shell = cmd =>
  execa(cmd, {stdio: ["pipe", "pipe", "inherit"], shell: true});

const has = t => !targets.length || targets.includes(t);

const copyTypes = dest => shell(`cpy ${typesRoot}/components/*.d.ts ${dest}`);

/**
 * Run babel over the src directory and output
 * compiled common js files to ./lib.
 */
const buildLib = build("commonjs modules", async () => {
  await shell(`npx babel ${srcRoot} --out-dir ${cjsRoot} --env-name "cjs"`);
  await copyTypes(libRoot);
});

/**
 * Run babel over the src directory and output
 * compiled es modules (but otherwise es5) to /es
 */
const buildEsm = build("es modules", async () => {
  await shell(`npx babel ${srcRoot} --out-dir ${esRoot} --env-name "esm"`);
  await copyTypes(esRoot);
});

const buildDirectories = build("Linking directories", () =>
  cherryPick({
    inputDir: "../src",
    cjsDir: "cjs",
    esmDir: "esm",
    cwd: libRoot
  })
);

console.log(
  green(`Building targets: ${targets.length ? targets.join(", ") : "all"}\n`)
);

clean();

Promise.all([has("lib") && buildLib(), has("es") && buildEsm()])
  .then(buildDirectories)
  .catch(err => {
    if (err) console.error(red(err.stack || err.toString()));
    process.exit(1);
  });