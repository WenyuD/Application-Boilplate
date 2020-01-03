"use strict";

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/* config-overrides.js */
module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.resolve = {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  };
  return config;
};