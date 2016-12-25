# webpack learning notes

## lesson04
配置loaders和plugins  

- [using-loaders](http://webpack.github.io/docs/using-loaders.html)
- [loaders](http://webpack.github.io/docs/loaders.html)
- [configuration](http://webpack.github.io/docs/configuration.html)

![view](./view.png)


install all needed pages ,as below:
```bash
npm install
```

run this command:
```bash
npm run build
```
to create compiled files into directory 'dist'; 

```js

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;


module.exports = {
    // entry 可以为：字符串，数组，对象，其值是入口文件的 相对路径
    // output.filename ,如果entry传入的是字符串（如下）并且filename以[name]为命名规则，并且未指定filename的值，
    // 那么默认会以app为文件名，即app.js
    entry: {
      app : "./entry"
    },
    output: {
        path:path.resolve(__dirname + '/dist'),
        filename: '[name].js'
    },
    reslove:{
        root: __dirname,
        extensions : ['','.js']
    },
    module: {
        loaders: [
            { test: /\.css$/, 
              loader: "style!css" 
            },
            // https://www.npmjs.com/package/file-loader
            // name 属性定义了输出文件名，可包含输出路径
            { test: /\.(jpe?g|png|gif|ico)/i,
              loader: 'file?name=images/[name].[ext]'
            }, 
            // 类似file-loader ,但返回值为：Data Url
            // https://www.npmjs.com/package/url-loader
            { 
              test: /\.(woff|svg|eot|ttf)\??.*$/, 
              loader: 'url-loader?limit=30000'
            },
        ]
    },
    plugins: [
    // 自动生成webpack编译打包后的html文件，尤其是使用了[hash]等值的文件，由于每次编译后hash有所变化，
    // 我们就不需手动修改加载文件，这个插件就会自动帮我们重新生成新的html文件
    // https://www.npmjs.com/package/html-webpack-plugin
    new HtmlWebpackPlugin({
      // 生成html文件的title，template配置将覆盖此项
      title:'webpack demo',
      // template: __dirname + '/index.html', // html的模板文件
      // filename：'index.html' // 生成的html文件名，默认index.html
      // inject: 'body' //将所有资源注入到模板生成文件中，true 和 body 会放在body底部，head 会防止head中
    }),
    // 提取公共部分的插件，name为必需值，可为字符串或字符串数组；已存在的代码块（chunk）可将其名称作为参数传入
    // filename默认与name值相同
    // http://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
    new CommonsChunkPlugin({
      filename: "[name]/[hash:8].[name].js",
      name:'common'
    }),
    // 代码混淆压缩插件
    // http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};


```
