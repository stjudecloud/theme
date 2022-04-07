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
|       `@stjudecloud/assets`        |          [`assets/`](https://github.com/stjudecloud/theme/tree/main/assets)           |       YES        | Contains all, non-minified assets used on the St. Jude Cloud project.                                                                                                            |
|   `@stjudecloud/theme-bootstrap`   | [`themes/bootstrap`](https://github.com/stjudecloud/theme/tree/main/themes/bootstrap) |       YES        | Both production-ready and development files for the Bootstrap St. Jude Cloud theme.                                                                                               |
|      `@stjudecloud/ui-react`       |   [`packages/react`](https://github.com/stjudecloud/theme/tree/main/packages/react)   |       YES        | Production-ready React component library for the St. Jude Cloud design system.  |
| `@stjudecloud/design.stjude.cloud` |         [`fractal/`](https://github.com/stjudecloud/theme/tree/main/fractal)          |        NO        | Fractal source code for rendering [https://design.stjude.cloud](https://design.stjude.cloud).                                                                                     |

## Publish Features Across Packages

While this repo features several packages that you can pull into a project
independently, it should be noted that there are some interdependencies between
the repo&#39;s packages which could affect the order in which you make your changes. 

For example, if you want to add an app to the omnibar, you should
make changes and publish the image to the assets package to then use it in
rendering the DSM or creating a component. The same idea applies if you
need to make styling changes in the Bootstrap package that you would then use in
a framework component. Refer to the table below for
guidance on how these packages affect one another. 

|            Package                   |               St. Jude Cloud Dependencies| 
|  :-------------------------------:   | :------------------------------------------------------: | 
|        `@stjudecloud/assets`         |                        None                              |
|    `@stjudecloud/theme-bootstrap`    |                        None                              |        
|       `@stjudecloud/ui-react`        |  `@stjudecloud/assets` & `@stjudecloud/theme-bootstrap`  |       
|  `@stjudecloud/design.stjude.cloud`  |  `@stjudecloud/assets` & `@stjudecloud/theme-bootstrap`  |
