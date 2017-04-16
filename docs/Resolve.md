# Resolve

配置模块如何解析

## [resolve.alias](https://doc.webpack-china.org/configuration/resolve/#resolve-alias)

- `字面量对象`

指定`模块`或`路径` 的别名

## resolve.enforceExtension

- `布尔值` 

指定引入 **`文件`** 时 是否强制需要文件后缀，如引入`foo.js`文件  
 - true

  ```js
  import foo from './foo';    // 错误，不会正常解析 
  import foo from './foo.js'; // 正常，需要指定文件后缀 
  ```

 - false

  ```js
  import foo from './foo';    // 正常，不 需要指定文件后缀
  ```

## resolve.extensions

自动解析确定的扩展。默认值为:  

```js
extensions: [".js", ".json"]
```

>  使用此选项，会`覆盖`默认数组，这就意味着 webpack 将不再尝试使用默认扩展来解析模块。对于使用其扩展导入的模块，例如，`import SomeFile from "./somefile.ext"`，要想正确的解析，一个包含“`*`”的字符串必须包含在数组中

## resolve.mainFiles

- `字符串数组`

指定解析`目录`时默认匹配的文件名称，默认为：

```
mainFiles: ["index"]
```

## resolve.modules

指定 webpack 解析模块时的 `搜索目录`