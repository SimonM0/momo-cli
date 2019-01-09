![CircleCI](https://img.shields.io/circleci/project/github/Fried-Chicken/momo-cli/develop.svg)
![Version](https://img.shields.io/badge/version-v0.0.6-blue.svg)
![Issues](https://img.shields.io/github/issues/Fried-Chicken/momo-cli.svg)
![License](https://img.shields.io/github/license/Fried-Chicken/momo-cli.svg)
![Stars](https://img.shields.io/github/stars/Fried-Chicken/momo-cli.svg)
![Forks](https://img.shields.io/github/forks/Fried-Chicken/momo-cli.svg)
# momo-cli 

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

It's not the end of the world, the user can always modify the generated files. But if you want you can contribute a feature where the tool will pickup template files from the root directory of the project where the user has ran the cli in and also add a `.momorc` file for easily editing settings then that would be sooooo coooooooooool!!! 😎I'd be very greatful and you'd be famous!

## Installation
```
$ npm i -g momo-cli
```
**note:** This package must be installed globally if you want to generate functions in other folders beside the root of your project.

If you don't want to install globally and you don't want to install it in your project either, you can use the `npx` command but bear in mind this will take a little longer to startup.
```
$ npx momo-cli
```

## Usage
Navigate to your folder of choice and run the `momo` command and answer all the questions.
```
$ momo
```
