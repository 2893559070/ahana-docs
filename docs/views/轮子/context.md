# require.context 函数

```js
require.context(directory, useSubdirectories, regExp)
```

## A 接受三个参数

1. directory { String } - 读取文件路径
2. useSubdirectories { Boolean } - 是否遍历子目录
3. regExp { regExp } - 匹配文件的正则

## B 返回值的是一个函数，并且这个函数有keys个属性

1. keys { Function } - 匹配成功模块的名字组成的数组

```js
const requireAll = require.context('@/components', true, /\.vue$/)

// 匹配成功模块的名字组成的数组
console.log(requireAll.keys())

requireAll.keys().forEach(item => {
  Subject.push({
    modul: requireAll(item).default,
    url: requireAll.resolve(item)
  })
})
```