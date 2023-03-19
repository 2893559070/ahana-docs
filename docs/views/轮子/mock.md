# mock 
### 开始 & 安装
```js
# 安装
npm install mockjs

// 使用 Mock
var Mock = require('mockjs')
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
// 输出结果
console.log(JSON.stringify(data, null, 4))
```

### 语法规范
#### 数据模板定义规范 DTD
##### 数据模板中的每个属性由 3 部分构成：属性名、生成规则、属性值：
```js
// 属性名   name
// 生成规则 rule
// 属性值   value
'name|rule': value
```

```js
1. 属性值是字符串 String
  'name|min-max': string
  通过重复 string 生成一个字符串，重复次数大于等于 min，小于等于 max。

  'name|count': string
  通过重复 string 生成一个字符串，重复次数等于 count。

2. 属性值是数字 Number
  'name|+1': number
  属性值自动加 1，初始值为 number。

  'name|min-max': number
  生成一个大于等于 min、小于等于 max 的整数，属性值 number 只是用来确定类型。

  'name|min-max.dmin-dmax': number
  生成一个浮点数，整数部分大于等于 min、小于等于 max，小数部分保留 dmin 到 dmax 位。

  Mock.mock({
      'number1|1-100.1-10': 1,
      'number2|123.1-10': 1,
      'number3|123.3': 1,
      'number4|123.10': 1.123
  })
  // =>
  {
      "number1": 12.92,
      "number2": 123.51,
      "number3": 123.777,
      "number4": 123.1231091814
  }

3. 属性值是布尔型 Boolean
  'name|1': boolean
  随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。

  'name|min-max': value
  随机生成一个布尔值，值为 value 的概率是 min / (min + max)，值为 !value 的概率是 max / (min + max)。

4. 属性值是对象 Object
  'name|count': object
  从属性值 object 中随机选取 count 个属性。

  'name|min-max': object
  从属性值 object 中随机选取 min 到 max 个属性。

5. 属性值是数组 Array
  'name|1': array
  从属性值 array 中随机选取 1 个元素，作为最终值。

  'name|+1': array
  从属性值 array 中顺序选取 1 个元素，作为最终值。

  'name|min-max': array
  通过重复属性值 array 生成一个新数组，重复次数大于等于 min，小于等于 max。

  'name|count': array
  通过重复属性值 array 生成一个新数组，重复次数为 count。

6. 属性值是函数 Function
  'name': function
  执行函数 function，取其返回值作为最终的属性值，函数的上下文为属性 'name' 所在的对象。

7. 属性值是正则表达式 RegExp
  'name': regexp
  根据正则表达式 regexp 反向生成可以匹配它的字符串。用于生成自定义格式的字符串。
  Mock.mock({
      'regexp1': /[a-z][A-Z][0-9]/,
      'regexp2': /\w\W\s\S\d\D/,
      'regexp3': /\d{5,10}/
  })
  // =>
  {
      "regexp1": "pJ7",
      "regexp2": "F)\fp1G",
      "regexp3": "561659409"
  }
```

### 使用示例
[mock使用示例](http://mockjs.com/examples.html)

### 结合vue框架使用
```js
/**
 * 1、在 src下创建 mock/index 文件
 * 2. 将创建的data导出
 * 3、在vue.config.js中进行配置
 * 4. 发送请求
 * */ 

// 1.
var Mock = require('mockjs')
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})

// 2.
module.exports = [
  { url: 'dataurl', met: 'get', mockData: data },
]

// 3.
const mockJs = require('@/mock')
devServer: {
  before: (app) => {
    mockJs.forEach(item => {
      app[item.met](item.url, (req, res) => {
        res.json(item.mockData())
      })
    })
  }
}

// 4. 注意请求地址需要与导出定义的url相对应
axios.get('dataurl').then(res => console.log(res))

```