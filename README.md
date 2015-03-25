# Jade to React JS loader for webpack

## Usage

Like any loader can be set up in a configuration file but to use in a require statement:

```javascript
var template = require("jade-react!./react/components/template.jade");
```

- you will need React loaded in the browser
- you can then render the template on the page like so:

```javascript
React.render(template(locals), document.getElementById("reactivePlace"));
```

## More Info

- Uses the [react-jade](https://github.com/jadejs/react-jade) package and Jade templates are subject to the same limitations as listed there.
- Nothing fancy at present
    + no async
    + no queries
