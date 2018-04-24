# Design system

WIP: The design system fractal instance is a wrapper for 2 Co-op dependancies. The SCSS and HTML exist in separate repositories so they can be included in projects as needed.

- SCSS: Co-op front-end toolkit - https://github.com/coopdigital/coop-frontend-toolkit
- HTML (as HBS): Co-op components - https://github.com/coopdigital/coop-components

## Installation

[Fractal](https://fractal.build/) component library for future membership work

Requirements: NodeJS 4.4.7+ / npm 6.0.0

First, check out repository (https://github.com/coopdigital/design-system) on your machine, and navigate to the repository root in a terminal window.

Install the Fractal CLI helper globally

```sh
$ npm i -g @frctl/fractal
```

Install node dependencies (`gulp-cli` needs to be installed globally):

```sh
$ npm install
$ npm install -g gulp-cli
```

This will get the toolkit SCSS and the component HTML.

## Linking the SCSS and HTML for working locally

The Design system is set up to allow easy development work on the Toolkit and HTML components. In order to reflect changes made to your local versions directly in your local version of the Design system, you must first link the NPM dependency to your local versions.

First clone the Toolkit repository:

```sh
git clone git@github.com:coopdigital/coop-frontend-toolkit.git
```

Create a reference to the local NPM package from the Toolkit directory:


```sh
cd coop-frontend-toolkit
npm link
```

From the Design system directory, link the NPM package to the local version:

```sh
cd ../design-system
npm link coop-frontend-toolkit
```

Then clone the Components repository:

```sh
git clone git@github.com:coopdigital/coop-components.git
```

Create a reference to the local NPM package from the Components directory:

```sh
cd coop-components
npm link
```

From the Design system directory, link the NPM package to the local version:

```sh
cd ../design-system
npm link coop-components
```

Any changes made to the local version of the Toolkit or Components will now automatically be reflected in the local version of the Design system.

## Start local server

Start Fractal & Gulp locally.

This triggers file watching and browser syncing, which means your local dev site will auto-update with changes.

```sh
$ ./start.sh
```

Navigate to http://localhost:3000/

## Deploy

The Design system deploys the /build folder to Heroku using https://github.com/paulmsmith/heroku-buildpack-static 
