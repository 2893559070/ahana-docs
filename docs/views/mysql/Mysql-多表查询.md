# Mysql-多表查询

## 多表关系

### 一对多

  <img :src="$withBase('/mysql/sqlJoin01.png')" alt="foo">

### 多对多

  <img :src="$withBase('/mysql/sqlJoin02.png')" alt="foo">
  
### 一对一

  <img :src="$withBase('/mysql/sqlJoin03.png')" alt="foo">

## 多表查询概述

### 笛卡尔积

 <img :src="$withBase('/mysql/sqlJoin04.png')" alt="foo">

### 多表查询分类

 <img :src="$withBase('/mysql/sqlJoin05.png')" alt="foo">

## 内连接

 <img :src="$withBase('/mysql/sqlJoin06.png')" alt="foo">

### 隐式内连接

 <img :src="$withBase('/mysql/sqlJoin06-1.png')" alt="foo">

### 显示内连接

 <img :src="$withBase('/mysql/sqlJoin06-2.png')" alt="foo">

## 外连接

 <img :src="$withBase('/mysql/sqlJoin07.png')" alt="foo">

### 左外连接 （常用）

 <img :src="$withBase('/mysql/sqlJoin07-1.png')" alt="foo">

### 右外连接

 <img :src="$withBase('/mysql/sqlJoin07-2.png')" alt="foo">

## 自连接

 <img :src="$withBase('/mysql/sqlJoin08.png')" alt="foo">
 <img :src="$withBase('/mysql/sqlJoin08-1.png')" alt="foo">

## 联合查询

 <img :src="$withBase('/mysql/sqlJoin09.png')" alt="foo">

### union all

查询的结果集合并 不去重
 <img :src="$withBase('/mysql/sqlJoin09-1.png')" alt="foo">

### union

查询的结果集合并 去重
 <img :src="$withBase('/mysql/sqlJoin09-2.png')" alt="foo">

## 子查询

 <img :src="$withBase('/mysql/sqlJoin10.png')" alt="foo">

### 标量子查询

子查询的返回结果只有一个
 <img :src="$withBase('/mysql/sqlJoin10-1.png')" alt="foo">
 <img :src="$withBase('/mysql/sqlJoin10-2.png')" alt="foo">

### 列子查询

子查询的返回结果有多个
 <img :src="$withBase('/mysql/sqlJoin10-3.png')" alt="foo">
 <img :src="$withBase('/mysql/sqlJoin10-4.png')" alt="foo">
 <img :src="$withBase('/mysql/sqlJoin10-5.png')" alt="foo">

### 行子查询

一行返回多个列
 <img :src="$withBase('/mysql/sqlJoin10-6.png')" alt="foo">
 <img :src="$withBase('/mysql/sqlJoin10-7.png')" alt="foo">

### 表子查询

多行多列，相当于新表
 <img :src="$withBase('/mysql/sqlJoin10-8.png')" alt="foo">
 <img :src="$withBase('/mysql/sqlJoin10-9.png')" alt="foo">
 <img :src="$withBase('/mysql/sqlJoin10-10.png')" alt="foo">

## 总结

 <img :src="$withBase('/mysql/sqlJoin11.png')" alt="foo">
