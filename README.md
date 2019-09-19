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
        └── stjude-child-logo.png
```

Compiled CSS contains all of default Bootstrap with St. Jude theme overrides.

## Fonts
**Compiled CSS does not include font families for St. Jude Sans.** It is not possible to know where fonts are located for all projects. Feel free to reference [the guide](guide/scss/_typography.scss) as an example of how to add font families. In most cases, only the paths will need to be updated to the true location of fonts.

## Versioning
This repository matches Bootstrap's two major version numbers. If this repository's version is v4.3.123, then it depends on Bootstrap v4.3.x.
