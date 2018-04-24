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
fractal.set('project.title', 'Design System');
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
 * Set custom Coop theme
 */
const mandelbrot = require('@frctl/mandelbrot');

const CoopTheme = mandelbrot({
  "styles": [
      "default",
      "/css/coop-theme.css"
  ],
  panels: ["html", "context", "info", "notes" ]
});

fractal.web.theme(CoopTheme);
