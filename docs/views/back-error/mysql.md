# mysql 错误汇总

## navcat正常，mybatis连接数据库失败

### 报错信息

Whitelabel Error Page
This application has no explicit mapping for /error, so you are seeing this as a fallback.

Fri Sep 09 20:49:13 CST 2022
There was an unexpected error (type=Internal Server Error, status=500).
nested exception is org.apache.ibatis.exceptions.PersistenceException: ### Error querying database. Cause: org.springframework.jdbc.CannotGetJdbcConnectionException: Failed to obtain JDBC Connection; nested exception is com.mysql.cj.jdbc.exceptions.CommunicationsException: Communications link failure The last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server. ### The error may exist in com/changgou/service/goods/dao/BrandMapper.java (best guess) ### The error may involve com.changgou.service.goods.dao.BrandMapper.selectAll ### The error occurred while executing a query ### Cause: org.springframework.jdbc.CannotGetJdbcConnectionException: Failed to obtain JDBC Connection; nested exception is com.mysql.cj.jdbc.exceptions.CommunicationsException: Communications link failure The last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.

### 解决方法

将 useSSL=false 或者改成 false

```yml
# 前
spring:
  datasource:
    driverClassName: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://192.168.200.128:3306/changgou_goods?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8
    username: root
    password: root
    #下面这两个配置，可以在每次连接的时候判断一些连接是否有效
    druid:
      test-on-borrow: true
      test-while-idle: true

# 后
spring:
  datasource:
    driverClassName: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://192.168.200.128:3306/changgou_goods?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8&useSSL=false
    username: root
    password: root
    #下面这两个配置，可以在每次连接的时候判断一些连接是否有效
    druid:
      test-on-borrow: true
      test-while-idle: true
```
