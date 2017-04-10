# [输出参数](https://doc.webpack-china.org/configuration/output/)

指定webpack编译后文件输出配置，如输出目录，名称等...

## output.chunkFilename

- `字符串`

 指定chunk文件命名规则,默认使用`[id].js`或从 output.filename 中推断出的值（[name] 会被预先替换为 [id] 或 [id].）

## output.filename

- `字符串` 

 指定每一个`bundle打包文件`的文件名，对于单个入口`entry`，该文件名可以是一个写死的文件名，但是对于多个入口的情况，请添加唯一标示,如：`[id]` `[hash]`等...其默认值是：`[name].js`

 ```js
// 使用入口名称：
filename: "[name].bundle.js"

// 使用内部 chunk id
filename: "[id].bundle.js"

// 使用每次构建过程中，唯一的 hash 生成
filename: "[name].[hash].bundle.js"

// 使用基于每个 chunk 内容的 hash：
filename: "[chunkhash].bundle.js"
 ```

## output.library

- `字符串` 

指定导出自定义库时，导出库的名称

## output.libraryTarget

- `字符串` 

指定导出自定义库时，导出方式，如：`amd` `cmd` `umd` 默认`var`以变量形式导出，不同导出方式对应了不同的使用方式，如使用`var`方式导出，我们使用时就应该如下调用，具体参见[原文](https://doc.webpack-china.org/configuration/output/#output-librarytarget)

```js
var someModule = _entry_return_; // 模块导出值将会赋值给一个变量，我们通过变量调用导出值（方法或属性）

someModule.someFun();
or
someModule.someProp
```

## output.path

- `字符串` 

 指定编译后文件导出的目录地址  

 ```js
  path: path.resolve(__dirname, 'dist/assets')
 ```

 ## output.publicPath

 - `字符串`

 配置公共请求路径，如下指定为 `/assets/` 那么我们访问请求URL的时候就需要在URL的前面加上这个 **公共路径**,该选项的值是在runtime(运行时)创建的。因此，在多数情况下，此选项的值都会以`/`结束,默认值是一个空字符串 `""`,有如下配置形式：

 ```js
publicPath: "https://cdn.example.com/assets/",  // CDN（总是 HTTPS 协议）
publicPath: "//cdn.example.com/assets/",        // CDN (协议相同)
publicPath: "/assets/",                         // 相对于服务(server-relative)
publicPath: "assets/",                          // 相对于 HTML 页面
publicPath: "../assets/",                       // 相对于 HTML 页面
publicPath: "",                                 // 相对于 HTML 页面（目录相同）
 ```
