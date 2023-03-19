# UmiJS

[UmiJS](https://v3.umijs.org/zh-CN/docs/getting-started)
[Ant Design Pro](https://pro.ant.design/zh-CN/docs/getting-started/)
[v3.umijs](https://v3.umijs.org/plugins/preset-react)
[Umi-js](https://umijs.org/docs/tutorials/getting-started)
[antd的二次封装-ProComponents](https://procomponents.ant.design/components/) layout配置参考

## 配置文件

- config.js
  src/config/config.js
  配置式路由与约定式路由

  ```ts
  import { defineConfig } from 'umi';
  import routes from './routes'

  export default defineConfig({
    base: '/',
    publicPath: './',
    hash: true,
    history: {
      type: 'hash',
    },
    nodeModulesTransform: {
      type: 'none'
    },
    // 继承 layout 公共模板
    layout: {},
    locale: {
      default: 'zh-CN', // 默认语言，当检测不到具体语言时，展示 default 中指定的语言。
      antd: false, // 开启后，支持 antd 国际化
      title: false, // 在项目中配置的 title 及路由中的 title 可直接使用国际化 key，自动被转成对应语言的文案
      baseNavigator: false, // 开启浏览器语言检测。
      baseSeparator: '-' // 国家（lang） 与 语言（language） 之间的分割符。
    },
    routes: routes, // 有routes是配置式路由 || 无routes是约定式路由（读取pages文件夹自动生成）
    fastRefresh: {}, // 快速刷新（Fast Refresh），开发时可以保持组件状态，同时编辑提供即时反馈。
  });
  ```

### 权限管理
