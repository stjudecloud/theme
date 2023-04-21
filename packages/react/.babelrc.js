const browserlist = [
  ">= 1%"
];

module.exports = api => {
  const env = api.env();

  let dev = false;
  let modules;

  switch (env) {
    case "esm":
      modules = false;
      break;
    case "cjs":
    default:
      modules = "commonjs";
  }

  return {
    presets: [
      [
        require("@babel/preset-env"),
        {
          modules,
          loose: true,
          ignoreBrowserslistConfig: true,
          shippedProposals: true,
          include: ["proposal-object-rest-spread"],
          targets: {
            browsers: browserlist,
            node: "current"
          }
        }
      ],
      [require("@babel/preset-react")],
    ],
    plugins: [
      [require("@babel/plugin-proposal-class-properties"), { loose: true }],
      require("@babel/plugin-proposal-export-default-from"),
      require("@babel/plugin-proposal-export-namespace-from"),
      [require("@babel/plugin-transform-runtime"), { useESModules: !modules }],
      require("babel-plugin-dev-expression"),
      modules && require("babel-plugin-add-module-exports"),
      !dev && [
        require("babel-plugin-transform-react-remove-prop-types"),
        {
          removeImport: true,
          additionalLibraries: ["prop-types-extra"]
        }
      ]
    ].filter(Boolean)
  };
};
