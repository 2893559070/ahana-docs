# 4-cesium3DTiles

## 3D Tiles 是什么

3DTiles数据集是cesium小组AnalyticlGraphics与2016年3月定义的一种数据集，3DTiles数据集以分块、分级渲染，将大数据量三维数据以分块，分层的形式组织起来，可以大量减轻浏览器和GPU的负担是一个优秀的，并且格式公开的数据格式。

3D Tiles将用于流式传输3D内容，包括建筑物，树木，点云和矢量数据。

[官网 3dtiles 介绍](https://cesium.com/blog/2015/08/10/introducing-3d-tiles/)

## 3D Tiles
3D Tiles将用于流式传输3D内容，包括建筑物，树木，点云和矢量数据。

contextCapture 可以将无人机成果转换成Cesium支持的倾斜摄影成果，当前例子就是使用的这种成果。
```js
var tileset = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: url, //数据路径
    maximumScreenSpaceError: 2, //最大的屏幕空间误差
    maximumNumberOfLoadedTiles: 1000, //最大加载瓦片个数
    modelMatrix: m //形状矩阵
}));
```

但是问题在于生成的数据不一定是落在地面上，有可能是浮在空中的，例如：

![3DTiles-4-13](/webgl/cesium/4-13.jpg)

这并不是我们想要的,我们希望拍摄的成果能贴到地面上，和地图能很好的融合在一起，类似这样

![3DTiles-4-14](/webgl/cesium/4-14.jpg)

由于单个瓦片的位置信息是写到了数据中的(.b3dm和对应的json文件中),如果能整体调整加载后的tileset，就会是最好的选择，这里就要提到本文的主角：

### modelMatrix
Cesium3DTile里面有一个属性，可以更改位置

transform : Matrix4 Scene/Cesium3DTile.js 88
The local transform of this tile

说明通过矩阵运算是可以调整整个数据的显示位置的

以下说明矩阵平移的情况：

### 自己获取偏移量
参考《WebGl编程指南》的第三章第四章

![3DTiles-4-15](/webgl/cesium/4-15.jpg)

Tx,Ty,Tz就是我们需要设置的 x,y,z方向上的平移距离由于Cesium的矩阵是列主序的，所以这里写成

```js
//创建平移矩阵方法一
// m = Cesium.Matrix4.fromArray([
// 1.0, 0.0, 0.0, 0.0,
// 0.0, 1.0, 0.0, 0.0,
// 0.0, 0.0, 1.0, 0.0,
// x, y, z, 1.0
// ]);

//创建平移矩阵方法二
var translation=Cesium.Cartesian3.fromArray([x, y, z]);
m= Cesium.Matrix4.fromTranslation(translation);

//生效
tileset._modelMatrix = m;
```

这里我们只需要不断的修改 x,y,z，就可以调整物体的位置了

获取 x,y,z 之后,在加载3D Tiles 时将modelMatrix 设置成目标 x,y,z值，就完成了

![3DTiles-4-16](/webgl/cesium/4-16.jpg)

### 计算偏移量

[官方示例](https://cesiumjs.org/Cesium/Build/Apps/Sandcastle/index.html?src=3D{ac3c4da2cd0600a7fb5dd7ece3d30a0eed29da11cf2830143610191d982c65a1}20Tiles{ac3c4da2cd0600a7fb5dd7ece3d30a0eed29da11cf2830143610191d982c65a1}20Adjust{ac3c4da2cd0600a7fb5dd7ece3d30a0eed29da11cf2830143610191d982c65a1}20Height.html&label=3D{ac3c4da2cd0600a7fb5dd7ece3d30a0eed29da11cf2830143610191d982c65a1}20Tiles)

一步到位

```js
//方法二，直接调用函数，调整高度,height表示物体离地面的高度
function changeHeight(height) {
    height = Number(height);
    if (isNaN(height)) {
        return;
    }
    var cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center);
    var surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height);
    var offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude,height);
    var translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3());
    tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
}
```

## 模型旋转

1. 根据要旋转的角度，构建一个三阶旋转矩阵
2. 获取3D tiles 的旋转矩阵modelMatrix，然后与旋转矩阵运算
3. 最后将计算结果再赋值给modelMatrix，完成

```js
var m = tileset.modelMatrix;
//RotateX为旋转角度，转为弧度再参与运算
var m1 = Cesium.Matrix3.fromRotationX(Cesium.Math.toRadians(RotateX));

//矩阵计算
Cesium.Matrix4.multiplyByMatrix3(m,m1,m);

//赋值
tileset.modelMatrix = m;
```

```js
var tileset = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url : 'Tileset/tileset.json',
    modelMatrix:Cesium.Matrix4.IDENTITY 
}));

tileset.readyPromise.then(function() {
    var boundingSphere = tileset.boundingSphere;
    viewer.camera.viewBoundingSphere(boundingSphere, new Cesium.HeadingPitchRange(0.0, -0.5, boundingSphere.radius * 2));
    viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
}).otherwise(function(error) {
    throw(error);
});

var m = tileset.modelMatrix;

var anglex = 1;
function rotatex(){
    anglex += 1;
    let m1 = Cesium.Matrix3.fromRotationX(Cesium.Math.toRadians(anglex));   
    tileset.modelMatrix = Cesium.Matrix4.multiplyByMatrix3(m,m1,new Cesium.Matrix4());
}

var angley = 1;
function rotatey(){
    angley += 1;
    let m1 = Cesium.Matrix3.fromRotationY(Cesium.Math.toRadians(angley));   
    tileset.modelMatrix = Cesium.Matrix4.multiplyByMatrix3(m,m1,new Cesium.Matrix4());
}

var anglez = 1;
function rotatez(){
    anglez += 1;
    let m1 = Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(anglez));   
    tileset.modelMatrix = Cesium.Matrix4.multiplyByMatrix3(m,m1,new Cesium.Matrix4());
}
```

![3DTiles-4-17](/webgl/cesium/4-17.gif)