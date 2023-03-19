# vue-cli前端自动化

## 环境配置

可以配置npm下载源

```bash
  - 根目录
    - .npmrc

    registry=https://registry.npm.taobao.org
```

## scss配置文件的引入

```js
  // vue.config.js 配置
  module.exports = {
    css: {
      // css预设器配置项
      loaderOptions: {
          // pass options to sass-loader
          sass: {
              // 引入全局变量样式,@使我们设置的别名,执行src目录
              data: `
                  @import "@/style/theme.scss";
              `
          }
      },
    },
  }
```

## 配置代码压缩

```js
  // 安装
  npm install uglifyjs-webpack-plugin

  // 在vue.config.js文件中添加配置
  configureWebpack: config => {
      if (process.env.NODE_ENV === 'production') {
          // 为生产环境修改配置...
          config.plugins.push(
              //生产环境自动删除console
              new UglifyJsPlugin({
                  uglifyOptions: {
                      compress: {
                          warnings: false,
                          drop_debugger: true,
                          drop_console: true,
                      },
                  },
                  sourceMap: false,
                  parallel: true,
              })
          );
      }
  }
```
