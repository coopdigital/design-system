# Design system

WIP: The design system fractal instance is a wrapper for 2 Co-op dependancies. The SCSS and HTML exist in separate repositories so they can be included in projects as needed.

- SCSS: Co-op front-end toolkit - https://github.com/coopdigital/coop-frontend-toolkit
- HTML (as HBS): Co-op components - https://github.com/coopdigital/coop-components

## Installation

[Fractal](https://fractal.build/) component library for future membership work

Requirements: NodeJS 4.4.7+

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

## Start local server

Start Fractal & Gulp locally.

This triggers file watching and browser syncing, which means your local dev site will auto-update with changes.

```sh
$ ./start.sh
```

Navigate to http://localhost:3000/
