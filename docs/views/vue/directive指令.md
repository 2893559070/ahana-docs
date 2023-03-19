# directive

```js
// 注册全局指令
import Vue from 'vue'

Vue.directive('focus', {
  // 初始化
  inserted(e) {
    e.focus()
  },
  // 只执行一次
  bind(el, binding, vnode) {
    console.log(vnode.data.domProps.value);
    if(vnode.data.domProps.value > 100) {
      el.style.color = 'pink'
    }
  },
  // 所在组件的 VNode 更新时调用
  update() {
    console.log('update');
  }
})

// 在入口文件中直接引入
import './directive/index'
```