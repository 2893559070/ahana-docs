# router原生js实现

## 文件
```md
-router
 -index.js
 -router.js
```

## index.js
```js
import Vue from 'vue'
import { Router, install } from './router'

Vue.use(install)

const routes = [
  {
    path: '/son1',
    name: 'son1',
    component: () => import('../components/son1.vue')
  },
  {
    path: '/son2',
    name: 'son2',
    component: () => import('../components/son2.vue')
  }
]

// 2.创建实例
const router = new Router({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes
})

export default router
```

## router.js
```js
let Vue

export class Router{
  constructor(option) {
    this.option = option
    // 需要创建响应式的current属性
    // 利用Vue提供的defineReactive做响应化
    // 这样将来current变化的时候，依赖的组件会重新render
    Vue.util.defineReactive(this, 'current', '/')
    // Vue.util.defineReactive(this, 'routes', option.routes)

    // 创建一个路由映射表
    this.routeMap = {}
    option.routes.forEach(route => {
      // 将对应的路径与路由对象 进行匹配
      this.routeMap[route.path] = route
    })
    
    // 监听 路由
    window.addEventListener('hashchange', () => {
      this.hashchange()
    })
    // 第一次进入界面
    window.addEventListener('load', () => {
      this.hashchange()
    })
  }
  
  // 获取当前 url 路径 分配给 内部current变量
  hashchange = () => {
    const path = window.location.hash
    this.current = path.slice(1)
  }
}

export const install = (vue) => {
  Vue = vue

  Vue.mixin({
    // 使用 mixin 将 路由表插入至全局 方便在每一个组件实例中使用
    beforeCreate () {
      if(this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }
    }
  })

  // 创建全局组件
  Vue.component('routerLink', {
    // 获取 routerLink 组件的属性值（及 url）
    props: {
      to: {
        type: String,
        required: true
      }
    },
    render(h) {
      // 通过 render 创建标签
      return h('a', { attrs: { href: '#' + this.to } }, this.$slots.default)
    }
  })

  Vue.component('routerView', {
    render(h) {
      // 从组件实例中获得 路由配置表
      const { current, routeMap } = this.$router

      // 设置容错 routeMap[current]?.component 表示 component是否存在 存在在执行
      let temp = routeMap[current]?.component ?  routeMap[current].component : null

      // 路由映射表 url路径
      console.log(routeMap, current);
      return h(temp)
    }
  })
}
```

## 将 index.js 引入入口文件 main.js 进行挂载

```js 
import router from './router/index.js'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// 在 任意 组件中使用 routerLink routerView
<router-link to="/son1">son1</router-link>
<router-link to="/son2">son2</router-link>
<router-view></router-view>
```