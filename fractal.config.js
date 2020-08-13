'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'design.stjude.cloud');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/docs');

/* Specify a directory of static assets */
fractal.web.set('static.path', __dirname + '/dist');

/* Set the static HTML build destination */
fractal.web.set('builder.dest', __dirname + '/fractal-build');

// require the Mandelbrot theme module
const mandelbrot = require('@frctl/mandelbrot');

// create a new instance with custom config options
const myCustomisedTheme = mandelbrot({
  skin: 'blue',
  styles: [
    'default',
    '/css/fractal-theme.css'
  ],
  favicon: '/images/favicon.ico',
  panels: ['html', 'view', 'info', 'notes'],
  // any other theme configuration values here
});

// specify a directory to hold the theme override templates
myCustomisedTheme.addLoadPath(__dirname + '/dist');

// specify a directory to hold the theme override templates
//myCustomisedTheme.addLoadPath(__dirname + '/sjds-theme');

// tell Fractal to use the configured theme by default
fractal.web.theme(myCustomisedTheme);

fractal.web.set('server.sync', true); // default is false