/**
 * This file serves as a reasonable `postcss.config.js` file that can be imported
 * into other projects to compile the St. Jude Cloud theme. Here, we provide two
 * ways of importing the config:
 *
 *   - The standard way will be to import this file and then simply set the postcss
 *     confing in your file by something similar to this:
 *
 *       const { plugins } = require("@stjudecloud/theme-tailwind/postcss/config");
 *       module.exports = {
 *         plugins
 *       }
 *
 *   - If you want to modify the config in some way, you can import the pre, regular, and
 *     post processors into your config interspersed with any of the other plugins you'd
 *     like. For example,
 *
 *       const {
 *         preprocessors,
 *         processors,
 *         postprocessors
 *       } = require("@stjudecloud/theme-tailwind/postcss/config");

 *       module.exports = {
 *         plugins: [
 *           ...preprocessors,
 *           require("my-plugin-1"),
 *           ...processors,
 *           require("my-plugin-2"),
 *           ...postprocessors
 *         ]
 *       }
 */

const preprocessors = [require("postcss-import")];
const processors = [require("tailwindcss")];
const postprocessors = [
  require("autoprefixer"),
  require("cssnano")({
    preset: "default",
  }),
];

module.exports = {
  plugins: [...preprocessors, ...processors, ...postprocessors],
  preprocessors,
  processors,
  postprocessors,
};
