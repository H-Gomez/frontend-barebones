# Frontend Barebones

A barebones front-end development environment which handles the setup of ESLint, Prettier, Parcel and other development dependencies. 

Run `npm install` to get started. That's it. 

# What's Included
### Dev Dependecies

- [prettier](https://github.com/prettier/prettier) - An opinionated code formatter setup to automatically stylise code when the package is run. This is responsible for formatting only - no code quality checking.

- [eslint](https://github.com/eslint/eslint) - A highly customisable Javascript linter. This will perform checking of code quality and is not concerned with code aesthetics.

- [eslint config prettier](https://github.com/prettier/eslint-config-prettier) -  Turns off all ESLint rules that are unnecessary or might conflict with Prettier.

- [eslint plugin prettier](https://github.com/prettier/eslint-plugin-prettier) - An ESLint plugin that allows Prettier formatting changes and identifications to be shown as ESLint errors/warnings. 

- [parcel bundler](https://github.com/parcel-bundler/parcel) - A blazing fast, zero configuration web application bundler

### Files
`.env` - Store environment variables here. 

`.prettierrc` - Specific rule overrides for Prettier in regards of code formatting. 

`.eslintrc` - Configuration for ESLint. In this instance informs it was ES version to validate to and to run Prettier. 

### Scripts
`format` - Runs Prettier against all JS, JSX, CSS, HTML and JSON files in the /src directory.

`lint` - Runs ESLint against all JS and JSX files. 