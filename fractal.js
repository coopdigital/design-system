'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Design system');
fractal.set('project.version', 'v1.0');
fractal.set('project.author', 'Matt Tyas');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'node_modules/coop-components/components'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));

/*
 * Set the static HTML build destination
 */
fractal.web.set('builder.dest', __dirname + '/build');

/*
 * Set custom Coop statuses
 */
fractal.components.set('statuses', {
  prototype: {
      label: "Alpha",
      description: "Do not implement.",
      color: "#FF3333"
  },
  wip: {
      label: "Beta",
      description: "Work in progress. Implement with caution.",
      color: "#FF9233"
  },
  ready: {
      label: "Live",
      description: "Ready to implement.",
      color: "#29CC29"
  }
});

/*
 * Set custom Coop theme
 */
const mandelbrot = require('@frctl/mandelbrot');

const CoopTheme = mandelbrot({
  "styles": [
      "default",
      "/css/coop-theme.css"
  ],
  panels: ["html", "notes", "context", "info" ]
});

fractal.web.theme(CoopTheme);

// specify a directory to hold the theme override templates
// CoopTheme.addLoadPath(__dirname + '/coop-theme-overrides');
