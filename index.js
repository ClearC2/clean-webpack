const CleanObsoleteChunks = require('webpack-clean-obsolete-chunks')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const defaultPathsToClean = [process.cwd() + '/dist/*.*']
const defaultCleanOptions = {exclude: '.gitignore'}

module.exports = function (plugins, pathsToClean = [], cleanOptions = {}) {
  const combinedPathsToClean = defaultPathsToClean.concat(pathsToClean)
  const combinedCleanOptions = Object.assign(defaultCleanOptions, cleanOptions)

  plugins.push(new CleanObsoleteChunks())
  plugins.push(new CleanWebpackPlugin(combinedPathsToClean, combinedCleanOptions))

  console.log(plugins)
}
