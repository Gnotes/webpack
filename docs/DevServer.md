# 开发过程中的本地服务

## [devServer](https://doc.webpack-china.org/configuration/dev-server/#devserver)

`webpack-dev-server` 在开发过程中提供了一个本地服务，以下将是此服务的配置选项  

通过来自 webpack-dev-server 的这些选项，能够改变webpack一些行为，如：所有来自 `dist/` 目录的文件都使用`gzip`压缩并用于服务  

```js
devServer: {
  contentBase: path.join(__dirname, "dist"),
  compress: true,
  port: 9000
}
```

当服务器启动时，在解析模块列表之前会有一条消息：  

```js
http://localhost:9000/
webpack result is served from /build/
content is served from dist/
```

## devServer.clientLogLevel

日志级别

可选项 ：`none` `error` `warning` `info`（默认值）

## devServer.compress

是否压缩服务文件

## devServer.contentBase

提供服务的根路径

## devServer.publicPath

公共请求路径

