# vue3学习

## 项目创建

- Vue-cli

  ```bash
    npm install -g @vue/cli

    vue create name
  ```

- Vite

  ```bash
    npm init vite-app name
    cd name
    npm install
    npm run dev

    yarn create vite-app name
    cd name
    yarn
    yarn dev
  ```

## Composition API

- 注意点：
  - 尽量vue2与vue3setup 不要进行混用 vue2可以访问到setup中的属性方法
  - setup中不能访问到vue2中的在配置
  - 有重名setup优先
  - setup不能是一个async函数，因为返回值不再是return的对象，而是被promise包裹的对象，模板看不到return对象中的属性

- setup
  - 执行时机：在beforeCreate之前执行一次，this是undefined
  - 参数
    - props: 值为对象，包含：组件外部传递过来，且组件每部声明接收了的属性
      - 声明后不用会给警告
    - context: 上下文对象
      - attrs: 值为对象，包含：组件外部传递过来，但没有在props配置中声明属性，相当于this.$attrs
      - slots: 收到的插槽内容，相当于this.$slots
      - emit: 分发自定义事件的函数，相当于this.$emit

- watch
  - 监视reactive定义的数据，无法正确的获取oldValue
  - 强制开启深度监听，无法关闭
  - 使用函数监听单个属性，此属性是多层对象，需要开启deep深度监听
  - ref基本数据类型不加value

### 常用使用方式

```vue
<!-- vue3 Composition API 经典steup -->
<script>
export default {
  setup() {
    import { ref } from 'vue';
    const data = ref(0);

    return {
      data
    }
  }
}
</script>

<!-- vue3 Composition API steup 语法糖 -->
<script setup>
  import { ref } from 'vue';
  const data = ref(0);
</script>

<!-- vue3 Composition API steup 语法糖 加ts -->
<script setup leng="ts">

  interface DataType {
    userInfo: object,
    code?: string | undefined
  }

  import { reactive } from 'vue';
  const data: DataType = reactive({
    userInfo: {}
  });
</script>
```

### Proxy响应式

- 通过Proxy（代理）：拦截对象中任意属性的变化，包括：属性值的读写、属性的添加、属性的删除等。
- 通过Reflect（反射）：对源对象的属性进行操作

```js
// 定义数据源
const person = {
  name: "张三",
  age: 18
}

// 定义代理实现响应式 window.Proxy
const p = new Proxy(person, {
  get(target, propName) {
    console.log(`读取${propName} ${target[propName]}`)
    // return target[propName];
    return Reflect.get(target, propName);
  },
  set(target, propName, value) {
    console.log(`设置${propName} ${target[value]}`)
    // target[propName] = value;
    Reflect.set(target, propName, value);
  },
  deleteProperty(target, propName) {
    console.log(`删除${propName}属性`)
    // return delete target[propName]
    return Reflect.deleteProperty(target, propName);
  }
})

// Reflect 反射对象，程序出错不用捕获，不影响后面代码的执行
```

### hook函数

- hook本质是一个函数，把setup函数中使用的Composition API进行了封装。
- 类似于vue2的mixin
- 自定义hook的优势：服用代码，让setup中的逻辑更清楚易懂

```ts
import { reactive, onMounted, onBeforeUnmount } from 'vue'
export default function () {
 //实现鼠标“打点”相关的数据
 let point = reactive({
  x: 0,
  y: 0
 })
 
 //实现鼠标“打点”相关的方法
 function savePoint(event) {
  point.x = event.pageX
  point.y = event.pageY
  console.log(event.pageX, event.pageY)
 }
 
 //实现鼠标“打点”相关的生命周期钩子
 onMounted(() => {
  window.addEventListener('click', savePoint)
 })
 
 onBeforeUnmount(() => {
  window.removeEventListener('click', savePoint)
 })
 
 return point
}

// 使用
<template>
  <h2>我是Test组件</h2>
  <h2>坐标为：x：{{ point.x }}，y：{{ point.y }}</h2>
</template>
 
<script>
import usePoint from "../hooks/usePoint";
export default {
  name: "Test",
  setup() {
    const point = usePoint();
    return { point };
  },
};
</script>
```

### toRef toRefs

- 创建一个ref对象，其value值指向另一个对象中的某个属性

```js
setup() {
  const data = reactive({
    userInfo: {
      username: 'name',
      password: 123,
      address: {
        a: 1,
        b: 2
      }
    }
  })

  const name1 = userInfo.username; // 丢失proxy代理，无法形成响应式
  const name2 = toRef(userInfo, 'username'); // 通过refImpl实例将name2进行代理，形成响应式
  const addressA = toRef(userInfo.address, 'a'); // 通过refImpl实例将addressA进行代理，形成响应式

  // 代理区别
  toRef(userInfo.address, 'a'); // userInfo.address.a 更改（与userInfo元数据保持同步，引用关系）
  toRef(userInfo.address.a); // userInfo.address.a 没更改（与userInfo元数据分离了，复制重新生成）

  /**
   * 统一代理
   * {
      userInfo: {
        username: 'name',
        password: 123,
        address: {
          a: 1,
          b: 2
        }
      }
    }
   * */ 
  const user = toRefs(userInfo);

  return {
    data,
    name1,
    name2,
    addressA,
    ...user
  }
}
```

<img :src="$withBase('/ts+vue3/vue31.png')" alt="foo">
<img :src="$withBase('/ts+vue3/vue3-2.png')" alt="foo">
<img :src="$withBase('/ts+vue3/vue3-3.png')" alt="foo">

- 动态加载组件
<img :src="$withBase('/ts+vue3/vue3-4.png')" alt="foo">

### vue3对全局API的调整

<img :src="$withBase('/ts+vue3/vue3-5.png')" alt="foo">
