var jade = require("react-jade");
var React = require("react");

module.exports = function(source) {
  this.cacheable && this.cacheable();
  // TODO: opts
  var template = jade.compile(source);
  var requireString = "var React = require('react');";
  return requireString + " module.exports = " + template.toString();
};
