# 入口和上下文

> The entry object is where webpack looks to start building the bundle. The context is an absolute string to the directory that contains the entry files.

- 上下文：项目根路径
- 入口：webpack打包入口文件

## context

- `字符串` ，使用`绝对路径`表示的`项目根路径`  

```js
context: path.resolve(__dirname, "app")
```

官方推荐我们指出这个配置项，默认当前配置文件所在的目录就是这个上下文环境

## entry

- `string` | `[string]` | `object { <key>: string | [string] }` | `(function: () => string | [string] | object { <key>: string | [string] })`

- `字符串` | `字符串数组` | `字面量对象,值为字符串或字符串数组` | `函数,返回值为前面的所有类型`