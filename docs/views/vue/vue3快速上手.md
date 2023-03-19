# vue3 快速上手

- vue2:
  - 说明： 在vue2中如何组织代码的，我们会在一个vue文件中methods，computed，watch，data中等等定义属性和方法，共同处理页面逻辑，我们称这种方式为Options API
  - 缺点： 一个功能往往需要在不同的vue配置项中定义属性和方法，比较分散，项目小还好，清晰明了，但是项目大了后，一个methods中可能包含20多个方法，你往往分不清哪个方法对应着哪个功能
- vue3:
  - 在vue3 Composition API 中，我们的代码是根据逻辑功能来组织的，一个功能所定义的所有api会放在一起（更加的高内聚，低耦合），这样做，即时项目很大，功能很多，我们都能快速的定位到这个功能所用到的所有API，而不像vue2 Options API 中一个功能所用到的API都是分散的，需要改动功能，到处找API的过程是很费劲的
  - 基于函数组合的 API 更好的重用逻辑代码（在vue2 Options API中通过Mixins重用逻辑代码，容易发生命名冲突且关系不清）

## setup ref reactive 行为事件

``` html
  <template>
  <h2>{{ count }}</h2>
  <hr />
  <button @click="update">更新</button>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  /* 使用vue3的composition API */
  setup() {
    // 定义响应式数据 ref对象
    const count = ref(1)
    const count1 = reactive(
      {
        name: '姓名',
        age: '年龄'
      }
    )
    // 更新响应式数据的函数
    function update() {
      // alert('update')
      count.value = count.value + 1
    }

    return {
      count,
      count1,
      update
    }
  }
}
</script>
```

## computed  

```js
  // 计算属性
  const newdataNum = computed({
    get() {
      return data.num + 1
    },
    set(val: any) {
      if(val > 100) {
        data.num = 100
      }
    }
  })
```

## watch

```js
  // 监听事件 监听整个对象
  watch(data, () => {
    console.log(1);
    data.name += '你好'
  },
  {
    immediate: true,
    deep: true
  })

  // 监听事件 监听单个变量
  watch(() => data.num, () => {
    console.log(1);
    data.name += '你好'
  },
  {
    immediate: true,
    deep: true
  })

  // 监听事件 监听多个变量
  watch([() => user.num, () => user.name, () => data.num], (val) => {
    console.log(val);
  })
```

## vue3 的生命周期

- beforeCreate -> 使用 setup()
- created -> 使用 setup()
- beforeMount -> onBeforeMount
- mounted -> onMounted
- beforeUpdate -> onBeforeUpdate
- updated -> onUpdated
- beforeDestroy -> onBeforeUnmount
- destroyed -> onUnmounted
- errorCaptured -> onErrorCaptured
- 新增的钩子函数
  - 组合式 API 还提供了以下调试钩子函数：
    - onRenderTracked
    - onRenderTriggered

## 全局 property

```js
app.config.globalProperties.foo = 'i im foo'

import {globalProperties} from 'vue'

setup() {
  const { proxy, ctx } = getCurrentInstance()
  ctx.foo
  // 使用 ctx ，但是经过测试，打包到dist以后，ctx下面的值是拿不到的，本地可以
  proxy.foo
  // 使用 proxy （强烈推荐）
}
```

## [Vue3快速上手](http://huaxhe.gitee.io/vue3_study_docs/chapter3/01_%E8%AE%A4%E8%AF%86Vue3.html#_1-%E4%BA%86%E8%A7%A3%E7%9B%B8%E5%85%B3%E4%BF%A1%E6%81%AF)
