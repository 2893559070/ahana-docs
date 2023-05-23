# 1-cesium入门

## 概述

  <img :src="$withBase('/gis/cesium/1.png')" alt="foo">

## Cesium主要功能介绍

  <img :src="$withBase('/gis/cesium/2.png')" alt="foo">

## Cesium下载

[Cesium下载](https://cesium.com/platform/cesiumjs/)

## Cesium pc使用

```html

<script src="Cesium/Cesium.js"></script>
<link href="Cesium/Widgets/widgets.css" rel="stylesheet">

<body>

  <div id="cesiumContsiner" />

  <script>
    Cesium.Ion.defaultAccessToken = "官网注册的token"；

    const viewer = new Cesium.Viewer("cesiumContsiner", {
      // 配置项
      animation: false, // 动画
      timeline: false, // 时间轴
    })
    viewer.scene.globe.show = true; // 是否显示地球

    // 使用中主要用于加载实体模型，几何图形 样效设置 动作修改
    const entity = viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(116.39, 39.31, 500), // 设置默认相机为止 经度 维度 高度
      point: {
        pixelSize: 100,
        color: new Cesium.Color(0,1,0,1)
      }
      viewer.trackedEntity = entity;
    })

    /***
     * DataSourceCollection 加载矢量数据的主要方式之一
     *  1. CzmDataSource
     *  2. KmlDataSource
     *  3. GeoJsonDataSource
     * 
     */
    viewer.dataSource.add(
      Cesium.GeoJsonDataSource.load(
        "json路径"
      )
    )
  </script>
</body>
```

## 基础设置

### 文件迁移

<img :src="$withBase('/gis/cesium/5-1.png')" alt="foo">

### 引入样式

在index.html入口文件中引入

```html
<!-- 引入 cesium 样式-->
<link rel="stylesheet" href="/cesium/Widgets/widgets.css">
```

### 基本使用

```vue
<template>
  <div id="cesiumContainer" />
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import * as Cesium from "cesium";

const cesiumContainer = ref<any>();

// 设置cesium token
Cesium.Ion.defaultAccessToken = `***`;

// 设置cesium静态路径
window.CESIUM_BASE_URL = "/cesium";

// 设置cesium默认视角（中国）
Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(
  89.5, // 经度西
  20.4, // 纬度南
  110.4, // 经度东
  61.2 // 纬度北
);

onMounted(() => {
  cesiumContainer.value = new Cesium.Viewer("cesiumContainer", {
    infoBox: false, // 控制台报错信息
    geocoder: false, // 是否显示查询按钮
    homeButton: false, // 是否显示home按钮
    sceneModePicker: false, // 控制查看器显示模式
    baseLayerPicker: false, // 是否显示图层选择
    navigationHelpButton: false, // 是否显示帮助按钮
    animation: false, // 是否播放动画
    timeline: false, // 是否显示时间轴
    // 设置天空盒
    skyBox: new Cesium.SkyBox({
      sources: {
        positiveX: "./texture/sky/px.jpg",
        negativeX: "./texture/sky/nx.jpg",
        positiveY: "./texture/sky/ny.jpg",
        negativeY: "./texture/sky/py.jpg",
        positiveZ: "./texture/sky/pz.jpg",
        negativeZ: "./texture/sky/nz.jpg",
      },
    }),
  });

  // 隐藏logo
  cesiumContainer.value.cesiumWidget.creditContainer.style.display = "none";
});
</script>
```

## 自定义地图

### 获取地图数据

[天地图](tianditu.com)

### 添加地图

```ts
  cesiumContainer.value = new Cesium.Viewer("cesiumContainer", {
    // 高德矢量地图,
    imageryProvider: new Cesium.UrlTemplateImageryProvider({
      url: "http://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
      layer: "tdtVecBasicLayer",
      style: "default",
      format: "image/png",
      tileMatrixSetID: "GoogleMapsCompatible",
    }),

    // 天地图矢量路径图
    // imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
    //   url: "http://t0.tianditu.com/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=30d07720fa76f07732d83c748bb84211",
    //   layer: "tdtBasicLayer",
    //   style: "default",
    //   format: "image/jpeg",
    //   tileMatrixSetID: "GoogleMapsCompatible",
    // }),

    // 天地图影像服务
    // imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
    //   url: "http://t0.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=30d07720fa76f07732d83c748bb84211",
    //   layer: "tdtBasicLayer",
    //   style: "default",
    //   format: "image/jpeg",
    //   tileMatrixSetID: "GoogleMapsCompatible",
    // }),

    // OSM地图,
    // imageryProvider: new Cesium.OpenStreetMapImageryProvider({
    //   url: "https://a.tile.openstreetmap.org/",
    // }),
  });

  const imagerLayers = cesiumViewer.value.imageryLayers;
  // 地图叠加
  var layer = imagerLayers.addImageryProvider(
    new Cesium.UrlTemplateImageryProvider({
      url: "http://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
      layer: "tdtVecBasicLayer",
      style: "default",
      format: "image/png",
      tileMatrixSetID: "GoogleMapsCompatible",
    })
  );
  // 设置图层透明度
  layer.alpha = 0.5;
```

## 地形

### 添加地形

[地理空间数据云](gscloud.cn)

<img :src="$withBase('/gis/cesium/6.png')" alt="foo">

### 地形处理

[CESIUMLAB](cesiumlab.com)
下载后本地安装
<img :src="$withBase('/gis/cesium/6-1.png')" alt="foo">

<img :src="$withBase('/gis/cesium/6-2.png')" alt="foo">
