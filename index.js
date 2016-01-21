const jade = require('react-jade');
const loaderUtils = require('loader-utils');

export default function (source) {
  this.cacheable && this.cacheable();
  const loaderOptions = loaderUtils.parseQuery(this.query);
  const req = loaderUtils.getRemainingRequest(this).replace(/^!/, '');
  const template = jade.compile(source, {filename: req, ...loaderOptions});
  const requireString = 'var React = require("react");';
  return `${requireString}\nmodule.exports = ${template.toString()}`;
}
