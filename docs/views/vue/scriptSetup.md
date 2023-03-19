# scriptSetup语法糖

## script setup

它是 Vue3 的一个新语法糖，在 `setup` 函数中。所有 ES 模块导出都被认为是暴露给上下文的值，并包含在 setup() 返回对象中。相对于之前的写法，使用后，语法也变得更简单。

```vue
<script setup></script>
```

## 组件自动注册

在 script setup 中，引入的组件可以直接使用，无需再通过`components`进行注册，并且无法指定当前组件的名字，它会自动以文件名为主，也就是不用再写`name`属性了。示例：

```vue
<template>
    <Child />
</template>

<script setup>
import Child from './Child.vue'
</script>

// 如果需要定义类似 name 的属性，可以再加个平级的 script 标签，在里面实现即可。
```

## 组件核心 API 的使用

### 使用 props

通过`defineProps`指定当前 props 类型，获得上下文的props对象。示例：

```vue
<script setup>
  import { defineProps } from 'vue'

  const props = defineProps({
    title: String,
  })
</script>
```

### 使用 emits

使用`defineEmit`定义当前组件含有的事件，并通过返回的上下文去执行 emit。示例：

```vue
<script setup>
  import { defineEmits } from 'vue'

  const emit = defineEmits(['change', 'delete'])
</script>
```

#### 获取 slots 和 attrs

可以通过`useContext`从上下文中获取 slots 和 attrs。不过提案在正式通过后，废除了这个语法，被拆分成了`useAttrs`和`useSlots`。示例：

```vue
// 旧
<script setup>
  import { useContext } from 'vue'

  const { slots, attrs } = useContext()
</script>

// 新
<script setup>
  import { useAttrs, useSlots } from 'vue'

  const attrs = useAttrs()
  const slots = useSlots()
</script>
```

### defineExpose API

传统的写法，我们可以在父组件中，通过 ref 实例的方式去访问子组件的内容，但在 script setup 中，该方法就不能用了，setup 相当于是一个闭包，除了内部的 `template`模板，谁都不能访问内部的数据和方法。

```vue
<script setup>
 import { defineExpose } from 'vue'
 const a = 1
 const b = 2
 defineExpose({
     a
 })
</script>
```

#### 属性和方法无需返回，直接使用

这可能是带来的较大便利之一，在以往的写法中，定义数据和方法，都需要在结尾 return 出去，才能在模板中使用。在 script setup 中，定义的属性和方法无需返回，可以直接使用！示例：

```vue
<template>
  <div>
    <p>My name is {{name}}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('Sam')
</script>
```
