# plugin插件

```ts
// 创建 plugin 插件
export default 
{
  install: (app: any) => {
    app.directive('foucs', {
      mounted: (el: any) => {
        el.focus()
        console.log(el);
      },
      updated(el: any) {
        console.log(el);
      }
    }),
    // 这可以代替 Vue 2.x Vue.prototype 扩展：
    app.config.globalProperties.$http = () => {}
  }
}

// 导入至main.ts
import plugin from './tool/plugin'

// 注册组件
import {createApp} from 'vuex'
import App from '/app'

const app = createApp(App)

app
.use(plugin)
.mount('#app')
```
