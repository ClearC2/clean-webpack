const CleanObsoleteChunks = require('webpack-clean-obsolete-chunks')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = function (plugins, pathsToClean = [], cleanOptions = {}) {
  const defaultPathsToClean = ['dist/*.*']
  const defaultCleanOptions = {
    root: process.cwd(),
    exclude: '.gitignore'
  }

  const combinedPathsToClean = defaultPathsToClean.concat(pathsToClean)
  const combinedCleanOptions = Object.assign(defaultCleanOptions, cleanOptions)

  plugins.push(new CleanObsoleteChunks())
  plugins.push(new CleanWebpackPlugin(combinedPathsToClean, combinedCleanOptions))
}
