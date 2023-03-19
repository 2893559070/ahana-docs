# Pinia

## pinia特点

1. 兼容vue2和vue3版本
2. 删除mutations
3. 现不能与vuex 混用
4. 支持插件扩展功能
5. 支持模块热更新无需加载页面可以修改容器，可以保持任何现有的状态
6. 更完美TS支持
7. 支持服务端渲染

[Pinia中文文档](https://pinia.web3doc.top/introduction.html)

## 基本使用

- 安装

```bash
  npm install pinia
```

- 在main.js中引入pinia并创建容器挂载到根实例上

```js
  import { createPinia } from 'pinia'
  const pinia = createPinia()
  // 挂载
  createApp(App).use(pinia).mount('#app')
```

- 创建store

```js
import { defineStore } from "pinia" // 定义容器

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useStore = defineStore('main', {
  /**
   * 存储全局状态
   * 1.必须是箭头函数: 为了在服务器端渲染的时候避免交叉请求导致数据状态污染
   * 和 TS 类型推导
  */
  state: () => {
    return {
      count: 0,
      list: [1, 2, 3, 4 ]
    }
  },
  /**
   * 用来封装计算属性 有缓存功能  类似于computed
   * 这里需要传入state才能拿到数据，可以直接使用state和this效果是一样的
   * 直接在 store 实例上访问 getter
   */
  getters: {
    doubleCount: (state) => state.counter * 2,
    doubleCountPlusOne() {
      return this.doubleCount + 1
    }
  },
  /**
   * 编辑业务逻辑  类似于methods
   */
  actions: {
 
  }
 
})
```

这里可以直接结构出想要的数据，但是数据会出现无法实现响应式问题，官方使用的API reactive 使state数据生成响应式。 对于这种情况我们可以这样做

```js
  import { useStore } from '@/stores/'
  import { storeToRefs } from 'pinia'

  const store = useStore();
 
  /*
    为了从 Store 中提取属性同时保持其响应式，您需要使用storeToRefs()。 它将为任何响应式属性创建 refs。 当您仅使用 store 中的状态但不调用任何操作时
    `name` 和 `doubleCount` 是响应式引用
    这也会为插件添加的属性创建引用
    但跳过任何 action 或 非响应式（不是 ref/reactive）的属性
  */ 
  const { count, list, doubleCount } = storeToRefs(store);
```

## state

### 访问 “state”

默认情况下，您可以通过 store 实例访问状态来直接读取和写入状态：

```js
const store = useStore()

store.counter++
```

### 重置状态

您可以通过调用 store 上的 $reset() 方法将状态 重置 到其初始值：

```js
const store = useStore()

store.$reset()
```

### setup()中使用

```js
  import { useCounterStore } from '../stores/counterStore'

export default {
  setup() {
    const counterStore = useCounterStore()

    return { counterStore }
  },
  computed: {
    tripleCounter() {
      return counterStore.counter * 3
    },
  },
}
```

### 在 Options API 中使用

```js
import { mapState } from 'pinia'
import { useCounterStore } from '../stores/counterStore'

export default {
  computed: {
    // 允许访问组件内部的 this.counter
    // 与从 store.counter 读取相同
    ...mapState(useCounterStore, {
      myOwnName: 'counter',
      // 您还可以编写一个访问 store 的函数
      double: store => store.counter * 2,
      // 它可以正常读取“this”，但无法正常写入...
      magicValue(store) {
        return store.someGetter + this.counter + this.double
      },
    }),
  },
}
```

### $patch

除了直接用 store.counter++ 修改 store，你还可以调用 $patch 方法。 它允许您使用部分“state”对象同时应用多个更改：

```js
  cartStore.$patch((state) => {
    state.items.push({ name: 'shoes', quantity: 1 })
    state.hasChanged = true
  })
```

## 插件

### 数据持久化

```bash
npm i pinia-plugin-persist
```

```js
export const useUserStore = defineStore({
  state () {
    return {
      count: 0,
      num: 100,
      list: [1, 2, 3, 4 ]
    }
  },
  persist: {
    enabled: true, // 开启缓存  默认会存储在本地localstorage
    storage: sessionStorage, // 缓存使用方式
    paths:[] // 需要缓存键 
  }
})
```
