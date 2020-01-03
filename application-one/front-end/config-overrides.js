/* config-overrides.js */

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.resolve = {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  }
  return config;
}