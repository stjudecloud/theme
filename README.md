# St. Jude Cloud Theme
This repository provides theme guidelines and plug-n-play style components for St. Jude web portal use.

## What's Included

```text
stjude-cloud-theme/
├── dist/
│   └── css/
│       ├── stjude-cloud-theme.css
│       ├── stjude-cloud-theme.css.map
│       ├── stjude-cloud-theme.min.css
│       └── stjude-cloud-theme.min.css.map
└── fonts/
    └── stjude-sans/
        ├── sjs-regular.eot
        ├── sjs-regular.ttf
        ├── sjs-regular.woff
        ├── sjs-regular.woff2
        └── ... and bold/italic variants
```

Compiled CSS contains all of default Bootstrap with St. Jude theme overrides.

## Fonts
**Compiled CSS does not include font families for St. Jude Sans.** It is not possible to know where fonts are located for all projects. Feel free to reference `font-families-example.css`. In most costs, only the paths will need to be updated to the true location of fonts.

## Versioning
This repository matches Bootstrap's two major version numbers. If this repository's version is v4.3.123, then it depends on Bootstrap v4.3.x.
