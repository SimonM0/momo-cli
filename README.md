# momo-cli | [![CircleCI](https://circleci.com/gh/Fried-Chicken/momo-cli.svg?style=svg&circle-token=f4e5abd60120ee95e7f44614e2bd645286604a0c)](https://circleci.com/gh/Fried-Chicken/momo-cli)

## Description
This is a cli tool that I wrote for myself to help me generate a consistent style when developing. This tool will allow you to generate functions with tests and an index.js file to export the function from the generated folder.

![Example](./docs/example.gif)

Currently I have added the common templates that I like to use, these generate:
  * Actions
  * Components
    * Stateless Function Components
    * Class Components
    * Higher Order Components
    * Pure Components
    * Page Components
    * Screen Components
  * Containers
  * Helpers
  * Plain Functions
  * Reducers
  * Selectors


## You can help!
Because I wrote this tool for my own projects, this tool may generate some templates that import and use the following libraries.
* [seamless-immutable](https://github.com/rtfeldman/seamless-immutable)
* [reselect](https://github.com/reduxjs/reselect)
* [lodash](https://github.com/lodash/lodash)

It's not the end of the world, the user can always modify the generated files. But if you want you can contribute a feature where the tool will pickup template files from the root directory of the project where the user has ran the cli in and also add a `.momorc` file for easily editing settings then that would be sooooo coooooooooool!!! 😎

## Installation
```
$ npm i -g momo-cli
```
**note:** This package must be installed globally.

## Usage
Navigate to your folder of choice and run the `momo` command and answer all the questions.
```
$ momo
```
