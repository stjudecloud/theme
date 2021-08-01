# St. Jude Cloud Theme React
Ready-to-use React components available for St. Jude Cloud React apps!

## Using this package
`npm add @stjudecloud/theme-react`

```javascript
  import {Navbar} from '@stjudecloud/theme-react';

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

## Local Setup
Simply `npm install` and you can get started.

- Build the library locally with `npm run build`
- View and development components via storybook with `npm run storybook`

## Optional Dependencies (react-router-dom)

Originally, [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) was listed as an optional dependency. However, it turns out that NPM does [not](https://github.com/npm/npm/issues/20934) [actually](https://github.com/npm/npm/issues/17633) [skip](https://github.com/npm/npm/issues/20934) [optional](https://npm.community/t/npm-ci-no-optional/6054) [dependencies](https://github.com/npm/npm/issues/14185). For this reason. it is declared as a peer dependency, but is correctly handled if the dependency is missing.
