const { resolve } = require("path");
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __file = fileURLToPath(import.meta.url);
const __dirname = dirname(__file);

export default {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async config => {
    // Automatically include St. Jude Cloud theme.
    config.entry.push("./stories/theme.scss");
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: resolve(__dirname, "../")
    });
    return config;
  }
};
