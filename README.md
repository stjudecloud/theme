# St. Jude Cloud Theme
This repository provides plug-n-play style components for St. Jude web portal use.

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

Compiled CSS contains all of default Bootstrap with St. Jude theme overrides. To import all features from the theme, simply include the `stjude-cloud-theme.scss` file like so:

```scss
@import '~stjude-cloud-theme/scss/stjude-cloud-theme';
```

Alternatively, you can selectively include features from the repo by importing individual features from the module:

```scss
@import '~stjude-cloud-theme/scss/functions';
@import '~stjude-cloud-theme/scss/variables';
@import '~stjude-cloud-theme/scss/mixins';
@import '~stjude-cloud-theme/scss/sjc-footer';
```
**Note:** some features may need additional files imported to function.

## Fonts
**Compiled CSS does not include font families for St. Jude Sans.** It is not possible to know where fonts are located for all projects. The example below provides an overview on how to add font families:
```scss
@font-face {
  font-family: 'St. Jude Sans';
  src: url('../fonts/stjude-sans/sjs-regular.eot'); /* IE9 Compat Modes */
  src: url('../fonts/stjude-sans/sjs-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/stjude-sans/sjs-regular.woff') format('woff'), /* Pretty Modern Browsers */
       url('../fonts/stjude-sans/sjs-regular.ttf')  format('truetype'); /* Safari, Android, iOS */
  font-weight: 400;
}
​
@font-face {
  font-family: 'St. Jude Sans';
  src: url('../fonts/stjude-sans/sjs-regular-italic.eot'); /* IE9 Compat Modes */
  src: url('../fonts/stjude-sans/sjs-regular-italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/stjude-sans/sjs-regular-italic.woff') format('woff'), /* Pretty Modern Browsers */
       url('../fonts/stjude-sans/sjs-regular-italic.ttf')  format('truetype'); /* Safari, Android, iOS */
  font-style: italic;
  font-weight: 400;
}
​
@font-face {
  font-family: 'St. Jude Sans';
  src: url('../fonts/stjude-sans/sjs-book.eot'); /* IE9 Compat Modes */
  src: url('../fonts/stjude-sans/sjs-book.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/stjude-sans/sjs-book.woff') format('woff'); /* Pretty Modern Browsers */
  font-weight: 600;
}
​
@font-face {
  font-family: 'St. Jude Sans';
  src: url('../fonts/stjude-sans/sjs-book-italic.eot'); /* IE9 Compat Modes */
  src: url('../fonts/stjude-sans/sjs-book-italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/stjude-sans/sjs-book-italic.woff') format('woff'); /* Pretty Modern Browsers */
  font-style: italic;
  font-weight: 600;
}
​
@font-face {
  font-family: 'St. Jude Sans';
  src: url('../fonts/stjude-sans/sjs-medium.eot'); /* IE9 Compat Modes */
  src: url('../fonts/stjude-sans/sjs-medium.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/stjude-sans/sjs-medium.woff') format('woff'), /* Pretty Modern Browsers */
       url('../fonts/stjude-sans/sjs-medium.ttf')  format('truetype'); /* Safari, Android, iOS */
  font-weight: 700;
}
​
@font-face {
  font-family: 'St. Jude Sans';
  src: url('../fonts/stjude-sans/sjs-medium-italic.eot'); /* IE9 Compat Modes */
  src: url('../fonts/stjude-sans/sjs-medium-italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/stjude-sans/sjs-medium-italic.woff') format('woff'), /* Pretty Modern Browsers */
       url('../fonts/stjude-sans/sjs-medium-italic.ttf')  format('truetype'); /* Safari, Android, iOS */
  font-style: italic;
  font-weight: 700;
}
​
@font-face {
  font-family: 'St. Jude Sans';
  src: url('../fonts/stjude-sans/sjs-bold.eot'); /* IE9 Compat Modes */
  src: url('../fonts/stjude-sans/sjs-bold.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/stjude-sans/sjs-bold.woff') format('woff'), /* Pretty Modern Browsers */
       url('../fonts/stjude-sans/sjs-bold.ttf')  format('truetype'); /* Safari, Android, iOS */
  font-weight: 800;
}
​
@font-face {
  font-family: 'St. Jude Sans';
  src: url('../fonts/stjude-sans/sjs-bold-italic.eot'); /* IE9 Compat Modes */
  src: url('../fonts/stjude-sans/sjs-bold-italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/stjude-sans/sjs-bold-italic.woff') format('woff'), /* Pretty Modern Browsers */
       url('../fonts/stjude-sans/sjs-bold-italic.ttf')  format('truetype'); /* Safari, Android, iOS */
  font-style: italic;
  font-weight: 800;
}
```
 In most cases, only the paths will need to be updated to the true location of fonts.

## Versioning
This repository matches Bootstrap's two major version numbers. If this repository's version is v4.3.123, then it depends on Bootstrap v4.3.x.

## Linting
This repository uses stylelint for linting using the Bootstrap configuration. For more information on the rules included, feel free to reference the [stylelint documentation](https://stylelint.io/user-guide/rules) or the [Bootstrap repository](https://github.com/twbs/stylelint-config-twbs-bootstrap) for more information on the rules enforced.