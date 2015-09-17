const jade = require('react-jade');
// const React = require('react');
const loaderUtils = require('loader-utils');

// module.exports = function(source) {
export default function (source) {
  this.cacheable && this.cacheable();
  // options
  const loaderOptions = loaderUtils.parseQuery(this.query);

  const template = jade.compile(source, loaderOptions);
  const requireString = 'var React = require("react");';
  return `${requireString}\nmodule.exports = ${template.toString()}`;
  // var requireString = 'var React = require("react");';
  // return requireString + '\n' + 'module.exports = ' + template.toString();
}
