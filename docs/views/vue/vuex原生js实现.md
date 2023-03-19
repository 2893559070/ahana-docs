# vuex原生js实现

## 文件夹

```md
 -store
  -index.js
  -store.js
```

## index.js

```js
import Vue from 'vue'
import Vuex from './store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter(state) {
      return state.counter * 2
    }
  },
  mutations: {
    add(state) {
      state.counter++
      // this.state
    }
  },
  actions: {
    // 结构上下文
    add({ commit }) {
      setTimeout(() => {
        commit('add')
      }, 1000);
    }
  },
  modules: {
  }
})
```

## store.js

```js
let Vue;
class Store{
  constructor(option = {}) {
    this.option = option
   // 将 store 通过创建 Vue 实例的方式 创建值至实例
   this._vm = new Vue({
    //  data: { state: option }
    data: { state: option.state }
   })
  }
  // 获取 state 触发
  get state() { 
    return this._vm.state
  }
  // 更改 state 触发
  set state(v) { 
    console.error('无法支持直接赋值请使用commit方法'); 
  } 
   
  /*
   注意 使用 commit、dispatch 注意作用域，不要丢失this
  */
  // 同步修改 state
  commit = (type, val = null) => {
    // 获取传入的 方法名称、数据
    const method = this.option.mutations[type]
    method(this._vm.state, val)
  }

  dispatch = (type, val = null) => {
    // 获取传入的 方法名称、数据
    const method = this.option.actions[type]
    // 将自身 传入能够得到 commit 方法
    method(this, val)
  }
}

const install = (vue) => {
  Vue = vue
  // 通过 mixin 添加只每个实例组件 创建共享
  Vue.mixin({
    beforeCreate () {
      // 使每个组件 都执行 beforeCreate 获取每个组件的数据
      const { $options: options } = this
      // 入口文件已挂载 store 后才进行程序
      if(options.store) {
        // 将 挂载的 store 添加到 Vue实例
        Vue.prototype.$sotre = options.store
      }
    }
  })
}

export default {
  Store,
  install
}
```

## 将 index.js 引入入口文件 main.js 进行挂载

```js
import store from './store/index.js'
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
```