# express搭建后台


## 托管静态资源
### express 提供了一个非常好用的函数，叫做 express.static()，通过它，我们可以非常方便地创建一个静态资源服务器
```js
app.use(express.static('public'))

// 托管多个静态资源目录
app.use(express.static('public1'))
app.use(express.static('public2'))

// 挂载路径前缀
app.use('/public2', express.static('public2'))
```

## Express 的基本使用
```js
// npm i express
var express = require('express')
var app = express()

app.get('/', (req, res) => {
  res.send('get')
})

app.post('/', (req, res) => {
  res.send('post')
})

app.listen('8080', () => { 
  console.log('启动成功');
})
```

## Express 路由
```js
var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
  res.send('get')
})

router.post('/', (req, res) => {
  res.send('post')
})

module.exports = router
```

## Express 中间件
- 当一个请求到达 Express 的服务器之后，可以连续调用多个中间件，从而对这次请求进行预处理。
- next 函数是实现多个中间件连续调用的关键，它表示把流转关系转交给下一个中间件或路由。
- 一定要在路由之前注册中间件
- 连续调用多个中间件时，多个中间件之间，共享 req 和 res 对象
:::tip
注意：中间件函数的形参列表中，必须包含 next 参数。而路由处理函数中只包含 req 和 res。
:::

### 应用级别的中间件
```js
/* 全局生效的中间件 */
var express = require('express')
var app = express()

app.use((req, res, next) => {
  const time = Date.now()
  req.time = time
  next()
})

app.get('/', (req, res) => {
  res.send('get')
})

app.post('/', (req, res) => {
  res.send('post')
})

app.listen('8080', () => { 
  console.log('启动成功');
})

/* 局部生效的中间件 */
var express = require('express')
var app = express()

const local1 = (req, res, next) => {
  const time = Date.now()
  req.time = time
  next()
}

const local2 = (req, res, next) => {
  const getTime = new Date(req.time)
  req.getTime = getTime
  next()
}

app.get('/',[local1, local2], (req, res) => {
  res.send('get')
})

app.post('/', local1, (req, res) => {
  res.send('post')
})

app.listen('8080', () => { 
  console.log('启动成功');
})
```

### 路由级别的中间件
- 绑定到 express.Router() 实例上的中间件，叫做路由级别的中间件。它的用法和应用级别中间件没有任何区别。只不
过，应用级别中间件是绑定到 app 实例上，路由级别中间件绑定到 router 实例上
```js
var express = require('express')
var router = express.Router()

router.use((req, res, next) => {
  const time = Date.now()
  req.time = time
  next()
})

router.get('/', (req, res) => {
  res.send('get')
})

router.post('/', (req, res) => {
  res.send('post')
})

module.exports = router
```
### 错误级别的中间件
- 错误级别中间件的作用：专门用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题。
- 错误级别中间件的 function 处理函数中，必须有 4 个形参，形参顺序从前到后，分别是 (err, req, res, next)。
:::tip
注意：错误级别的中间件，
必须注册在所有路由之后！
:::
```js
var express = require('express')
var app = express()

app.use((req, res, next) => {
  const time = Date.now()
  req.time = time
  next()
})

app.get('/', (req, res) => {
  res.send('get')
})

app.post('/', (req, res) => {
  res.send('post')
})

app.use((err, req, res, next) => {
  console.log('发生了错误', err.message)
})

app.listen('8080', () => { 
  console.log('启动成功');
})
```
### Express 内置的中间件
- express.static 快速托管静态资源的内置中间件，例如： HTML 文件、图片、CSS 样式等（无兼容性）
- express.json 解析 JSON 格式的请求体数据（有兼容性，仅在 4.16.0+ 版本中可用）
- express.urlencoded 解析 URL-encoded 格式的请求体数据（有兼容性，仅在 4.16.0+ 版本中可用）
```js
var express = require('express')
var app = express()

// 配置 application/json
app.use(express.json())
// application/x-www-form-urlencoded
app.use(express.urlencoded({extended: false}))

app.use((req, res, next) => {
  const time = Date.now()
  req.time = time
  next()
})

app.get('/', (req, res) => {
  res.send({
    status: 0,
    msg: 'get',
    data: req.query
  })
})

app.post('/', (req, res) => {
  res.send({
    status: 0,
    msg: 'post',
    data: req.body
  })
})

app.use((err, req, res, next) => {
  console.log('发生了错误', err.message)
})

app.listen('8080', () => { 
  console.log('启动成功');
})
```

### 第三方的中间件
#### 在 express@4.16.0 之前的版本中，经常使用 body-parser 这个第三方中间件，来解析请求体数据。
1. 运行 npm install body-parser 安装中间件
2. 使用 require 导入中间件
3. 调用 app.use() 注册并使用中间件
```js

```

### 自定义中间件
1. 监听 req 的 data 事件
2. 监听 req 的 end 事件
```js
const qs = require('querystring')
app.use((req, res, next) => {
  let str = ''
  req.on('data', (chunk) => { 
    str += chunk
  })

  // Node.js 内置了一个 querystring 模块，专门用来处理查询字符串。通过这个模块提供的 parse() 函数，可以轻松把查询字符串，解析成对象的格式。
  req.on('end', () => {
    req.body = qs.parse(str)
    next()
  })
})
```

##  CORS 跨域
### cors 是 Express 的一个第三方中间件。通过安装和配置 cors 中间件，可以很方便地解决跨域问题。
- 运行 npm install cors 安装中间件
- 使用 const cors = require('cors') 导入中间件
- 在路由之前调用 app.use(cors()) 配置中间件

## JSONP 接口
- 获取客户端发送过来的回调函数的名字
- 得到要通过 JSONP 形式发送给客户端的数据
- 根据前两步得到的数据，拼接出一个函数调用的字符串
- 把上一步拼接得到的字符串，响应给客户端的 `<script>` 标签进行解析执行

```js
app.get('api', (req, res) => {
  const fun = req.query.callback
  const data = { name: '张三', age: 18 }
  res.send(`${fun}(${JSON.stringify(data)})`)
})
```