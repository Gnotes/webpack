# [模块](https://doc.webpack-china.org/configuration/module/)

## module.noParse

- `正则表达式 或 正则数组`

指定匹配正则的`包` 或 `路径` webpack 在打包时将不会解析，直接打包到bundle文件中，[查看解释](http://code.oneapm.com/javascript/2015/07/07/webpack_performance_1/)

```js
noParse: /jquery|lodash/
```

## module.rules

- `数组`

指定模块加载规则

### Rule

**对应每一种加载器的加载规则**  

> 每个规则可以分为三部分 - 条件(condition)，结果(result)和嵌套规则(nested rule)

#### Rule.enforce


#### Rule.exclude

- `字符串 | 字符串数组`

指定加载器`不加载`的路径或文件

#### Rule.include

- `字符串 | 字符串数组`

指定加载器加载接卸的路径，**只加载匹配的**

#### Rule.use & Rule.loader & Rule.loaders

- Rule.loader 是 `Rule.use: [ { loader } ]` 的简写
- Rule.loaders 是 `Rule.use` 的别名

#### Rule.options & Rule.query

> Rule.options 和 Rule.query 都是 Rule.use: [ { options } ]的别名

**Before**

```js
module:{
  rules:[
    { // 对应一个rule
      test: /\.jsx?$/,
      // 只 加载 app目录下的.jsx文件
      include: [
        path.resolve(__dirname, "app")
      ],
      // 并且 排除 app/demo-files 这个目录或文件
      exclude: [
        path.resolve(__dirname, "app/demo-files")
      ],
      // 指定加载器，**rule.use** 的简写，既然是2了，就应该按照2的写法使用 use 来配置
      loader: "babel-loader",
      // 加载参数
      options: {
        presets: ["es2015"]
      }
    }
  ]
}
```

**After**

```js
module:{
  rules:[
    { 
      test: /\.jsx?$/,
      include: [
        path.resolve(__dirname, "app")
      ],
      exclude: [
        path.resolve(__dirname, "app/demo-files")
      ],
      use:[
        {
          loader:"babel-loader",
          options:{
            presets: ["es2015"]
          }
        } 
      ]
    }
  ]
}
```
