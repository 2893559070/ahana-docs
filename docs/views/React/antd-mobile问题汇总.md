# antd-mobile 问题汇总

- Carousel 轮播图
  - 高度自适应问题导致 索引切换按钮 位置变动
    - 解决：.slider .slider-frame 设置固定高度
  - 数据加载后 图片不自动切换
    - 原因：因为 轮播图组件一开始将数据动态加载 数组为空时无法获取值 所以图片不自动切换
    - 解决：初始化时 手动添加假数据 或者 判断轮播图有数据时在加载
