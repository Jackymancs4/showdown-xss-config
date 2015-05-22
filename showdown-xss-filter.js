/*
 *  Showdown XSS Filter extension
 *  https://github.com/VisionistInc/showdown-xss-filter
 *  2015, Visionist, Inc.
 *  License: MIT
 */
(function() {

  // Server-side import
  if (typeof module !== 'undefined') {
    filterXSS = require('xss');
  }

  // Filter out potential XSS attacks before rendering HTML
  var xssfilter = function (converter) {
    return [
      {
        type: "lang",
        filter: function(text) {
          return filterXSS(text);
        }
      }
    ];
  };

  // Client-side export
  if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) {
    window.Showdown.extensions.xssfilter = xssfilter;
  }

  // Server-side export
  if (typeof module !== 'undefined') {
    module.exports = xssfilter;
  }
})();