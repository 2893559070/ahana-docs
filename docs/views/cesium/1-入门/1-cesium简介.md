# 1-cesium简介

## 什么是cesium
Cesium 是一个跨平台、跨浏览器的展示三维地球和地图的 javascript 库。

Cesium 使用WebGL 来进行硬件加速图形，使用时不需要任何插件支持，但是浏览器必须支持WebGL;

Cesium是基于Apache2.0 许可的开源程序。它可以免费的用于商业和非商业用途。

[Cesium官方网站](https://cesium.com/platform/cesiumjs/)

## cesium可以做什么

支持2D,2.5D,3D 形式的地图展示，
可以绘制各种几何图形、高亮区域，支持导入图片，甚至3D模型等多种数据可视化展示
可用于动态数据可视化并提供良好的触摸支持，支持绝大多数的浏览器和mobile。
Cesium还支持基于时间轴的动态数据展示

## 获取cesium代码

[cesium1.93](https://github.com/CesiumGS/cesium/releases/tag/1.93)

### 安装启动项目
```bash
npm intsall

npm run server
```

### 如何使用

- Documentation
    里面是Cesium的完整的API说明，里面可以找到：
    - 某一个模块的所有函数，属性
    - 部分效果截图
    - 部分函数，属性调用代码示例

- Sandcastle
    测试沙盒
    - 浏览当前版本的一些功能特性
    - 一个可运行的代码库
    - 新建一个页面，进行代码测试
    - 导出测试代码
    - 。。。

### 学习方式

1. 先浏览一遍沙盒里的所有示例，Cesium能做什么，做成什么样
2. 做需要的功能时，查找到相关示例代码
3. 如果是深入研究的话，就需要有对WebGL有更深层次的了解
