# 2-cesium场景物体

## 坐标系

1. 屏幕坐标系，二位笛卡尔坐标系，Cartesian2类型
2. 地理坐标系统，WGS-84坐标系，Cartographic类型，经度、纬度、高度
3. 笛卡尔空间直角坐标系，Cartesuian3类型

## 角度与弧度的转换

```js
  // 角度转弧度 
  Cesium.Math.toRadians(90);

  // 弧度转角度
  Cesium.Math.toDegrees(2 * Math.PI);

  // 将经纬度转为笛卡尔坐标
  const cartesian3 = Cesium.Cartesian3.fromDegrees(
    89.5, // 经度
    20.4, // 维度
    100 // 高度
  )

  // 将笛卡尔坐标转为经纬度
  Cesium.Cartographic.fromCartesian(cartesian3)
```

## 相机
