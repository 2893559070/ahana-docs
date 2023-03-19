# vue 预览 Excel 表格

## 安装插件
```js
npm i xlsx
```
## 示例
```vue
<template>
  <div class="home">
    <div v-html="tableau"></div>
  </div>
</template>

<script>
import axios from 'axios'
import XLSX from "xlsx";
export default {
  data(){
    return {
      tableau: null,
    }
  },
  mounted(){
     axios.get('/xlsx',{
       responseType: "arraybuffer", // 设置响应体类型为arraybuffer
     }).then(({data})=> {
       let workbook = XLSX.read(new Uint8Array(data), {type:"array"}); // 解析数据
       var worksheet = workbook.Sheets[workbook.SheetNames[0]]; // workbook.SheetNames 下存的是该文件每个工作表名字,这里取出第一个工作表
       this.tableau = XLSX.utils.sheet_to_html(worksheet); // 渲染
     })
  }
}
</script>
```

[XLSX 详细了解](https://www.npmjs.com/package/js-xlsx)