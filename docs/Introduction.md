# [webpack 配置](https://webpack.js.org/configuration/)

webpack的两种配置方式:  

- 终端
 使用命令行方式制定配置参数，如：
 ```shell
  webpack --config ./config.js --progress --colors
 ```

- node.js
结合node使用，在`js`文件中制定配置参数，常用的也是这种方式，学习的时候最好结合[`IT 笔录 / 配置对象`](https://itbilu.com/nodejs/npm/Vy6BnJkY-.html#configuration) 和 [webpack2.x基础属性讲解](http://www.bubuko.com/infodetail-2007986.html)，如：
```js
const path = require('path');

module.exports = {
  // 指定webpack的入口文件
  entry: "./app/entry", // string | object | array
  // 指定输出参数
  output: {
    // 指定输出路径，必须为绝对路径
    path: path.resolve(__dirname, "dist"),
    // 指定编译后的 入口文件 的输出文件名
    filename: "bundle.js",
    // 配置公共请求路径，如下指定为 /assets/ 那么我们访问请求URL的时候就需要在URL的前面加上这个 公共路径，详情参见文档
    publicPath: "/assets/",
    // 导出库的文件名 the name of the exported library
    library: "MyLibrary",
    // 导出库的编码规范 AMD CMD UMD
    libraryTarget: "umd"
  },
  // 指定模块加载使用规则
  module: {
    // 加载器匹配规则
    rules: [
      {
        // 正则匹配规则，匹配后缀为 .jsx的文件
        test: /\.jsx?$/,
        // 只 加载 app目录下的.jsx文件
        include: [
          path.resolve(__dirname, "app")
        ],
        // 并且 排除 app/demo-files 这个目录或文件
        exclude: [
          path.resolve(__dirname, "app/demo-files")
        ],
        // 指定条件的发起者
        issuer: { test, include, exclude },
        // 指定加载器 执行顺序，pre 或者 post
        enforce: "pre",
        enforce: "post",
        // 指定加载器，**rule.use** 的简写，既然是2了，就应该按照2的写法使用 use 来配置
        loader: "babel-loader",
        // 加载参数
        options: {
          presets: ["es2015"]
        },
      },
      {
        test: "\.html$",
        use: [
          "htmllint-loader",
          {
            loader: "html-loader",
            options: {
              /* ... */
            }
          }
        ]
      }
    ]
  },
  // 指定模块解析规则
  resolve: {
    // 指定加载模块的搜索路径，Tell webpack what directories should be searched when resolving modules.
    modules: [
      "node_modules",
      path.resolve(__dirname, "app")
    ],
    // 指定文件后缀
    extensions: [".js", ".json", ".jsx", ".css"],
    // 指定模块别名
    alias: {
      "module": "new-module",
    }
  },
  // 指定 webpack-dev-server 插件开发时候的配置参数
  devServer: {
    proxy: { // proxy URLs to backend development server
      '/api': 'http://localhost:3000'
    },
    contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
    // ...
  },

  plugins: [
    // ...
  ]
}
```