# 输出参数

指定webpack编译后文件输出配置，如输出目录，名称等...

## output.chunkFilename

- `字符串`

 指定chunk文件命名规则,默认使用`[id].js`或从 output.filename 中推断出的值（[name] 会被预先替换为 [id] 或 [id].）