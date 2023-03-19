# eventBus

```js
/*
 0. 创建eventBus.js 文件
 1. 创建组件1 组件2
 2. 在 组件1 组件2 引入 eventBus.js
 3. eventBus.$emit('name', data) 发布事件
 4. eventBus.$on('name', this.method) 订阅事件
*/

// 0 
import Vue from 'vue'
const eventBus = new Vue()
export default eventBus

// 1 - 4 发布事件
<template>
  <input type="text" v-model="text" @input="input">
</template>

<script>
import eventBus from '../../ulites/eventBis'
export default {
  data() {
    return {
      text: ''
    }
  },
  methods: {
    input() {
      eventBus.$emit('ceshi', this.text)
    }
  }
}
</script>

// 1 - 4 订阅事件
<template>
  <div>{{ num }}</div>
</template>

<script>
import eventBus from '../../ulites/eventBis'
export default {
  data() {
    return {
      num: ''
    }
  },
  mounted() {
    eventBus.$on('ceshi', this.text)
  },
  methods: {
    text(e) {
      this.num = e
    }
  }
}
</script>

```