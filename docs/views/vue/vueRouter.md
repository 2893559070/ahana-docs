# vueRouter

## 1) 下载

```js
npm install vue-router@4
```

## 2) 配置路由

- 暴露出一个createRouter方法，用来创建路由对象
- 通过defineAsyncComponent方法来实现路由的懒加载(文章1.13号更新：正式版本可以不用这个方法)

```js
import {
    defineAsyncComponent
} from 'vue'
import {
    createRouter,
    createWebHistory
} from 'vue-router'


const routes = [{
        path: '',
        redirect: {
            name: 'home',
        }
    }, {
        path: "/home",
        name: 'home',
        //component: defineAsyncComponent(() => import('/src/pages/home/index.vue'))  //使用defineAsyncComponent来包裹  rc版本
        component:() => import('/src/pages/home/index.vue'),// V3.0.5
    },
    {
        path: "/about",
        name: 'about',
        component: defineAsyncComponent(() => import('/src/pages/about/index.vue'))
    }
]

export default createRouter({
    history: createWebHistory(), //===>mode:"history"
    routes,
})
```

## 3) 导航

- setup里面获取不到this，路由提供了两个方法useRouter和useRoute来替代原来的api

```js
<script>
import { useRouter, useRoute } from "vue-router";

export default {
  name: "App",
  props: {},
  setup(props, { attrs, slots, emit }) {
      const router =useRouter() //==>this.$router
      const route=useRoute()//this.$route
      const goRouter = () => {
        router.push("/about");
      };
      return{
          goRouter,
      }
  }
}
</script>
```