# keep-alive

## Props

- include - string | RegExp | Array。只有名称匹配的组件会被缓存。
- exclude - string | RegExp | Array。任何名称匹配的组件都不会被缓存。
- max - number | string。最多可以缓存多少组件实例。

## 模板中缓存

```js
<keep-alive>
  <router-view />
</keep-alive>
```

## 路由配合模板缓存

```js
<keep-alive v-if="this.$route.meta.keepAlive">
  <router-view />
</keep-alive>

<router-view v-if="!this.$route.meta.keepAlive" />

// 路由
routes: [
  {
    path: '/name',
    name: 'name',
    component: name,
    meta: {
      keepAlive: true
    }
  }
]
```
