# extend

```js
/*
 0. 创建组件
 1. 引入组件
 2. 使用extend将组件创建成实例
 3. 创建标签并指定内容
 4. 向外导出
 5. 引入到入口文件进行全局注册
*/

// 0 
<template>
<div v-if="show" id="toast">
  {{ text }}
</div>

</template>

<script>
export default {
  
}
</script>

<style scoped>
 #toast {
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: pink;
 }
</style>

// 1 - 4
import Toast from './toast.vue'
import Vue from 'vue'
const dom = Vue.extend(Toast)
function showToast(text = '请输入内容', show = false, duration = 1500) {
  const DOM = new dom({
      el: document.createElement('div'),
      data() {
        return {
          text,
          show
        }
      }
  })

  document.body.appendChild(DOM.$el)

  const timer = setTimeout(() => {
    DOM.show = false
    clearInterval(timer)
  }, duration)
}

export default showToast

// 5 index.js 入口文件 挂载到实例上
import showToast from './components/show.js'
Vue.prototype.$showToast = showToast

```

## 组件实例创建的另一种解决方案

### 1

```js
const Ctor = Vue.extend(Component) 
const comp = new Ctor({propsData: props}) 
comp.$mount(); 
document.body.appendChild(comp.$el) 
comp.remove = () => { 
  // 移除dom 
  document.body.removeChild(comp.$el) 
  // 销毁组件 
  comp.$destroy(); 
}
```

### 2

```js
import Notice from '@/components/Notice.vue' 
//... 
export default { 
  install(Vue) { 
    Vue.prototype.$notice = function (options) { 
      return create(Notice, options) 
    } 
  } 
}
```
