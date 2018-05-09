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
      color: "#0F8482"
  }
});


// fractal.components.load().then(() => {
//     fractal.components.render('context/index.hbs', {
//         appTitle: 'Example',
//         buttonData: {
//             text: 'Log in ->'
//         }
//     }).then(html => {
//         console.log(html)
//     });
// });


/*
 * Set custom Coop theme
 */
const mandelbrot = require('@frctl/mandelbrot');

const coopTheme = mandelbrot({
  "styles": [
      "default",
      "/css/coop-theme.css"
  ],
  panels: ["html", "notes", "context", "info", "resources", "view" ]
});

// Add a page to display components in context
coopTheme.addRoute('/components/preview/page', {
    handle: 'Preview',
    view: (path.resolve(__dirname + '/node_modules/coop-components/components/examples/page.nunj'))
});


// template overrides
coopTheme.addLoadPath(__dirname + '/coop-theme');

fractal.web.theme(coopTheme);
