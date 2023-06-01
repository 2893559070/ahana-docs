# 2-cesium使用

## 使用方式

将cesium-1.93文件下的build文件迁入到项目中

- 在public下的index.html下引入
```html
<script src="/Build/Cesium/Cesium.js"></script>

<link rel="stylesheet" href="/Build/Cesium/Widgets/widgets.css">
```

- 使用

```html
<body>
    <!-- 设置dom画布 -->
    <div id="cesiumContsiner" />
</body>

<script>
    // js 配置
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
</script>
```

- vue、react 使用同上

## 界面介绍

<img :src="$withBase('/webgl/cesium/1.jpg')" alt="foo" />

- Geocoder : 查找位置工具，查找到之后会将镜头对准找到的地址，默认使用bing地图
- Home Button :视角返回初始位置.
- Scene Mode Picker : 选择视角的模式，有三种：3D，2D，哥伦布视图(CV)
- Base Layer Picker : 图层选择器，选择要显示的地图服务和地形服务.
- Navigation Help Button :导航帮助按钮，显示默认的地图控制帮助.
- Animation : 动画器件，控制视图动画的播放速度.
- Timeline :时间线,指示当前时间，并允许用户跳到特定的时间.
- Credits Display :版权显示，显示数据归属，必选
- Fullscreen Button :全屏按钮

## 控件

<img :src="$withBase('/webgl/cesium/2.jpg')" alt="foo" />

界面上默认的小控件可以通过在初始化Viewer的时候设置相应的属性来关闭

```js
var viewer = new Cesium.Viewer('cesiumContainer',{
    geocoder:false,
    homeButton:false,
    sceneModePicker:false,
    baseLayerPicker:false,
    navigationHelpButton:false,
    animation:false,
    creditContainer:"credit",
    timeline:false,
    fullscreenButton:false,
    vrButton:false,
});

// 显示帧速(FPS)
viewer.scene.debugShowFramesPerSecond = true;
```