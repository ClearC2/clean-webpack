const CleanObsoleteChunks = require('webpack-clean-obsolete-chunks')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const defaultPathsToClean = ['dist/*.*']
const defaultCleanOptions = {exclude: '.gitignore'}

module.exports = function (plugins, pathsToClean = [], cleanOptions = {}) {
  const combinedPathsToClean = defaultPathsToClean.concat(pathsToClean)
  const combinedCleanOptions = Object.assign(defaultCleanOptions, cleanOptions)

  console.log('=========================================================')
  console.log('=========================================================')
  console.log('=========================================================')
  console.log('=========================================================')
  console.log('=========================================================')
  console.log('=========================================================')
  console.log('=========================================================')
  console.log('=========================================================')
  console.log('=========================================================')
  console.log('=========================================================')
  console.log('=========================================================')
  console.log('=========================================================')
  console.log('=========================================================')
  console.log('=========================================================')

  console.log('combinedPathsToClean:', JSON.stringify(combinedPathsToClean))

  console.log('==========================')

  console.log('combinedCleanOptions:', JSON.stringify(combinedCleanOptions))

  console.log('=========================================================')
  console.log('=========================================================')
  console.log('=========================================================')
  console.log('=========================================================')
  console.log('=========================================================')
  console.log('=========================================================')
  console.log('=========================================================')
  console.log('=========================================================')
  console.log('=========================================================')
  console.log('=========================================================')
  console.log('=========================================================')
  console.log('=========================================================')
  console.log('=========================================================')
  console.log('=========================================================')

  plugins.push(new CleanObsoleteChunks())
  plugins.push(new CleanWebpackPlugin(combinedPathsToClean, combinedCleanOptions))

  console.log(plugins)
}
