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
- Run the test suite with `npm test`. [This is NYI.]
- View and development components via storybook with `npm run storybook`
