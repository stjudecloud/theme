<p align="center">

  <h1 align="center">
    St. Jude Cloud Bootstrap Theme
  </h1>

  <p align="center">
   <a href="https://github.com/stjudecloud/theme/tree/main/themes/bootstrap" target="_blank">
     <img alt="Status"
          src="https://img.shields.io/badge/status-active-success.svg" />
   </a>
   <a href="https://github.com/stjudecloud/theme/issues?q=is%3Aissue+is%3Aopen+label%3A%40stjudecloud%2Ftheme-bootstrap" target="_blank">
     <img alt="Github Issues"
          src="https://img.shields.io/github/issues/stjudecloud/theme/%40stjudecloud%2Ftheme-bootstrap?label=issues"  />
   </a>
   <a href="https://github.com/stjudecloud/theme/pulls?q=is%3Apr+is%3Aopen+label%3A%40stjudecloud%2Ftheme-bootstrap"  target="_blank">
     <img alt="Pull Requests"
          src="https://img.shields.io/github/issues-pr/stjudecloud/theme/%40stjudecloud%2Ftheme-bootstrap?label=pull%20requests"  />
   </a>
  </p>


  <p align="center">
    <a href="https://getbootstrap.com">Bootstrap</a> Sass theme for the St. Jude Cloud design system. See the repository's root <a href="http://github.com/stjudecloud/theme"><code>README.md</code></a> for more information on the design system itself.
   <br />
   <br />
   <a href="https://github.com/stjudecloud/theme/issues/new?assignees=&labels=&template=feature_request.md&title=Descriptive%20Title&labels=enhancement,%40stjudecloud%2Ftheme-bootstrap">Request Feature</a>
    | 
   <a href="https://github.com/stjudecloud/theme/issues/new?assignees=&labels=&template=bug_report.md&title=Descriptive%20Title&labels=bug,%40stjudecloud%2Ftheme-bootstrap">Report Bug</a>
   <br />
    ⭐ Consider starring the repo! ⭐
   <br />
  </p>
</p>

## Quick Start

Use the following commands to get started quickly.

```bash
# Clone the repository and cd to themes/bootstrap
git clone https://github.com/stjudecloud/theme.git
cd theme/themes/bootstrap

# Install dependencies
npm install

# Build a dev AND production bundle in `dist/`. This is the default so both
# can be packaged in our npm releases, but you may specify `build:dev` or 
# `build:prod` if you only need one.
npm run build

# Run a watcher job that updates as you develop
npm start # or `npm run watch`
```

## Versioning

This repository matches Bootstrap's two major version numbers. If this repository's version is v4.3.123, then it depends on Bootstrap v4.3.x.

## What's Included

### Compiled Assets

By default, the `dist/` directory will include all of the files you need to host publicly to
have the Bootstrap theme work on your site. Note that the `dist/` directory contains both minified
and non-minified assets. For now, we include both as the cost should be small to store both and
you can easily replace the theme script to point to a development copy for debugging purposes.

```text
dist
├── stjude-cloud-theme.css
├── stjude-cloud-theme.css.map
├── stjude-cloud-theme.min.css
├── stjude-cloud-theme.min.css.map
├── stjude-logo-child.10a0c66e.svg
├── stjude-logo-child.863ec0d6.svg
├── stjude-logo-child.f9d6fdfe.svg
...etc
```

### Sass Files

The source Sass files are included in the `sass/` directory of the published package. Most individuals will
probably want to import the full theme, but you can selectively import elements as well. For example,

```sass
// Import full theme
@import "@stjudecloud/theme-bootstrap/scss/stjude-cloud-theme"

// Apply your site-specific components and other CSS
@import "@stjudecloud/theme-bootstrap/scss/typography"
```

### Fonts and Images

To correctly include font families for a project as well as images, override the default `$stjude-sans-font-path` and `$stjude-images-path` variable.

### Copyright

© 2021-Present St. Jude Children's Research Hospital.