# Maven基础

## Maven简介

  <img :src="$withBase('/maven/1.png')" alt="foo">

### 是什么

  <img :src="$withBase('/maven/2.png')" alt="foo">

### 作用

  <img :src="$withBase('/maven/3.png')" alt="foo">

## 下载与安装

- [官网](http://maven.apache.org/)
- [下载地址](http://maven.apache.org/download.cgi)

  <img :src="$withBase('/maven/4.png')" alt="foo">
  <img :src="$withBase('/maven/4-1.png')" alt="foo">
  <img :src="$withBase('/maven/4-2.png')" alt="foo">
  <img :src="$withBase('/maven/4-3.png')" alt="foo">
  <img :src="$withBase('/maven/4-4.png')" alt="foo">

### 环境变量配置

  <img :src="$withBase('/maven/5.png')" alt="foo">
  <img :src="$withBase('/maven/5-1.png')" alt="foo">
  <img :src="$withBase('/maven/5-2.png')" alt="foo">
  <img :src="$withBase('/maven/5-3.png')" alt="foo">
  <img :src="$withBase('/maven/5-4.png')" alt="foo">

## Maven基础概念

### 仓库

  <img :src="$withBase('/maven/6.png')" alt="foo">
  <img :src="$withBase('/maven/6-1.png')" alt="foo">

### 坐标

  <img :src="$withBase('/maven/7.png')" alt="foo">
  <img :src="$withBase('/maven/7-1.png')" alt="foo">
  <img :src="$withBase('/maven/7-2.png')" alt="foo">

### 本地仓库配置

  <img :src="$withBase('/maven/8.png')" alt="foo">
  <img :src="$withBase('/maven/8-1.png')" alt="foo">

### 远程仓库的配置

  <img :src="$withBase('/maven/9.png')" alt="foo">
  <img :src="$withBase('/maven/9-1.png')" alt="foo">

  ```xml
    <mirror>
      <id>nexus-aliyun</id>
      <mirrorOf>central</mirrorOf>
      <name>Nexus aliyun</name>
      <url>http://maven.aliyun.com/nexus/content/groups/public</url>
    </mirror>
  ```

  <img :src="$withBase('/maven/10.png')" alt="foo">

## 手工制作Maven项目

### Maven工程目录结构

  <img :src="$withBase('/maven/11.png')" alt="foo">

```bash
  - mavenDir
    - src
      - main
        - java
          - com
            - base
              Demo.java
        - resources
      - test
        - java
          - com
            - base
              DemoTest.java
        - resources
    - pom.xml
```

### 构建命令

  <img :src="$withBase('/maven/12.png')" alt="foo">
  <img :src="$withBase('/maven/12-1.png')" alt="foo">

### 插件创建工程

  <img :src="$withBase('/maven/13.png')" alt="foo">
  <img :src="$withBase('/maven/13-1.png')" alt="foo">
  <img :src="$withBase('/maven/13-2.png')" alt="foo">

## IDEA生成Maven项目

  <img :src="$withBase('/maven/14.png')" alt="foo">

### 配置Maven

  <img :src="$withBase('/maven/15.png')" alt="foo">
  <img :src="$withBase('/maven/15-1.png')" alt="foo">

### 手工创建Java项目

  <img :src="$withBase('/maven/15-2.png')" alt="foo">
  <img :src="$withBase('/maven/15-3.png')" alt="foo">
  <img :src="$withBase('/maven/15-4.png')" alt="foo">
  <img :src="$withBase('/maven/15-5.png')" alt="foo">
  <img :src="$withBase('/maven/15-6.png')" alt="foo">
  <img :src="$withBase('/maven/15-7.png')" alt="foo">
  <img :src="$withBase('/maven/15-8.png')" alt="foo">

- 创建maven构建命令
  - <img :src="$withBase('/maven/15-9-1.png')" alt="foo">
  - <img :src="$withBase('/maven/15-9.png')" alt="foo">
  - <img :src="$withBase('/maven/15-9-2.png')" alt="foo">

### 原型创建Java项目

  <img :src="$withBase('/maven/16.png')" alt="foo">
  <img :src="$withBase('/maven/16-1.png')" alt="foo">
  <img :src="$withBase('/maven/16-2.png')" alt="foo">
  <img :src="$withBase('/maven/16-3.png')" alt="foo">

### 原型创建Web项目

  <img :src="$withBase('/maven/17.png')" alt="foo">

### 插件

  <img :src="$withBase('/maven/18-3.png')" alt="foo">

``` xml
  <!-- 构建 -->
  <build>
    <!-- 设置插件 -->
    <plugins>
      <!-- 具体的插件配置 -->
      <plugin>
        <!-- 插件坐标 -->
      <plugin>
    </plugins>
  <build>
```

  <img :src="$withBase('/maven/18.png')" alt="foo">
  <img :src="$withBase('/maven/18-1.png')" alt="foo">
  <img :src="$withBase('/maven/18-2.png')" alt="foo">

## 依赖管理

### 依赖配置

  <img :src="$withBase('/maven/19-1.png')" alt="foo">
  <img :src="$withBase('/maven/19.png')" alt="foo">

### 依赖传递

  <img :src="$withBase('/maven/20.png')" alt="foo">
  <img :src="$withBase('/maven/20-2.png')" alt="foo">
  <img :src="$withBase('/maven/20-1.png')" alt="foo">
  <img :src="$withBase('/maven/20-3.png')" alt="foo">

### 可选依赖

排除不要的直接依赖

  <img :src="$withBase('/maven/21.png')" alt="foo">

### 排除依赖

排除不要的间接依赖

  <img :src="$withBase('/maven/22.png')" alt="foo">

### 依赖范围

  <img :src="$withBase('/maven/23.png')" alt="foo">

#### 依赖范围传递性

  <img :src="$withBase('/maven/23-1.png')" alt="foo">

## 生命周期与插件

### 构建生命周期

  <img :src="$withBase('/maven/24.png')" alt="foo">
  <img :src="$withBase('/maven/24-1.png')" alt="foo">
  <img :src="$withBase('/maven/24-2.png')" alt="foo">
  <img :src="$withBase('/maven/24-3.png')" alt="foo">
  <img :src="$withBase('/maven/24-4.png')" alt="foo">

### 插件

  <img :src="$withBase('/maven/25.png')" alt="foo">
  <img :src="$withBase('/maven/25-1.png')" alt="foo">
