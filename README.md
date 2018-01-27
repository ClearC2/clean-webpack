# clean-webpack
Plugins for cleaning up old webpack builds


## What Does This Package Do?
This package provides an easy plug-and-play alternative to the steps listed in the original how-to below.

## Install
1. Add the following line to the devDependencies section in your package.json: 

````
"clean-webpack": "git+ssh://git@github.com:ClearC2/clean-webpack.git"
````

2. Run `yarn` in your project root


## Implement

Add the following to your webpack config:

````js
import CleanWebpack from 'clean-webpack'

CleanWebpack(plugins, pathsToClean, cleanOptions)
````

where `plugins` is your array of plugins, `pathsToClean` is an [array of paths](https://github.com/johnagan/clean-webpack-plugin#options-and-defaults-optional) you want to clean, and `cleanOptions` is an [option config object](https://github.com/johnagan/clean-webpack-plugin#options-and-defaults-optional).

Only the first parameter (`plugins`) is required. If left blank, the other two will use the defaults below. If not, arrays/objects passed in here will be concatenated/shallowly merged onto the defaults below.

### Defaults

````js
pathsToClean = ['dist/*.*']

cleanOptions = {exclude: '.gitignore'}
````

### Example 1 (Most Cases)

````js
import CleanWebpack from 'clean-webpack'

let plugins = []

CleanWebpack(plugins)
````

This will use the defaults above.

### Example 2 (Special Configs)

````js
import CleanWebpack from 'clean-webpack'

let plugins = []
const pathsToClean = ['brand-new-path']
const cleanOptions = {verbose: false, exclude: 'something else'}

CleanWebpack(plugins, pathsToClean, cleanOptions)
````

The combined paths array and config object would then be:

````js
pathsToClean = ['dist/*.*', 'brand-new-path']
cleanOptions = {exclude: 'something else', verbose: false}
````

## Original How-To

Webpack doesn’t clean up after itself very well. It leaves old files in the dist directory, meaning eventually the dist directory will be filled with obsolete files. This happens everytime webpack compiles, regardless of whether it is using the --watch flag or not. To fix this, we need two packages:

* [webpack-clean-obsolete-chunks](https://www.npmjs.com/package/webpack-clean-obsolete-chunks)
* [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin)

### How to Use:
1. Install and save both packages as dev dependencies
2. Add these plugins into webpack.config.js

````js
const CleanObsoleteChunks = require('webpack-clean-obsolete-chunks')
const CleanWebpackPlugin = require('clean-webpack-plugin')

let plugins = [ ... ]

plugins.push(new CleanObsoleteChunks())
plugins.push(new CleanWebpackPlugin(['dist/*.*'], {exclude: '.gitignore'}))
````
