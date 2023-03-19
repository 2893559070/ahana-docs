# vue 预览 word 文件 docx

## 安装 npm 依赖
```js
npm i docx-preview@0.1.4
npm i jszip
```

## 预览在线地址文件
```vue
<template>
  <div class="home">
    <div ref="file"></div>
  </div>
</template>

<script>
import axios from 'axios'
const docx = require('docx-preview');
window.JSZip = require('jszip')
export default {
  mounted(){
    axios({
      method: 'get',
      responseType: 'blob', // 设置响应文件格式
      url: '/docx',
    }).then(({data}) => {
      docx.renderAsync(data,this.$refs.file) // 渲染到页面预览
    })
  }
}
</script>
```

## 预览本地文件
```vue
<template>
  <div class="my-component" ref="preview">
    <input type="file" @change="preview" ref="file">
  </div>
</template>
<script>
const docx = require('docx-preview');
window.JSZip = require('jszip')
export default {
  methods:{
    preview(e){
      docx.renderAsync(this.$refs.file.files[0],this.$refs.preview) // 渲染到页面预览
    }
  }
};
</script>
<style lang="less" scoped>
.my-component{
  width: 100%;
  height: 90vh;
  border: 1px solid #000;
}
</style>
```