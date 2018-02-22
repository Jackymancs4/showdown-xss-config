(function(extension) {
  if (typeof showdown !== 'undefined') {
    // global (browser or nodejs global)
    extension(showdown);
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['showdown'], extension);
  } else if (typeof exports === 'object') {
    // Node, CommonJS-like
    module.exports = extension(require('showdown'));
  } else {
    // showdown was not found so we throw
    throw Error('Could not find showdown library');
  }
}(function(showdown) {

  if (typeof module !== 'undefined') {
    filterXSS = require('xss');
  }

  return extension = (config) => {

    return () => {
      return [{
        type: "output",
        filter: function(text) {
          return filterXSS(text, config);
        }
      }]
    }
  }

}));
