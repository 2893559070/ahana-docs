# http创建

```js
const http = require('http')
const server = http.createServer() // 创建服务器

// 服务器监听对象
server.on(
  // request:浏览器请求信息 response:返回响应信息
  'request', (req, res) => { 
    // 设置单个响应头的值
    res.setHeader('content-type', 'text/html;charset=utf-8;');
    // 设置头文件 防止乱码     参数1:200 [参数2:备注信息][参数3:配置信息,设置 utf-8 返回 ServerResponse 可用链式调用
    res.writeHead(200, 'ok', { 'content-type': 'text/html;charset=utf-8;' });

    res.write('返回1'); // 返回响应的信息，可调用多次
    res.end('结束'); // 结束响应,必须、且只能调用一次；后续的代码不会执行
  }
)

// 参数1:设置端口号 [参数2:回调]
server.listen(8888,() =>{
  console.log('server at 8888');
})
```