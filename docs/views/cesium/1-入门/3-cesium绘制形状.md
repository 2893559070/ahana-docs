# 3-cesium绘制形状

## Entity添加形状

```js
var viewer = new Cesium.Viewer('cesiumContainer');
var redBox = viewer.entities.add({
  name : 'Red box with black outline',
  position: Cesium.Cartesian3.fromDegrees(-107.0, 40.0, 300000.0),
  box : {
    dimensions : new Cesium.Cartesian3(400000.0, 300000.0, 500000.0),
    material : Cesium.Color.RED.withAlpha(0.5),
    outline : true,
    outlineColor : Cesium.Color.BLACK
  }
});

viewer.zoomTo(viewer.entities);
```

效果：
<img :src="$withBase('/webgl/cesium/3.jpg')" alt="foo" />

## CZML添加

通过CZML也可以添加几何形状，而且CZML还可以描述动画
CZML是一种JSON格式的字符串，用于描述与时间有关的动画场景，CZML包含点、线、地标、模型、和其他的一些图形元素，并指明了这些元素如何随时间而变化。某种程度上说, Cesium 和 CZML的关系就像 Google Earth 和 KML。

```js
var czml = [{
    "id" : "document",
    "name" : "box",
    "version" : "1.0"
},{
    "id" : "shape2",
    "name" : "Red box with black outline",
    "position" : {
        "cartographicDegrees" : [-107.0, 40.0, 300000.0]
    },
    "box" : {
        "dimensions" : {
            "cartesian": [400000.0, 300000.0, 500000.0]
        },
        "material" : {
            "solidColor" : {
                "color" : {
                    "rgba" : [255, 0, 0, 128]
                }
            }
        },
        "outline" : true,
        "outlineColor" : {
            "rgba" : [0, 0, 0, 255]
        }
    }
}];

var viewer = new Cesium.Viewer('cesiumContainer');
var dataSourcePromise = Cesium.CzmlDataSource.load(czml);
viewer.dataSources.add(dataSourcePromise);
viewer.zoomTo(dataSourcePromise);
```

可以看到单个的形状和Entity的描述基本一致，只不过是使用JSON语法来描述

## 形状相关描述

<!-- <img :src="$withBase('/webgl/cesium/4-1.jpg')" alt="foo" /> -->

| 形状样式 | img  | 链接 |
|:--------| :---------:|--------:|
| Point  |  ![Point](/webgl/cesium/4-1.jpg)  |  entity.point – [Reference Build/Documentation](http://cesium.xin/cesium/Documentation/PointGraphics.html) |
| Boxes  |  ![Boxes](/webgl/cesium/4-2.jpg)  |  entity.box  – [Reference Build/Documentation](http://cesium.xin/cesium/Documentation/BoxGraphics.html) |
| Circles and Ellipses  |  ![Circles and Ellipses](/webgl/cesium/4-3.jpg)  |  entity.ellipse – [Reference Build/Documentation](http://cesium.xin/cesium/Documentation/EllipseGraphics.html) |
| Corridor  |  ![Circles and Ellipses](/webgl/cesium/4-4.jpg)  |  entity.corridor  – [Reference Build/Documentation](http://cesium.xin/cesium/Documentation/CorridorGraphics.html) |
| Cylinder and Cones  |  ![Circles and Ellipses](/webgl/cesium/4-5.jpg)  |  entity.cylinder  – [Reference Build/Documentation](null) |
| Polygons  |  ![Circles and Ellipses](/webgl/cesium/4-6.jpg)  |  entity.polygon – [Reference Build/Documentation](http://cesium.xin/cesium/Documentation/PolygonGraphics.html) |
| Polylines  |  ![Circles and Ellipses](/webgl/cesium/4-7.jpg)  |  entity.polyline – [Reference Build/Documentation](http://cesium.xin/cesium/Documentation/PolylineGraphics.html) |
| Polyline Volumes  |  ![Circles and Ellipses](/webgl/cesium/4-8.jpg)  |  entity.polylineVolume – [Reference Build/Documentation](null) |
| Rectangles |  ![Circles and Ellipses](/webgl/cesium/4-9.jpg)  |  entity.rectangle  – [Reference Build/Documentation](http://cesium.xin/cesium/Documentation/Rectangle.html) |
| Rectangles |  ![Circles and Ellipses](/webgl/cesium/4-10.jpg)  |  entity.rectangle  – [Reference Build/Documentation](http://cesium.xin/cesium/Documentation/Rectangle.html) |
| Spheres and Ellipsoids |  ![Circles and Ellipses](/webgl/cesium/4-11.jpg)  |  entity.ellipsoid – [Reference Build/Documentation](http://cesium.xin/cesium/Documentation/EllipsoidGraphics.html) |
| Walls |  ![Circles and Ellipses](/webgl/cesium/4-12.jpg)  |  entity.wall  – [Reference Build/Documentation](http://cesium.xin/cesium/Documentation/WallGraphics.html) |