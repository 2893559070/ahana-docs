# Mybatis

## 核心配置文件
```xml
    <?xml version="1.0" encoding="UTF-8" ?>
    <!--MyBatis的DTD约束-->
    <!DOCTYPE configuration PUBLIC "-//mybatis.org//DTD Config 3.0//EN" "http://mybatis.org/dtd/mybatis-3-config.dtd">

    <!--configuration 核心根标签-->
    <configuration>

        <!--引入数据库连接的配置文件-->
        <properties resource="jdbc.properties"/>

          <!--起别名-->
        <typeAliases>
            <typeAlias type="com.itheima.bean.Student" alias="student"/>
            <!--<package name="com.itheima.bean"/>-->
        </typeAliase>

        <!--environments配置数据库环境，环境可以有多个。default属性指定使用的是哪个-->
        <environments default="mysql">
            <!--environment配置数据库环境  id属性唯一标识-->
            <environment id="mysql">
                <!-- transactionManager事务管理。  type属性，采用JDBC默认的事务-->
                <transactionManager type="JDBC"></transactionManager>
                <!-- dataSource数据源信息   type属性 连接池-->
                <dataSource type="POOLED">
                    <!-- property获取数据库连接的配置信息 -->
                    <!-- <property name="driver" value="com.mysql.jdbc.Driver" /> -->
                    <!--引入数据库连接的配置文件 方法-->
                    <property name="driver" value="${driver}" />
                    <property name="url" value="jdbc:mysql:///db1" />
                    <property name="username" value="root" />
                    <property name="password" value="root" />
                </dataSource>
            </environment>
        </environments>

        <!-- mappers引入映射配置文件 -->
        <mappers>
            <!-- mapper 引入指定的映射配置文件   resource属性指定映射配置文件的名称 -->
            <mapper resource="StudentMapper.xml"/>
        </mappers>
    </configuration>
```
<img :src="$withBase('/java/mybatis配置文件.png')" alt="foo">


## Mybatis传统方式开发

## 接口代理
- 实现规则
    1. 映射配置文件中的名称空间必须和 Dao 层接口的全类名相同。
    2. 映射配置文件中的增删改查标签的 id 属性必须和 Dao 层接口的方法名相同。
    3. 映射配置文件中的增删改查标签的 parameterType 属性必须和 Dao 层接口方法的参数相同。
    4. 映射配置文件中的增删改查标签的 resultType 属性必须和 Dao 层接口方法的返回值相同。
    5. 获取动态代理对象 SqlSession 功能类中的 getMapper() 方法。