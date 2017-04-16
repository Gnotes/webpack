# 开发工具项

此选项控制是否生成，以及如何生成 `Source Map`  

## devtool

选择一种 source map 来增强调试过程。注意，以下选项能够可能会很明显地影响构建(build)和重构建(rebuild)的速度。

| devtool | 构建 | 重构建 | 生产环境 | 特性 |
| --- | --- | --- | --- | --- | 
| eval | +++ | +++ | no | 生成后的代码 | 
| cheap-eval-source-map | + | ++ | no | 转换过的代码（仅限行）| 
| cheap-source-map | + | o | yes | 转换过的代码（仅限行）| 
| cheap-module-eval-source-map | o | ++ | no | 原始源码（仅限行）| 
| cheap-module-source-map | o | - | yes | 原始源码（仅限行）| 
| eval-source-map | -- | + | no | 原始源码 | 
| source-map | -- | -- | yes | 原始源码 | 
| nosources-source-map | -- | -- | yes | 无源码内容 | 