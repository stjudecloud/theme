# St. Jude Cloud Theme

This repository provides theme guidelines and plug-n-play style components for St. Jude web portal use.

## Development Quick Start

- Clone the repository: `git clone https://github.com/stjudecloud/theme.git`
- Install dependencies: `npm install`
- Make your changes
- Compile SASS: `npm run css-compile`
- Lint your changes: `npm run css-lint`

`npm run watch` is also provided for continuous compilation during development.

## What's Included

```text
stjude-cloud-theme/
└── dist/
    ├── css/
    │   ├── stjude-cloud-theme.css
    │   ├── stjude-cloud-theme.css.map
    │   ├── stjude-cloud-theme.min.css
    │   └── stjude-cloud-theme.min.css.map
    ├── fonts/
    │   └── stjude-sans/
    │       ├── sjs-regular.eot
    │       ├── sjs-regular.ttf
    │       ├── sjs-regular.woff
    │       ├── sjs-regular.woff2
    │       └── ... and bold/italic variants
    └── images/
        ├── apple-touch-icon.png
        ├── favicon-16x16.png
        ├── favicon-32x32.png
        ├── favicon.ico
        └── stjude-child-logo.png
```

By default, the compiled CSS contains all of default Bootstrap with St. Jude theme overrides. If compiling CSS from SASS, use the example below as a template for importing all of the St. Jude theme features complete with bootstrap:

```scss
// Order matters. First we need bootstrap functions and mixins.
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/mixins";

// Import SJC Theme variables
@import "~stjude-cloud-theme/scss/variables";

// Apply your site-specific theme
@import "site-variables";

// Require the rest of the theme (includes bootstrap)
@import "~stjude-cloud-theme/scss/stjude-cloud-theme";

// Apply your site-specific components and other CSS
@import "site-config";
@import "site-nav";
@import "typography";
```

## Selectively importing St. Jude theme components

Alternatively, you can choose to selectively import certain components from the theme as needed. Using the example below as a template, you can customize which components are imported before compiling the CSS yourself:

```scss
// Order matters. First we need bootstrap functions and mixins.
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/mixins";

// Import SJC Theme variables
@import "~stjude-cloud-theme/scss/variables";

// Apply your site-specific theme
@import "site-variables";

// Add all of bootstrap or selectively choose components you need:
@import "~bootstrap/scss/bootstrap.scss";

// Require custom components from St Jude Cloud Theme
@import "~stjude-cloud-theme/scss/sjc-header";
@import "~stjude-cloud-theme/scss/sjc-footer";

// Apply your site-specific components and other CSS
@import "site-config";
@import "site-nav";
@import "typography";
```

Since the compiled CSS from the theme includes all of default Bootstrap and St. Jude theme overrides, you will need to compile the CSS yourself, using this command as a guide:

`node-sass --importer node_modules/node-sass-package-importer/dist/cli.js --output-style expanded --source-map true --source-map-contents true --precision 6 <path/to/scss/file.scss> <path/to/ouput/filename.css>`

**When selectively importing components from the theme,** it's important to note that certain features may require additional components from Bootstrap.

## Fonts

**Compiled CSS does not include font families for St. Jude Sans.** It is not possible to know where fonts are located for all projects. Feel free to reference [the guide](guide/scss/_typography.scss) as an example of how to add font families. In most cases, only the paths will need to be updated to the true location of fonts.

## Versioning

This repository matches Bootstrap's two major version numbers. If this repository's version is v4.3.123, then it depends on Bootstrap v4.3.x.
