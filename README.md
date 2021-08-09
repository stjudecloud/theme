<p align="center">
  <a href="https://github.com/stjudecloud/theme"><img src="./assets/images/github-header.png" width="800" title="St. Jude Cloud Theme Repo"></a>
  <br />
  <br />
  <a href="https://github.com/stjudecloud/theme/actions">
    <img alt="Build Status" src="https://github.com/stjudecloud/theme/workflows/CI/badge.svg" />
  </a>
  <a href="https://design.stjude.cloud" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
</p>

# Overview

This repository provides assets, styling libraries, and component libraries as part of the St. Jude Cloud design system. The table below shows the packages contained within and their respective purposes. To get started, navigate to your directory of interest listed below.

|              Package               |                  Folder                  | Published to NPM | Description                                                                                                                                                                      |
| :--------------------------------: | :--------------------------------------: | :--------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|       `@stjudecloud/assets`        |          [`assets/`](./assets)           |       YES        | Contains all, non-minified assets used on the St. Jude Cloud project.                                                                                                            |
|   `@stjudecloud/theme-bootstrap`   | [`themes/bootstrap`](./themes/bootstrap) |       YES        | Both production-ready and development files for the Bootstrap St. Jude Cloud theme                                                                                               |
|      `@stjudecloud/ui-react`       |   [`packages/react`](./packages/react)   |       YES        | Production-ready React component library for the St. Jude Cloud design system. Note that CSS from `@stjudecloud/theme-bootstrap` must be loaded for elements to render properly. |
| `@stjudecloud/design.stjude.cloud` |         [`fractal/`](./fractal)          |        NO        | Fractal source code for rendering [https://design.stjude.cloud](https://design.stjude.cloud)                                                                                     |
