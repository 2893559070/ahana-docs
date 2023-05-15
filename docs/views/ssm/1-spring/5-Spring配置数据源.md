# 5-Spring配置数据源

## 5-1 数据源（连接池）的作用

  <img :src="$withBase('/ssm/spring/15.png')" alt="foo">

## 5-2 数据源的开发步骤

### 1. 导入数据源的坐标和数据库驱动坐标

  <img :src="$withBase('/ssm/spring/15-1.png')" alt="foo">

### 2. 使用数据源

- 创建数据源的对象
- 设置数据源的基本连接数据
- 使用数据源获取连接资源和归还连接资源

  - c3p0
    <img :src="$withBase('/ssm/spring/15-2.png')" alt="foo">

  - druid
    <img :src="$withBase('/ssm/spring/15-3.png')" alt="foo">

### 3. 加载配置文件

  <img :src="$withBase('/ssm/spring/15-4.png')" alt="foo">
  <img :src="$withBase('/ssm/spring/15-5.png')" alt="foo">

## 5-3 Spring配置数据源

可以将DateSource的创建权交由Spring容器去完成

### 导入坐标

  <img :src="$withBase('/ssm/spring/15-6.png')" alt="foo">

### 配置bean

  <img :src="$withBase('/ssm/spring/15-7.png')" alt="foo">

### 加载配置文件使用数据

  <img :src="$withBase('/ssm/spring/15-8.png')" alt="foo">

## 5-4 抽取jdbc配置文件

  <img :src="$withBase('/ssm/spring/15-9.png')" alt="foo">
  <img :src="$withBase('/ssm/spring/15-11.png')" alt="foo">

### 知识要点
  <img :src="$withBase('/ssm/spring/15-10.png')" alt="foo">
