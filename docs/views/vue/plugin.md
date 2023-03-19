# plugin ( 插件 )

```js
// 1. 创建组件
const plugin = {}

plugin.install = (Vue) => {
  // 设置全局方法
  Vue.$myMethods = () => {
    console.log('全局方法');
  }

  // 自定义事件
  Vue.directive('foucs', {
    inserted: (el) => {
      el.focus()
    },
    bind: () => {},
    update: () => {}
  })

  // 设置全局混入
  Vue.mixin({
    data() {
      return {}
    },
    created: () => {},
    mounted: () => {},
    methods: {}
  })

  // 设置全局事件总线
  Vue.prototype.$eventBus = new Vue()

  // 设置动态组件 DOM 元素 控制显示隐藏 数据
  Vue.prototype.$asyncDom = (dom,show = false, data) => {
    const asyncDom = Vue.extend(dom)
    const DOM = new asyncDom({
      el: document.createElement('div'),
      data() {
        return { show, ...data }
      },
    })

    document.body.appendChild(DOM.$el)
  }

}

export default plugin

// 2. 在入口文件中引入 注册
Vue.use(plugin)
```