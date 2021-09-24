<p align="center">

  <h1 align="center">
    St. Jude Cloud React Component Library
  </h1>

  <p align="center">
   <a href="https://github.com/stjudecloud/theme/tree/main/packages/react" target="_blank">
     <img alt="Status"
          src="https://img.shields.io/badge/status-active-success.svg" />
   </a>
   <a href="https://github.com/stjudecloud/theme/issues?q=is%3Aissue+is%3Aopen+label%3A%40stjudecloud%2Fui-react" target="_blank">
     <img alt="Github Issues"
          src="https://img.shields.io/github/issues/stjudecloud/theme/%40stjudecloud%2Fui-react?label=issues"  />
   </a>
   <a href="https://github.com/stjudecloud/theme/pulls?q=is%3Apr+is%3Aopen+label%3A%40stjudecloud%2Fui-react"  target="_blank">
     <img alt="Pull Requests"
          src="https://img.shields.io/github/issues-pr/stjudecloud/theme/%40stjudecloud%2Fui-react?label=pull%20requests"  />
   </a>
  </p>


  <p align="center">
    <a href="https://reactjs.org/">React</a> component library for the St. Jude Cloud design system. See the repository's root <a href="http://github.com/stjudecloud/theme"><code>README.md</code></a> for more information on the design system itself.
   <br />
   <br />
   <a href="https://github.com/stjudecloud/theme/issues/new?assignees=&labels=&template=feature_request.md&title=Descriptive%20Title&labels=enhancement,%40stjudecloud%2Fui-react">Request Feature</a>
    | 
   <a href="https://github.com/stjudecloud/theme/issues/new?assignees=&labels=&template=bug_report.md&title=Descriptive%20Title&labels=bug,%40stjudecloud%2Fui-react">Report Bug</a>
   <br />
    ⭐ Consider starring the repo! ⭐
   <br />
  </p>
</p>

## Quick Start

Use the following commands to get started quickly.

```bash
# Clone the repository and cd to packages/react
git clone https://github.com/stjudecloud/theme.git
cd theme/packages/react

# Install dependencies
npm install

# Build the library as ESM and CommonJS
npm run build

# Run a storybook instance to interactively develop components
npm run storybook
```

## Versioning

This repository matches Bootstrap's two major version numbers. If this repository's version is v4.3.123, then it depends on Bootstrap v4.3.x.

## Using this package

First, add the library to your `package.json`:

```bash
npm add @stjudecloud/theme-react
```

Next, use any of the components provided by the library in your own designs.

```javascript
  import {Navbar} from '@stjudecloud/ui-react';

  function MyComponent() {
    return (
      <div>
        <Navbar {...props} />
        Cool content
      </div>
    );
  }
```

**PLEASE NOTE: Your build process will need to be able to handle importing image files, e.g. with [`webpack`](https://webpack.js.org/) + [`file-loader`](https://www.npmjs.com/package/file-loader).**

## Optional Dependencies (react-router-dom)

Originally, [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) was listed as an optional dependency. However, it turns out that NPM does [not](https://github.com/npm/npm/issues/20934) [actually](https://github.com/npm/npm/issues/17633) [skip](https://github.com/npm/npm/issues/20934) [optional](https://npm.community/t/npm-ci-no-optional/6054) [dependencies](https://github.com/npm/npm/issues/14185). For this reason. it is declared as a peer dependency, but is correctly handled if the dependency is missing.

### Copyright

© 2021-Present St. Jude Children's Research Hospital.
