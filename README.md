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
```

# loaders

[Using loaders](https://webpack.github.io/docs/using-loaders.html)  
[List of loaders](https://webpack.github.io/docs/list-of-loaders.html)

按照惯例loader一般以 `xxx-loader` 的规则命名，`xxx` 表示这个 `loader` 要做的转换功能，如：`json-loader` 而在引用loader 时，可以使用全名`json-loader`，也可以使用简写形式`json` -- http://itbilu.com/nodejs/npm/Vy6BnJkY-.html


- 基础

`json`: 加载 JSON 文件  
`raw`: 加载文件原始内容(utf-8 编码)  
`val`: 执行代码模块化，并考虑导出为JavaScript代码  
`script`: 在全局上下文件中执行一次 JavaScript 文件(类似 script 标签)，需要不被解析  

- 打包

`file`: 将文件发送到指定输出目录，并返回URL(相对)  
`url`: 类似于file加载器，如果文件小于限制值会返回一个 Data Url  
`image`: 压缩图片。像是一起使用 file 和 url  
`svgo-loader`: 使用svgo库压缩SVG图片  
`baggage`: 自动引入与所需资源相关的文件  
`polymer-loader`: 在“预处理”选择后处理 HTML & CSS 并像一级模块一样require()引入Web组件  

- 语言支持

`coffee`: 像加载JavaScript一样加载 coffee-script  
`babel`: 使用Babel 将 ES6 代码转换为 ES5  
`livescript`: 像加载JavaScript一样加载 LiveScript  
`sweetjs`: 使用 sweetjs macros.  
`traceur`: 通过 Traceur使用未来JavaScript的语法特性  
`typescript`: 像加载JavaScript一样加载 TypeScript  

- 模板

`html`: 将HTML做为字符串导出，需要做为静态资源引用  
`jade`: 加载 jade 模板，并返回一个函数  
`markdown`: 将 Markdown 编译为 HTML  

- 样式

`style`: 添加一个DOM式的模块导出  
`css`: 从绝对路径加载CSS文件，并返回CSS代码  
`less`: 加载并编译一个 less 文件  
`sass`: 加载并编译一个 scss 文件  
`stylus`: 加载并编译一个 stylus 文件  

- 混合

`mocha`: 在browser 或 node.js 中使用mocha进行测试  
`eslint`: 使用ESLint 对剥离的代码进行预加载  
`jshint`: 预加载剥离的代码  
`jscs`: 预加载样式检查  
`injectable`: 允许依赖注入到模块中  
`transform`: 使用 browserify 转换加载  


# reference

[webpackdoc](http://webpackdoc.com/usage.html)  
[IT笔录 / Webpack前端资源](http://itbilu.com/nodejs/npm/Vy6BnJkY-.html)   
[webpack website](http://webpack.github.io/docs/)