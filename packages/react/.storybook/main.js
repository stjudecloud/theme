import * as path from 'path';

export default {
  stories: [
    {
      directory: "../stories/",
      files: "*.stories.@(js|jsx|ts|tsx)"
    }
  ],
  staticDir: [],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-mdx-gfm",
    '@storybook/preset-create-react-app',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: 'tag',
  },
  babel: async (options) => ({
    // Update your babel configuration here
    ...options,
  }),
  webpackFinal: async config => {
    config.entry.push("./stories/theme.scss");
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, '../'),
    });
    return config;
  }
};