# 6-WebGIS开发

[高德开放平台](https://developer.amap.com/?ref=http%3A%2F%2Flbs.gaode.com%2Fdev%2F)

## 地图参数

```js
const map =  new AMap.Map("container", {
  ...
})
```

## 图层

```js
const map =  new AMap.Map("container", {
  ...
})
```

## 地图控件

```js
const map =  new AMap.Map("container", {
  ...
})
```

## 地图事件

```js
const map =  new AMap.Map("container", {
  ...
})

map.on("click", (e) => {
  // e.lnglat.lng 经度
  // e.lnglat.lat 纬度
})
```

## 点标记

```js
const map =  new AMap.Map("container", {
  ...
})

const marker = new AMap.Marker({
  positiona: new AMap.LngLat(经度, 纬度)
})

map.add(marker)
```
