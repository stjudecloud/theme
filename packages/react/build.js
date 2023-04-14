import chalk from "chalk";
import path from "path";
import fse from "fs-extra";
import execa from "execa";

import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

import ncp from 'ncp';
import { promisify } from 'util';

const ncpAsync = promisify(ncp);

const __file = fileURLToPath(import.meta.url);
const __dirname = dirname(__file);

const srcRoot = join(__dirname, "src");
const typesRoot = path.join(__dirname, "types");
const libRoot = path.join(__dirname, "lib");
const cjsRoot = path.join(libRoot, "cjs");
const esRoot = path.join(libRoot, "esm");

const targets = process.argv.slice(2);

const clean = () => fse.existsSync(libRoot) && fse.removeSync(libRoot);

const build = (name, fn) => async () => {
  console.log(chalk.cyan("Building: ") + chalk.green(name));
  await fn();
  console.log(chalk.cyan("Built: ") + chalk.green(name));
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

const buildDirectories = build("Linking directories", async () => {
  await ncpAsync(path.join(libRoot, "../src"), path.join(libRoot, "cjs")),
  await ncpAsync(path.join(libRoot, "../src"), path.join(libRoot, "esm"))
});

console.log(
  chalk.green(`Building targets: ${targets.length ? targets.join(", ") : "all"}\n`)
);

clean();

Promise.all([has("lib") && buildLib(), has("es") && buildEsm()])
  .then(buildDirectories)
  .catch(err => {
    if (err) console.error(chalk.red(err.stack || err.toString()));
    process.exit(1);
  });
