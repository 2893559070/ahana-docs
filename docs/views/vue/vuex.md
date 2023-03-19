# vuex

## 开始

- 在项目的根目录下新增一个store文件夹，在该文件夹内创建index.js

```js
│  App.vue
│  main.js
│
├─assets
│      logo.png
│
├─components
│      HelloWorld.vue
│
├─router
│      index.js
│
└─store
       index.js
       actions.js
       getters.js
       mutations.js
```

## VueX中的核心内容

- state 存放状态
  - 引用方式

   ```js
   // 直接使用： 
   this.$store.state.

   // map辅助函数
    computed: { 
      ...mapState(['xxx']), 
      ...mapState({'新名字': 'xxx'})
    }

    // modules中
    computed: { 
      ...mapState('模块名', ['xxx']), 
      ...mapState('模块名', {'新名字': 'xxx'})
    }
   ```

  - 增删state中的成员
  为了配合Vue的响应式数据，我们在Mutations的方法中，应当使用Vue提供的方法来进行操作。如果使用delete或者xx.xx = xx的形式去删或增，则Vue不能对数据进行实时响应。
    - Vue.set 为某个对象设置成员的值，若不存在则新增

    ```js
    // 例如对state对象中添加一个age成员
    Vue.set(state,"age",15)
    ``` 

    - Vue.delete 删除成员

    ```js
     // 将刚刚添加的age成员删除
     Vue.delete(state,'age')
    ```

- mutations 操作 state
  - mutation传值

    ```js
    // 单个值提交时: 方式1
    this.$store.commit('edit',实参)
    // 当需要多参提交时，推荐把他们放在一个对象中来提交:
    this.$store.commit('edit',{age:15,sex:'男'})
    // 模块
    this.$store.commit('模块名/mutation名', 参数)

    // 方式2 
    // 非模块
    methods: { 
      ...mapMutations(['mutation名']),
    }
    // 模块
    methods: { 
      ...mapMutations('模块名', ['xxx'])
    }

    // 另一种提交方式
    this.$store.commit({
        type:'edit',
        payload:{
            age:15,
            sex:'男'
        }
      })
    ```

- getters 加工state成员给外界
  可以对state中的成员加工后传递给外界
  Getters中的方法有两个默认参数
  - state 当前VueX对象中的状态对象
  - getters 当前getters对象，用于将getters下的其他getter拿来用

  ```js
    getters:{
      nameInfo(state){
          return "姓名:"+state.name
      },
      fullInfo(state,getters){
          return getters.nameInfo+'年龄:'+state.age
      }  
    }

    // 组件中调用
    // 方式1
    this.$store.getters.fullInfo
    // 模块
    this.$store.getters.模块名.xxx
    // 方式2
    import {mapGetters} from 'vuex'
      computed: {
        ...mapGetters(['fullInfo']), // 动态计算属性，相当于this.$store.getters.fullInfo
        ...mapGetters('模块名',['fullInfo']) // 动态计算属性，相当于this.$store.getters.fullInfo
      }
  ```

- actions 异步操作 mutations
由于直接在mutation方法中进行异步操作，将会引起数据失效。所以提供了Actions来专门进行异步操作，最终提交mutation方法。
Actions中的方法有两个默认参数
  - context 上下文(相当于箭头函数中的this)对象
  - payload 挂载参数

  ```js
  actions:{
      aEdit(context,payload){
          setTimeout(()=>{
              context.commit('edit',payload)
          },2000)
      }
  }

  // 在组件中调用:
  // 方式1
  this.$store.dispatch('aEdit',{age:15})
  // 模块
  this.$store.dispatch('模块名/action名', 参数)

  // 方式2
  import {mapActions} from 'vuex'
    methods:{
      ...mapActions( // 语法糖
          ['aEdit'] // 相当于this.$store.dispatch('modifyName'),提交这个方法
      ),
      ...mapActions( // 语法糖
          '模块名',
          ['aEdit'] // 相当于this.$store.dispatch('modifyName'),提交这个方法
      ),
    }

  // 改进:  由于是异步操作，所以我们可以为我们的异步操作封装为一个Promise对象
    aEdit(context,payload){
      return new Promise((resolve,reject)=>{
          setTimeout(()=>{
              context.commit('edit',payload)
              resolve()
          },2000)
      })
    }

  ```

- modules 模块化状态管理

## 使用

### 非模块化

```js
// 1. index.js
import Vue from 'vue'
import Vuex from 'vuex'
// *as的意思是 导入这个文件里面的所有内容，就不用一个个实例来导入了。
import * as getters from './getters' // 导入响应的模块，*相当于引入了这个组件下所有导出的事例
import * as actions from './actions'
import * as mutations from './mutations'
 
Vue.use(Vuex)
// 首先声明一个需要全局维护的状态 state,比如 我这里举例的resturantName
const state = {
    resturantName: 'name' // 默认值
    // id: xxx  如果还有全局状态也可以在这里添加
    // name:xxx
}
 
// 注册上面引入的各大模块
const store = new Vuex.Store({
    state,    // 共同维护的一个状态，state里面可以是很多个全局状态
    getters,  // 获取数据并渲染
    actions,  // 数据的异步操作
    mutations  // 处理数据的唯一途径，state的改变或赋值只能在这里
})
 
export default store  // 导出store并在 main.js中引用注册。

// 2. mutations
// 提交 mutations是更改Vuex状态的唯一合法方法
export const modifyAName = (state, name) => { // A组件点击更改餐馆名称为 A餐馆
    state.resturantName = name // 把方法传递过来的参数，赋值给state中的resturantName
}
export const modifyBName = (state, name) => { // B组件点击更改餐馆名称为 B餐馆
    state.resturantName = name
}

// 3. actions
// 给action注册事件处理函数。当这个函数被触发时候，将状态提交到mutations中处理
export function modifyAName({commit}, name) { // commit 提交；name即为点击后传递过来的参数，此时是 'A餐馆'
    return commit ('modifyAName', name)
}
export function modifyBName({commit}, name) {
    return commit ('modifyBName', name)
}
 
// ES6精简写法
// export const modifyAName = ({commit},name) => commit('modifyAName', name)

// 4. mutations
// 提交 mutations是更改Vuex状态的唯一合法方法
export const modifyAName = (state, name) => { // A组件点击更改餐馆名称为 A餐馆
    state.resturantName = name // 把方法传递过来的参数，赋值给state中的resturantName
}
export const modifyBName = (state, name) => { // B组件点击更改餐馆名称为 B餐馆
    state.resturantName = name
}

// 5. getters
// 获取最终的状态信息
export const resturantName = state => state.resturantName

// 6.将store挂载到当前项目的Vue实例当中去
import store from './store'

new Vue({
  el: '#app',
  router,
  store,  //store:store 和router一样，将我们创建的Vuex实例挂载到这个vue实例中
  render: h => h(App)
})
```

### 模块化

```js
// ... 省略引入
const store = new Vuex.Store({
    state,    // 共同维护的一个状态，state里面可以是很多个全局状态
    getters,  // 获取数据并渲染
    actions,  // 数据的异步操作
    mutations: {
      modulex,
      moduley,
      modulez
    }  // 处理数据的唯一途径，state的改变或赋值只能在这里
})

// modulex moduley modulez
export default {
  namespaced: true
  state: {
    counter: 0
  },
  mutations: {
    xMutation(state, payload) {
      state.counter += payload;
    }
  },
  // ...
};
```