# Mysql-事务

## 简介

 <img :src="$withBase('/mysql/sqlSw01.png')" alt="foo">

## 事务操作

 <img :src="$withBase('/mysql/sqlSw02.png')" alt="foo">
 <img :src="$withBase('/mysql/sqlSw03.png')" alt="foo">

## 事务四大特性

 <img :src="$withBase('/mysql/sqlSw04.png')" alt="foo">

## 并发事务引发的问题

 <img :src="$withBase('/mysql/sqlSw05.png')" alt="foo">
 <img :src="$withBase('/mysql/sqlSw06.png')" alt="foo">
 <img :src="$withBase('/mysql/sqlSw07.png')" alt="foo">

### 脏读

开启事务后，a事务更改数据但是未提交，这时b事务读取了a未提交的sql，就为脏读。

### 不可重复读

开启事务后，a事务更改数据后未提交，b事务读取了sql，a事务更改数据后提交，b事务读取了sql，前后两次不一样，为不可重复读，
开启不可重复读后，a提交事务改变sql，b必须也提交事务才能看到改变的sql

### 幻读

如图说明，开启幻读：a开启事务后未提交，b事务需要等a事务提交后才能执行

## 事务隔离级别

一般采取数据库的默认隔离级别

 <img :src="$withBase('/mysql/sqlSw08.png')" alt="foo">

## 总结

 <img :src="$withBase('/mysql/sqlSw09.png')" alt="foo">
