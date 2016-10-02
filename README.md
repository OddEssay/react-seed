# React Seed

[![Run Status](https://api.shippable.com/projects/57d043eb0630640f004d4dcc/badge?branch=master)](https://app.shippable.com/projects/57d043eb0630640f004d4dcc)

## Build Packages

### webpack
Builds the project from source with a series of loaders and places into "bundles"

### babel
Takes JSX and ES6 code and adds the appropriate polyfills to deliver backwards
compatible JavaScript.

## Testing

The project uses jest for testing, and makes use of the "Snapshot" method outlined at https://facebook.github.io/jest/docs/tutorial-react.html#snapshot-testing

Tests for Redux actionCreators are along side the reducers and tested together under `src/reducers/__tests__/`

### Not tested elements
*Sagas:* Because the API based nature of the functions would rely on heavy mocking, without extensive work you'd just be testing the mocks, not the API.


## Project Structure

| folder               | contents                                              |
|----------------------|-------------------------------------------------------|
| `./src`              | JavaScript Source Files                               |
| `./src/components`   | React Components                                      |
| `./src/**/__tests__` | Jest tests relative to their components               |
| `./src/reducers`     | The Redux Reducers                                    |
| `./src/actions`      | The Redux Actions                                     |
| `./src/sagas`        | The Redux Sagas (For Async functions)                 |

## NPM Commands

| npm run ...     |                                                            |
|-----------------|----------------------------------------------------------- |
| start           | Run webpack-dev-server on http://localhost:8080            |
| test            | Run jest tests                                             |
| test -- --watch | Run jest in watch mode                                     |
| lint            | Run local eslint against the code in `src`                 |
| lint-fix        | Run local eslint with --fix to resolve any issues it can   |

### Other Notes

## Inline spin.js

In `src/index.html` the minified version of spin.js is placed inline, and attached to the `#app` div.
This gives a loading state to the user, and when React attaches to the div is simply removed.

# Repo Notes

## Greenkeeper
This repo uses Green Keeper from https://greenkeeper.io to monitor the npm packages and automatically issue Pull Requests when there are updates available.

## Shippable CI
This repo is configured to be tested on Shippable CI from https://shippable.com  to automatically test each commit.

## Where are the semi-colons, you monster?!
ES6 alows for a lot of noise free code, and for me semi-colons just feel out of place.
If you don't agree, or Crockford's brainwashed you too deeply, then just update `.eslintrc.js` to change the "semi" rule from `never` to `always` and run `npm run lint-fix` to have eslint add them back automagically.

That applies to all the eslint rules, I try to be very strict in the rules I apply so you should add your own. If you add your own eslintrc file, don't forget to include the existing "env", "parserOptions" and "plugins" so the React and ES6 syntax works as expected. 
