# cesium入门

## 概述

  <img :src="$withBase('/gis//cesium/1.png')" alt="foo">

## Cesium主要功能介绍

  <img :src="$withBase('/gis//cesium/2.png')" alt="foo">

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

## 坐标系

  <img :src="$withBase('/gis//cesium/3.png')" alt="foo">

  2. WGS84弧度坐标系

    构造WGS84弧度坐标对象

  ```js
    // 构造函数法
    new Cesium.Cartographic(longitude弧度, latitude弧度, height米)

    // 静态函数法
    const cartographic = Cesium.Cartographic.fromDegrees(longitude弧度, latitude弧度, height米)

    const cartographic = Cesium.Cartographic.fromRadians(longitude弧度, latitude弧度, height米)
  ```
  
  <img :src="$withBase('/gis//cesium/5.png')" alt="foo">

  3. 笛卡尔空间直角坐标系 Cartesian3

    ```js
      new Cesium.Cartesian2(x,y)
      new Cesium.Cartesian3(x,y,z)
    ```

  <img :src="$withBase('/gis//cesium/4.png')" alt="foo">

  1. 经纬度转弧度

    ```js
      const radians = Cesium.CesiumMath.toRadians(degrees)
    ```

  2. 弧度转经纬度

    ```js
      const degrees = Cesium.CesiumMath.toDegrees(radians)
    ```
