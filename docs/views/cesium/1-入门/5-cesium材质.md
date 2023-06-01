# 5-cesium材质

Cesium中为几何形状设置材质有多种方法

## Material
直接构建Cesium.Material对象，通过设置Material的属性来进行控制，官方示例和API描述的比较清楚

[API说明](http://cesium.xin/cesium/Documentation/Material.html?classFilter=Material)

[材质示例](https://sandcastle.cesium.com/?src=Materials.html)

## MaterialProperty

Cesium 材质相关的类为 MaterialProperty，它有以下几个子类:

- ColorMaterialProperty
- ImageMaterialProperty
- CheckerboardMaterialProperty
- StripeMaterialProperty
- GridMaterialProperty
- PolylineGlowMaterialProperty
- PolylineOutlineMaterialProperty

### 以Geometry来表现材质的变化，示例如下：

```js
//方法一，构造时赋材质
var entity = viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees(-103.0, 40.0),
  ellipse : {
    semiMinorAxis : 250000.0,
    semiMajorAxis : 400000.0,
    material : Cesium.Color.BLUE.withAlpha(0.5)//可设置不同的MaterialProperty
  }
});

//方法二，构造后赋材质
var ellipse = entity.ellipse;
ellipse.material = Cesium.Color.RED;
```

## ColorMaterialProperty-颜色材质
颜色是最常见的材质，可以将几何形状修改为不同的纯色，达到区分的目的，也可以完成比如鼠标移动到某个建筑，建筑变色之类;使用比较简单,只需要赋值颜色就行了，例如：
ellipse.material = Cesium.Color.BLUE.withAlpha(0.5)

![5-1](/webgl/cesium/5-1.jpg)

## ImageMaterialProperty–图片
图片纹理功能比较丰富，主要有下面属性：
- image 值可以是URL，Canvas,或者Video
- repeat 值为一个二位数，分别表示X,y方向的重复次数，例如new Cartesian2(2.0, 1.0)表示x方向重复2次,y方向重复1次
- color 设置颜色之后，会在图片上覆盖一层设置的颜色
- transparent 是否透明，纹理为png图片的时候可以设置

```js
//完整的这么写
ellipse.material = new Cesium.ImageMaterialProperty({
    image:'../images/test.jpg',
    color: Cesium.Color.BLUE,
    repeat : new Cesium.Cartesian2(4, 4)
});

//也可以简单的写成
ellipse.material = '../images/test.jpg';
```

:::tip
注意 在http网址中调用https网址图片，可能会调用失败
:::

![5-2](/webgl/cesium/5-2.jpg)

## CheckerboardMaterialProperty–棋盘纹理

共有三个属性，
- evenColor 默认白色，棋盘的第一个颜色
- oddColor 默认黑色，第二个颜色
- repeat 重复次数

```js
ellipse.material = new Cesium.CheckerboardMaterialProperty({
  evenColor : Cesium.Color.WHITE,
  oddColor : Cesium.Color.BLACK,
  repeat : new Cesium.Cartesian2(4, 4)
});
```

![5-3](/webgl/cesium/5-3.jpg)

## StripeMaterialProperty–条纹纹理

属性说明如下：
- evenColor 默认白色，条纹的第一个颜色
- oddColor 默认黑色，第二个颜色
- repeat 条纹重复次数
- offset 偏移量
- orientation 水平或者垂直,默认水平

```js
ellipse.material = new Cesium.StripeMaterialProperty({
  evenColor : Cesium.Color.WHITE,
  oddColor : Cesium.Color.BLACK,
  repeat : 32,
  offset:20,
  orientation:Cesium.StripeOrientation.VERTICAL 
});
```

![5-4](/webgl/cesium/5-4.jpg)

## GridMaterialProperty–网格

属性说明如下：
- color 网格颜色
- cellAlpha 单元格透明度
- lineCount 行列个数
- lineThickness 线粗细
- lineOffset 线偏移

```js
ellipse.material = new Cesium.GridMaterialProperty({
  color : Cesium.Color.YELLOW,
  cellAlpha : 0.2,
  lineCount : new Cesium.Cartesian2(8, 8),
  lineThickness : new Cesium.Cartesian2(2.0, 2.0)
});
```

![5-5](/webgl/cesium/5-5.jpg)

### 下面两个纹理需要用到Polyline，先来添加一个Polyline

```js
var entity = viewer.entities.add({
    polyline : {
        positions : Cesium.Cartesian3.fromDegreesArray([-77, 35,
                                                        -77.1, 35]),
    width : 5,
    material : Cesium.Color.RED
}});
viewer.zoomTo(viewer.entities);
```

![5-6](/webgl/cesium/5-6.jpg)

### PolylineGlowMaterialProperty
属性说明如下：
- color 发光的颜色(中心颜色为白色)
- glowPower 发光的长度，值为线宽的百分比(0~1.0)

```js
polyline.material = new Cesium.PolylineGlowMaterialProperty({
    glowPower : 0.2,
    color : Cesium.Color.BLUE
});
```

![5-7](/webgl/cesium/5-7.jpg)

### PolylineOutlineMaterialProperty

属性说明如下：
- color 线的颜色
- outlineWidth 线纹理宽度
- outlineColor 线纹理颜色

```js
polyline.material = new Cesium.PolylineOutlineMaterialProperty({
    color : Cesium.Color.ORANGE,
    outlineWidth : 3,
    outlineColor : Cesium.Color.BLACK
});
```

![5-8](/webgl/cesium/5-8.jpg)