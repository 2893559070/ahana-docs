# 3-Spring配置文件

## 3-1 Bean标签使用范围

:::tip
    Bean 标签 id 不能重复
:::
  <img :src="$withBase('/ssm/spring/6.png')" alt="foo">
  <img :src="$withBase('/ssm/spring/6-1.png')" alt="foo">

## 3-2 Bean生命周期配置

  <img :src="$withBase('/ssm/spring/7.png')" alt="foo">
  xml中修改bean
  <img :src="$withBase('/ssm/spring/7-1.png')" alt="foo">

## 3-3 Bean实例化的三种方式

### 无参构造方法实例化 （常用）

  <img :src="$withBase('/ssm/spring/8-2.png')" alt="foo">

### 工厂的静态方法实例化

  <img :src="$withBase('/ssm/spring/8.png')" alt="foo">
  <img :src="$withBase('/ssm/spring/8-1.png')" alt="foo">

### 工厂实例方法实例化

  <img :src="$withBase('/ssm/spring/8-3.png')" alt="foo">
  <img :src="$withBase('/ssm/spring/8-4.png')" alt="foo">

## 3-4 依赖注入

普通属性用value，引用对象属性用ref

### 概念

  <img :src="$withBase('/ssm/spring/9.png')" alt="foo">
  <img :src="$withBase('/ssm/spring/9-1.png')" alt="foo">

### 注入方式

#### 构造方法注入

  <img :src="$withBase('/ssm/spring/9-4.png')" alt="foo">

#### set方法注入

  <img :src="$withBase('/ssm/spring/9-2.png')" alt="foo">
  <img :src="$withBase('/ssm/spring/9-3.png')" alt="foo">

## 3-5 依赖注入的数据类型

  <img :src="$withBase('/ssm/spring/10.png')" alt="foo">

### 普通数据类型

  <img :src="$withBase('/ssm/spring/10-1.png')" alt="foo">

### 引用数据类型

  <img :src="$withBase('/ssm/spring/9-3.png')" alt="foo">

### 集合数据类型

  <img :src="$withBase('/ssm/spring/10-2-1.png')" alt="foo">
  <img :src="$withBase('/ssm/spring/10-2.png')" alt="foo">
  <img :src="$withBase('/ssm/spring/10-3.png')" alt="foo">

## 3-6 引入其他配置文件（分模块开发）

  <img :src="$withBase('/ssm/spring/11.png')" alt="foo">

:::tip
  Spring的重点配置
:::
  <img :src="$withBase('/ssm/spring/12.png')" alt="foo">
