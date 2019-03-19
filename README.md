# Design system

WIP: The design system fractal instance is a wrapper for 2 Co-op dependancies. The SCSS and HTML exist in separate repositories so they can be included in projects as needed.

- SCSS: Co-op foundations - https://github.com/coopdigital/coop-frontend-foundations
- HTML: Co-op components - https://github.com/coopdigital/coop-components

## Installation

[Fractal](https://fractal.build/) component library

Requirements: NodeJS 4.4.7+ / npm 6.0.0

First, check out repository (https://github.com/coopdigital/design-system) on your machine, and navigate to the repository root in a terminal window.

```sh
$ npm install
```

This will get the toolkit SCSS and the component HTML.

## Linking the SCSS and HTML for working locally

The Design system is set up to allow easy development work on the Toolkit and HTML components. In order to reflect changes made to your local versions directly in your local version of the Design system, you must first link the NPM dependency to your local versions.

First clone the Toolkit repository:

```sh
git clone git@github.com:coopdigital/coop-frontend-foundations.git
```

Create a reference to the local NPM package from the Toolkit directory:


```sh
cd coop-frontend-foundations
npm link
```

From the Design system directory, link the NPM package to the local version:

```sh
cd ../design-system
npm link coop-frontend-foundations
```

Then clone the Components repository:

```sh
git clone git@github.com:coopdigital/coop-frontend-components.git
```

Create a reference to the local NPM package from the Components directory:

```sh
cd coop-frontend-components
npm link
```

From the Design system directory, link the NPM package to the local version:

```sh
cd ../design-system
npm link coop-frontend-components
```

Any changes made to the local version of the Foundations or Components will now automatically be reflected in the local version of the Design system.

## Start local server

Start Fractal & webpack locally.

This triggers file watching and browser syncing

```sh
$ npm run watch
```

Navigate to http://localhost:3000/

## Deploy

The Design system deploys the /build folder to Heroku using https://github.com/paulmsmith/heroku-buildpack-static

You have to commit the /build folder and run:

```sh
$ npm run build
```

Before pushing.
