# vue面试

## 组件通信

1. props
2. $emit/$on
3. $parent/$children
4. vuex
5. $attrs/$listeners
6. provide/inject

## v-if与v-for哪个优先级高？ 应该如何避免使用避免性能问题？

1. v-for高于v-if的优先级，vue再处理AST的时候 先看静态节点，然后once，然后for，后面是if，tag标签名字template和solt
  源码：compiler/codegen/index.js
  <img :src="$withBase('/vue2面试/1.png')" alt="foo">
2. 如果同时出现，每次渲染都会先执行循环判断条件，无论如何循环都不可避免，浪费性能
3. 要避免出现这种情况，则在外层嵌套template，在这一层进行v-if判断，然后再内部进行v-for循环

## vue组件data为什么必须是个函数而vue的根实例则没有此限制

1. 组件中的data如果是对象，每次初始化组件时导致组件的不同实例会指向一个地方，会造成数据污染，组件通过函数形成data数据让它有自己的作用域，组件形成各自独立，不会造成污染
  源码：src\core\instance\state.js - initData()
  <img :src="$withBase('/vue2面试/2.png')" alt="foo">

2. new Vue()时会创建这个构造函数，Vue.component 也不会执行 vm根实例没有生成，所以生成的只能是一个单例

## 你只到key的作用和原理吗？说说你对它的理解

  源码：src\core\vdom\patch.js - updateChildren()

1. 新虚拟dom与老虚拟dom进行diff（精细比较），算出应该如何最小量更新，最后反映到真正的DOM上。
2. vue在patch中通过key可以精准判断两个节点是否是同一个，避免频繁更新不同元素，使整个patch过程更加高效，减少DOM操作量

## 你如何理解vue中的diff算法

1. 更新原则

必要性： lifecycle.js - mountComponent()
执行方式：patch.js - patchVnode() diff算法发生的地方
高效性：patch.js - updateChildren()

- 使用key来标识节点 来进行最小量更新
- 深度优先同层比较
- 只有是同一个虚拟节点（选择器与key相同），才会进行精细化比较
  - 旧节点的key和新节点的key相同
  - 旧节点的选择器要和新节点的选择器相同

2. 四种命中查找（diff算法的优化测略）
  从上往下命中一个就不在进行命中判断，如果都没有命中就需要通过循环来寻找

- 新前与旧前
- 新后与旧后
- 新后与旧前
- 新前与旧后

diff过程中整体遵循深度优先、同层比较的策略；两个节点之间比较会根据它们是否拥有子节点或者文本节点做不同操作，比较两组子节点是算法的重点，首先对于节点进行4次比较，如果没有找到相同节点才按照通用方式遍历查找，查找结束再按情况处理剩下的节点；借助key可以非常精确找到相同节点，因此整个patch过程非常高效

## 谈一谈对vue组件化的理解

1. 把程序独立的功能与模块提出来，切分为更小的快，让其有更好的逻辑，更好的复用性，合理划分组件，有助于提升应用性能
2. 组件化开发能大幅度提高应用开发效率、测试性、复用性
3. 组件使用分类有：页面组件、业务组件、通用组件
4. 组件用该是高内聚、低耦合，并且是遵循单向数据流的原则
5. 常用的组件化技术：prop，自定义事件，插槽等，主要是用于组件通信、扩展等；

## 谈一谈对vue设计原则的理解

- 渐进式框架
  是一个自底向上的逐层应用，vue的核心库只关注图层，不仅易于上手，还便于与第三方库或既有项目整合
- 易用、灵活和高效
  易用：vue数据响应式的编程方式、声明式模板、基于配置的组件系统等核心特性，数据驱动视图
  灵活：可以随着应用规模不断扩大，逐渐引入其他模块
  高效：虚拟DOM与diff算法使我们的应用拥有最佳的性能表现

## vue组件模板为什么只能有一个根元素

1. new Vue(el: '#app') 生成根实例的时候需要有一个节点来挂载
2. 单文件组件中，template下的元素div，其实就是"树"状数据结构中的"根"
3. diff算法要求的，patchVnode() 需要有一个节点来挂载

- template标签的三个特性
  1. 隐藏性：设置了display: none; 该标签不会显示在页面的任何地方
  2. 任意性：该标签可以写在任何地方，甚至是head、body、script标签内
  3. 无效性：该标签里的任何HTML内容都是无效的，不会起任何作用，只能innerHTML来获取里面的内容

## 谈谈你对MVC、MVP、MVVM的理解

mvc：控制器、视图、模型，主要应用在后端，如Spring MVC，优点是分层清晰，缺点是数据流混乱，维护性问题

mvp：是mvc的进化，Presenter作为中间层负责MV通信，解决了两者耦合问题，但P层过于臃肿会导致维护问题

mvvm:在前端领域有广泛应用，它不仅解决MV耦合问题，还同时解决了维护两者映射关系的大量繁杂代码和DOM操作代码，在提高开发效率、可读性同时还保持了优越的性能表现

ViewModel通过实现一套数据响应机制自动响应Model中数据变化
同时Viewmodel会实现一套更新策略自动将数据变化转换为视图更新
通过事件监听响应View中用户交互修改Model中的数据
这样ViewModel中就减少了大量DOM操作代码
MVVM在保持View和Model松耦合的同时，还减少了维护它们关系的代码，使用户专注于业务逻辑，兼顾开发效率和可维护性

## vue性能优化的方法

1. 路由懒加载
2. keep-alive缓存页面
3. 使用v-show复用DOM
4. v-for 遍历避免同时使用v-if
5. 长列表展示
  如果只是显示，不会有任何改变，就不需要做响应化

  ```js
    this.users = object.freeze(users) // 冻结不允许修改
  ```

6. 如果是大数据长列表，可采用虚拟滚动，只渲染少部分区域的内容
参考 vue-virtual-scroller、vue-virtual-scroll-list

7. 事件的销毁

8. 图片懒加载

  ```js
    <img v-lazy="/static/img/1.png">
  ```

  参考：vue-lazyload

9. 第三方插件按需引入

10. 无状态的组件标记为函数式组件
  函数式组件 无组件实例，运行时所消耗的资源较小

  ```vue
    <template functional>
      <div class="cell">
        {{ value }}
      </div>
    </template>

    <script>
      export default {
        props: ["value"]
      }
    </script>
  ```

11. 子组件分割

12. SSR 服务端渲染
有利于seo优化
首屏加载快

## watch 与 computed 的区别

- watch 监听
  - 不支持缓存，只要监听的数据变化就会触发响应操作
  - 支持异步
  - 监听的数据必须是data或者props中的数据

- computed
  - 支持缓存，依赖的数据发生变化时数据才会重新计算，否则取缓存
  - 不支持异步，当computed内部有异步操作时时无法监听数据变化的
  - computed属性的属性值是一个函数，函数返回值为属性的属性值，每个属性都可以设置set与get方法

## vuex使用及其理解

- vuex是什么
- 核心概念是什么
  - state
  - mutation
  - action
  - getter
  - model
- 怎么做数据存储
- 什么情况下应该使用vuex
- vuex理解 => 源码

## nextTick的原理

它可以在DOM更新完毕后执行一个回调

- vue如何检测DOM更新完毕
  MutationObserver 是HTML5新增的属性，用于监听DOM修改事件，能够监听到节点的属性、文本内容、子节点等的改动，是一功能强大的利器
  <img :src="$withBase('/vue2面试/3.png')" alt="foo">

- 总结
  1. vue用异步队列的方式来控制DOM更新和nextTick回调先后执行
  2. microtask因为其高优先级特性，能确保队列中的微任务在一次事件循环前被执行完毕
  3. 因为兼容问题，vue需要做microtask向macrotask的降级方案

## vue的双向数据绑定原理

vue的双向数据绑定的设计思想为观察者模式

- Dep对象：Dependency依赖的简写，包含有三个主要属性id，subs，target和四个主要函数addSub，removeSub，depend，notify，是观察者的依赖集合，负责在数据发生改变时，使用notify()触发保存在subs下的订阅列表，依次更新数据和DOM

- Observer对象：即观察者（监听器），包含两个主要属性value，dep。做法是使用getter/setter方法覆盖默认的取值和赋值操作，将对象封装为响应式对象，每一次调用时更新依赖列表，更新值时触发订阅者。绑定在对象的 _ob_ 原型链属性上

- Watcher 监听者

实现vue的双向数据绑定，是采用数据劫持结合发布者和订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调，getter函数里面执行的任务是watcher订阅者, 而setter函数执行的任务是发布者，双向数据绑定原理的实现主要就是如下几步

1. 实现一个数据监听器Observer，能够对数据对象的所有属性进行监听，当对象的属性有变化时可拿到最新值并通知订阅者
2. 实现一个指令解析器Compile，对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数
3. 实现一个Watcher，作为连接Observer和Compile的中间桥梁，能够订阅并收到每个数据对象属性变动的通知，执行指令绑定的相应回调函数，从而达到更新视图的目的
4. mvvm入口函数，整合以上三者

  <img :src="$withBase('/vue2面试/4.png')" alt="foo">

## 路由中的导航钩子

- 全局的钩子
  - beforeEach
  - arterEach
- 路由配置中的导航钩子
  - beforeEnter

    ```js
      routes: [
        {
          path: '/foo',
          component: Foo,
          beforeEnter: (to, from, next) => {
            // ...
          }
        }
      ]
    ```

- 组件内的钩子函数
  - beforeRouteEnter
    - 该组件的对应路由被comfirm前调用
    - 此时实例还没被创建，所以不能获取实例（this）
  - beforeRouteUpdate
    - 当前路由改变，但组件被复用时候调用
    - 该函数内可以访问组件的实例（this）
  - beforeRouteLeave
    - 当导航离开组件的对应路由时调用
    - 该函数内可以访问获取组件实例（this）
- 监听路由的变化

  ```js
    watch: {
      "$route"(to, from) {

      }
    }
  ```

## 路由的传参有几种形式

- 三种
  - params传参
    - 显示参数（动态路由匹配）
      - url中的参数需要用冒号 : 表示。当一个路由被匹配时，它的 params 的值将在每个组件中以 this.$route.params 的形式暴露出来。
      - 因为参数在url路径上显示，所以当我们刷新时，参数依旧保留

      ```js
        //子组件
        {
            path: '/Search/:keyword',
            name: 'Search',
            component: () => import (),
            meta: { show: true }
        }
      ```

    - 不显示参数
      注意：当params不在路由上时，参数为不可见。但是当我们刷新页面是，参数会消失。

      ```js
         this.$router.push({
              name: "Search",
              params: { keyword: this.keyword },//这种方式的传参必须要有路由的别名name
          });
      ```

  - query传参（显示传参）
    query传参在路径上以?关键字=**的形式存在，刷新页面，数据保留

    ```js
      this.$router.push({
          name: "Search",
          query: { keyword: this.keyword },//这种方式的传参必须要有路由的别名name
      });

      // 路径传参
      this.$router.push(`/Search?k=${this.keyword}`);
    ```

  - props传参（路由组件传参）
    - 布尔模式
      当props设置为true时，route.params将被设置为组件的props。这种情况下，只能传params参数。

      ```js
         {
              path: '/Search/:keyword?',
              name: 'Search',
              component: () =>
                  import ('../views/Search'),
              meta: { show: true },
              props: true
          }
      ```

    - 对象模式
      当props是一个对象时，它将原样设置为组件props

      ```js
        {
            path: '/Search/:keyword?',
            name: 'Search',
            component: () =>
                import ('../views/Search'),
            meta: { show: true },
            props: { a: 1, b: 2 } //定义a和b两个变量
        }
      ```

    - 函数模式
      你可以创建一个返回props的函数。这允许你将参数转换为其他类型，将静态值与基于路由的值相结合等等

      ```js
        {
            path: '/Search/:keyword?',
            name: 'Search',
            component: () =>
                import ('../views/Search'),
            meta: { show: true },
            props: route => ({ k: route.query.keyword, keyword: route.params.keyword })
        }
      ```

    - 获取参数

      ```js
        // 首先在父路由里面设置路由跳转

        this.$router.push({
                name: "Search",
                params: { keyword: this.keyword || undefined },
                query: { k: this.keyword.toUpperCase() },
              });

        // 然后给子路由的路径配置里面加上props
        {
            path: '/Search/:keyword?',
            name: 'Search',
            component: () =>
                import ('../views/Search'),
            meta: { show: true },
            props: route => ({ k: route.query.k, keyword: route.params.keyword })
        }

        // 页面中使用
        <template>
          <div>
            <div>{{ k }}</div>
            <div>{{ keyword }}</div>
          </div>
        </template>

        <script>
          export default {
            props: ["keyword", "k"]
          }
        </script>
      ```

## 路由的配置

1. 引入vue-router.js

2. 配置路由path和组件, 和生成路由对象

3. 把路由对象配置到new Vue中router选项下

4. 页面使用`<router-view></router-view>` 承载路由

5. `<router-link to="要跳转的路径"></router-link>` 设置路由导航(声明式导航方式/编程式跳转)

## 递归组件

渲染数据这一步非常简单，首先是把树形结构封装成一个列表组件，其次判断每一项有没有子节点，如果有子节点，再使用自身组件去渲染就可以了

```vue
  <template>
    <div class="tree-item">
      <div v-for="item in treeData" :key="item.id">
        <div class="item-title">{{ item.name }}</div>
        <div v-if="item.children && item.children.length" class="item-childen">
          <my-tree :treeData="item.children"></my-tree>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'myTree',
    props: {
      treeData: {
        type: Array,
        default: () => []
      }
    }
  }
  </script>

  <!-- 调用组件 -->
  <template>
    <my-tree :tree-data="treeData"></my-tree>
  </template>
```

## vue的响应式原理

1. 通过Object.defineProperty来实现监听数据的改变和读取（属性中的getter和setter方法） 实现数据劫持
2. 观察者模式（发布者-订阅者）
观察者(订阅者) – Watcher：
update()：当事件发生时，具体要做的事情
3. 目标(发布者) – Dep:
subs 数组：存储所有的观察者
addSub()：添加观察者
notify()：当事件发生，调用所有观察者的 update() 方法
4. 当数据发生改变通过发布者订阅者模式来进行通知 进行界面刷新

首先要对数据(data)进行劫持监听，所以我们需要设置一个监听器Observer，用来监听所有属性。如果属性发上变化了，就需要告诉订阅者Watcher看是否需要更新。因为订阅者是有很多个，所以我们需要有一个消息订阅器（发布者）Dep来专门收集这些订阅者，然后在监听器Observer和订阅者Watcher之间进行统一管理的。接着，我们还需要有一个指令解析器Compile，对每个节点元素进行扫描和解析，将相关指令对应初始化成一个订阅者Watcher，并替换模板数据或者绑定相应的函数，此时当订阅者Watcher接收到相应属性的变化，就会执行对应的更新函数，从而更新视图。
  <img :src="$withBase('/vue2面试/5.png')" alt="foo">
