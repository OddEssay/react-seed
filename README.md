# React Seed

[![Coverage Status](https://coveralls.io/repos/github/OddEssay/react-seed/badge.svg?branch=feature%2Fcode-coverage)](https://coveralls.io/github/OddEssay/react-seed?branch=feature%2Fcode-coverage)

## Build Packages

### webpack
Builds the project from source with a series of loaders and places into "bundles"

### babel
Takes JSX and ES6 code and adds the appropriate polyfills to deliver backwards
compatible JavaScript.

## Testing

The project uses jest for testing, and makes use of the "Snapshot" method outlined at https://facebook.github.io/jest/docs/tutorial-react.html#snapshot-testing

### Not tested elements
*Sagas:* Because the API based nature of the functions would rely on heavy mocking, without extensive work you'd just be testing the mocks, not the API.

*actionCreators:* Because they simply mutate inputs to an object.

*reducers:* Like actionCreators, simply mutate input and testing at this stage would add unneeded fragility. More complex reducers may be tested in the future.



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

| npm run ...     |                                                  |
|-----------------|--------------------------------------------------|
| start           | Run webpack-dev-server on http://localhost:8080  |
| test            | Run jest tests                                   |
| test -- --watch | Run jest in watch mode                           |

### Other Notes

## Inline spin.js

In `src/index.html` the minified version of spin.js is placed inline, and attached to the `#app` div.
This gives a loading state to the user, and when React attaches to the div is simply removed.

# Repo Notes

## Greenkeeper
This repo uses Green Keeper from https://greenkeeper.io to monitor the npm packages and automatically issue Pull Requests when there are updates available.

## Shippable CI
This repo is configured to be tested on Shippable CI from https://shippable.com  to automatically test each commit.
