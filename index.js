const CleanObsoleteChunks = require('webpack-clean-obsolete-chunks')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const defaultPathsToClean = ['dist/*.*']
const defaultCleanOptions = {
  root: process.cwd(),
  exclude: '.gitignore'
}

module.exports = function (plugins, pathsToClean = defaultPathsToClean, cleanOptions = {}) {
  const combinedCleanOptions = Object.assign(defaultCleanOptions, cleanOptions)

  plugins.push(new CleanObsoleteChunks())
  plugins.push(new CleanWebpackPlugin(pathsToClean, combinedCleanOptions))
}
