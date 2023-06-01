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

### 设置位置

```js
// setview瞬间到达指定位置，视角
const cesiumViewer = new Cesium.Viewer("cesiumContainer", {
  infoBox: false, // 控制台报错信息
});
const position = Cesium.Cartesian3.fromDegrees(116.393428, 39.90923, 1000);
cesiumViewer.camera.setView({
  // 指定相机位置
  destination: position,
  // 指定相机视角
  orientation: {
    // 指定相机方向 偏航角
    heading: Cesium.Math.toRadians(0),
    // 指定相机的 俯仰角
    pitch: Cesium.Math.toRadians(-90),
    // 指定相机的 滚转角 翻滚角
    roll: 0,
  },
});

// flyTo 相机飞往某个地方
cesiumViewer.value.camera.flyTo({
  // 指定相机位置
  destination: position,
  // 指定相机视角
  orientation: {
    // 指定相机方向 偏航角
    heading: Cesium.Math.toRadians(0),
    // 指定相机的 俯仰角
    pitch: Cesium.Math.toRadians(-90),
    // 指定相机的 滚转角 翻滚角
    roll: 0,
  },
});
```

### 相机交互

```js
  document.addEventListener("keydown", (e) => {
    // 获取相机距离地面的高度
    const height = cesiumViewer.camera.positionCartographic.height;
    const moveRate = height / 100;

    if (e.key == "w") {
      // 设置相机向前移动
      cesiumViewer.camera.moveForward(moveRate);
    } else if (e.key == "s") {
      // 设置相机向后移动
      cesiumViewer.camera.moveBackward(moveRate);
    } else if (e.key == "a") {
      // 设置相机向左移动
      cesiumViewer.camera.moveLeft(moveRate);
    } else if (e.key == "d") {
      // 设置相机向右移动
      cesiumViewer.camera.moveRight(moveRate);
    } else if (e.key == "q") {
      // 设置相机向左旋转
      cesiumViewer.camera.lookLeft(Cesium.Math.toRadians(1));
    } else if (e.key == "e") {
      // 设置相机向右旋转
      cesiumViewer.camera.lookRight(Cesium.Math.toRadians(1));
    } else if (e.key == "t") {
      // 设置相机向上旋转
      cesiumViewer.camera.lookUp(Cesium.Math.toRadians(1));
    } else if (e.key == "b") {
      // 设置相机向下旋转
      cesiumViewer.camera.lookDown(Cesium.Math.toRadians(1));
    } else if (e.key == "g") {
      // 设置相机向左逆时针翻滚 （画布顺时针）
      cesiumViewer.camera.twistLeft(Cesium.Math.toRadians(1));
    } else if (e.key == "h") {
      // 设置相机向右顺时针翻滚 （画布逆时针）
      cesiumViewer.camera.twistRight(Cesium.Math.toRadians(1));
    }
  });
```

## 物体

### 添加cesium默认3D建筑

```js
const OS = new Cesium.createOsmBuildings() as any;
const osmBuildings = cesiumViewer.value.scene.primitives.add(OS)
```

### 创建一个点

```js
cesiumViewer.entities.add({
  // 定位点
  position: Cesium.Cartesian3.fromDegrees(113.3191, 23.109, 650),
  // 点
  point: {
    pixelSize: 10,
    color: Cesium.Color.RED,
    outlineColor: Cesium.Color.WHITE,
    outlineWidth: 4
  }
})
```

### 添加文字标签和广告牌

```js
const label = cesiumViewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees(113.3191, 23.109, 620),
  label: {
    text: "广州塔",
    font: "24px sans-serif",
    fillColor: Cesium.Color.WHITE,
    outlineColor: Cesium.Color.BLACK,
    outlineWidth: 4,
    // FILL填充文字，OUTLINE勾勒标签，FILL_AND_OUTLINE填充文字和够了标签
    style: Cesium.LabelStyle.FILL_AND_OUTLINE,
    // 设置文字的偏移量
    pixelOffset: new Cesium.Cartesian2(0, 0),
    // 设置文字的显示位置
    horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
    // 设置文字的显示位置
    verticalOrigin: Cesium.VerticalOrigin.BOTTOM
  },
  billboard: {
    image: "/texture/gzt.png",
    width: 50,
    height: 50,
    // 设置广告牌的显示位置
    verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
    // 设置广告牌的显示位置
    horizontalOrigin: Cesium.HorizontalOrigin.CENTER
  }
})
```