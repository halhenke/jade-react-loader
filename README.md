# Jade to React JS loader for Webpack

[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]

## PreRequisites
- [React](https://github.com/facebook/react) & [Webpack](https://github.com/webpack/webpack) are peerDependencies (will be installed automatically with npm 2 but left to end-user under npm 3)

## Usage

Like any loader can be set up in a configuration file but to use in a require statement:

```javascript
var React = require("react");

var template = require("jade-react!./react/components/template.jade");

var JadeComponent = React.createClass({
    render: template
});
```

### Passing Arguments to templates

- If `locals` is an object specifying the components props you can then render the template on the page like so:

```javascript
React.render(React.createElement(JadeComponent, locals), document.getElementById("reactivePlace"));
```

- OR by passing options through the loader

```javascript
var React = require("react");

// pass options as json
var template = require("jade-react?{locals: {}, basedir: "", pretty: true}!./react/components/template.jade");

var JadeComponent = React.createClass({
    render: template
});
```

- OR by passing arguments directly to the template function
- For example if you are using the `css-loader` (and `style-loader`) to create modular CSS packages 
    + typical webpack config:
```javascript
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css?modules&localIdentName=[name]__[local]___[hash:base64:5]'
      }
    ]
  }
```

- then you could pass these styles to your jade template like so:

```javascript
var React = require("react");
var styles = require('./template.css');

var template = require("jade-react!./react/components/template.jade");

var JadeComponent = React.createClass({
    render: function () {
        return template({styles: styles})
    }
});
```

- where they could be referenced as class names:

```jade
section(className=styles.content)
  h1 Hey There!
```

## More Info

- A simple example app (using ES6 syntax) can be seen at [jade-react-loader-example](https://github.com/halhenke/jade-react-loader-example)

- Loader uses the [react-jade](https://github.com/jadejs/react-jade) package and Jade templates are subject to the same limitations as listed there.


## Acknowledgements

- Thanks to [kilokeith](https://github.com/kilokeith) for valuable contributions

[npm-pkg-link]: https://www.npmjs.com/package/jade-react-loader
[releases]:     https://github.com/sugarshin/fly-jade/releases
[npm-ver-link]: https://img.shields.io/npm/v/jade-react-loader.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/jade-react-loader.svg?style=flat-square
