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
 * Nunjucks is similar to Jinja2 which we use for our django apps
 * So we'll try that...
 */
fractal.components.engine('@frctl/nunjucks');
fractal.components.set('ext', '.html');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'node_modules/coop-frontend-components'));

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
      color: "#1AA579"
  }
});

/*
 * Set custom Coop theme
 */
const mandelbrot = require('@frctl/mandelbrot');

const coopTheme = mandelbrot({
  "styles": [
      "default",
      "/css/coop-theme.css"
  ],
  panels: ["html", "notes", "context", "info", "resources" ]

});

// Template overrides
coopTheme.addLoadPath(__dirname + '/coop-theme');

// Homepage override
coopTheme.addRoute('/', {
  handle: 'overview',
  view: (__dirname + '/coop-theme/pages/landing.nunj')
});

fractal.web.theme(coopTheme);
