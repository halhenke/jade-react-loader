var jade = require("react-jade");
var React = require("react");
var loaderUtils = require("loader-utils");

module.exports = function(source) {
  this.cacheable && this.cacheable();
  // options
  var loaderOptions = loaderUtils.parseQuery(this.query);
  
  var template = jade.compile(source, loaderOptions);
  var requireString = "var React = require('react');";
  return requireString + "\n" + "module.exports = " + template.toString();
};
