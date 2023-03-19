# component动态组件

```js
<template>
  <component :is="itemName" />
</template>

<script>
import a_item from 'a'
import b_item from 'b'

  export default {
    data() {
      return {
        itemName: 'a_item'
      }
    },
    components: {
      a_item,
      b_item,
    }
  }
</script>
```