# webpack


## install

```bash
npm install webpack -g
```

## webpack CLI

* add progress and colors on termial when compiling code

```
webpack --progress --colors
```

* apply watch mode if u want to auto recompile code after every change

```
webpack --progress --colors --watch
```

* use webpack-dev-server as a local server

```
npm install webpack-dev-server -g
```

This binds a small express server on localhost:8080 which serves your static assets as well as the bundle (compiled automatically).It automatically updates the browser page when a bundle is recompiled 
```
webpack-dev-server --progress --colors