# webpack

- [Docs](http://webpack.github.io/docs/tutorials/getting-started/)

> add loaders to webpack
* add loaders in require()

```js
require('!style!css!./style.css')
```

* binding loaders
bind loaders to CLI 

```bash
webpack ./entry.js bundle.js --module-bind 'css=style!css'
```
* config loaders
add webpack.config.js

```js
module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};

```
and then,just run

```bash
webpack  
```
