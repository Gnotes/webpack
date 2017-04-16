# webpack 2

**Version : 2.x**

## [安装webpack](https://webpack.js.org/guides/installation/)

webpack 需要`node`环境，以及`npm`，具体安装详情参考原文  

### 本地安装

```shell
npm install webpack
```

### 全局安装

由于我们需要使用`webpack 命令`，因此使用全局安装

```bash
npm install webpack -g
```

* 编译时显示进度和颜色

```
webpack --progress --colors
```

* 修改文件时实时编译添加

```
webpack --progress --colors --watch
```

* 安装`webpack-dev-server` 作为本地服务

```
npm install webpack-dev-server -g
```

* 使用`webpack-dev-server` 

`webpack-dev-server` 内部绑定了一个`express` 的服务，并在`localhost:8080 `启动。文件重新编译后会自动更新到服务页面.

```
webpack-dev-server --progress --colors
```

## 基本配置参数解释

- [基本介绍](docs/Introduction.md)
- [Entry&Context](docs/Entry&Context.md)
- [Output](docs/Output.md)
- [Module](docs/Module.md)
- [Resolve](docs/Resolve.md)
- [Plugins](docs/Plugins.md)
- [DevServer](docs/DevServer.md)
- [Devtool](docs/Devtool.md)
- [Externals](docs/Externals.md)

## reference

- [webpack official website](https://webpack.js.org/)  
- [webpack 中文官方文档](https://doc.webpack-china.org/)  
- [webpackdoc](http://webpackdoc.com/usage.html)  
- [IT笔录 / Webpack前端资源](http://itbilu.com/nodejs/npm/Vy6BnJkY-.html)   
- [webpack website](http://webpack.github.io/docs/)   
- [webpack website - config](http://webpack.github.io/docs/configuration.html)    
- [List of loaders](https://webpack.github.io/docs/list-of-loaders.html)    
- [List of Plugins](http://webpack.github.io/docs/list-of-plugins.html)    
- [Webpack 入门指迷](https://segmentfault.com/a/1190000002551952)   
- [Webpack — The Confusing Parts](https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9#.f0cdf0reg)  
- [webpack入坑之旅](http://blog.guowenfh.com/2016/03/24/vue-webpack-01-base/)
- [Webpack2 升级指南和特性摘要](https://segmentfault.com/a/1190000008181955)
- [webpack2.x基础属性讲解](http://www.bubuko.com/infodetail-2007986.html)