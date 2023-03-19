# SpringMvc

## SSM整合 Spring + mybatis
### 文件层级
```bash
    - src
        - main
            - java
                - com.ssm
                    - controller
                        - UserController
                    - dao
                        - UserDao
                    - domain
                        - User
                    - service
                        - impl
                            - UserServiceImpl
                        - UserService
            - resources
                - com.spring.dao
                    - UserDao.xml
                - applicationContext.xml
                - jdbc.properties
            - webapp
                - WEB-INF
                    web.xml
        - test
            - java
                - com.ssm.service
                    - UserServiceTest
        - resources
            - applicationContext.xml
            - jdbc.properties   
    - pom.xml
```
- src
    - main
        - java
            - com.ssm
                - controller
                    - UserController
                        ```java
                            package com.ssm.controller;

                            // 表现层
                            public class UserController {
                            }
                        ```
                - dao
                    - UserDao
                        ```java
                            package com.ssm.dao;

                            import com.ssm.domain.User;
                            import org.apache.ibatis.annotations.Param;

                            import java.util.List;

                            // 数据层
                            public interface UserDao {

                                // 增
                                boolean save(User user);
                                // 改
                                boolean update(User user);
                                // 删
                                boolean delete(int uuid);
                                // 查
                                User get(int uuid);
                                List<User> getAll();
                                // 登录
                                User getByUserNameAndPassWord(@Param("userName") String userName, @Param("passWord")String passWord);
                            }
                        ```
                - domain
                    - User
                        ```java
                            package com.ssm.domain;

                            import java.io.Serializable;
                            import java.util.Date;

                            // 实体类
                            public class User implements Serializable {
                                private int uuid;
                                private String userName;
                                private String passWord;
                                private String realName;
                                private Integer gender;
                                private Date birthday;

                                public int getUuid() {
                                    return uuid;
                                }

                                public void setUuid(int uuid) {
                                    this.uuid = uuid;
                                }

                                public String getUserName() {
                                    return userName;
                                }

                                public void setUserName(String userName) {
                                    this.userName = userName;
                                }

                                public String getPassWord() {
                                    return passWord;
                                }

                                public void setPassWord(String passWord) {
                                    this.passWord = passWord;
                                }

                                public String getRealName() {
                                    return realName;
                                }

                                public void setRealName(String realName) {
                                    this.realName = realName;
                                }

                                public Integer getGender() {
                                    return gender;
                                }

                                public void setGender(Integer gender) {
                                    this.gender = gender;
                                }

                                public Date getBirthday() {
                                    return birthday;
                                }

                                public void setBirthday(Date birthday) {
                                    this.birthday = birthday;
                                }

                                @Override
                                public String toString() {
                                    return "User{" +
                                            "uuid=" + uuid +
                                            ", userName='" + userName + '\'' +
                                            ", passWord='" + passWord + '\'' +
                                            ", realName='" + realName + '\'' +
                                            ", gender=" + gender +
                                            ", birthday=" + birthday +
                                            '}';
                                }
                            }
                        ```
                - service
                    - impl
                        - UserServiceImpl
                            ```java
                                package com.ssm.service.impl;

                                import com.github.pagehelper.PageHelper;
                                import com.github.pagehelper.PageInfo;
                                import com.ssm.dao.UserDao;
                                import com.ssm.domain.User;
                                import com.ssm.service.UserService;
                                import org.springframework.beans.factory.annotation.Autowired;
                                import org.springframework.stereotype.Service;

                                import java.util.List;

                                @Service
                                public class UserServiceImpl implements UserService {

                                    // 注入接口 开启自动装配
                                    @Autowired
                                    private UserDao userDao;

                                    public boolean save(User user) {
                                        return userDao.save(user);
                                    }

                                    public boolean update(User user) {
                                        return userDao.update(user);
                                    }

                                    public boolean delete(int uuid) {
                                        return userDao.delete(uuid);
                                    }

                                    public User get(int uuid) {
                                        return userDao.get(uuid);
                                    }

                                    public PageInfo<User> getAll(int page, int size) {
                                        PageHelper.startPage(page, size);
                                        List<User> all = userDao.getAll();
                                        return new PageInfo<User>(all);
                                    }

                                    public User login(String userName, String passWord) {
                                        return userDao.getByUserNameAndPassWord(userName, passWord);
                                    }
                                }
                            ```
                    - UserService
                        ```java
                            package com.ssm.service;

                            import com.github.pagehelper.PageInfo;
                            import com.ssm.domain.User;
                            import org.springframework.transaction.annotation.Transactional;

                            // 业务层
                            @Transactional(readOnly = true) // 开启只读事务
                            public interface UserService {

                                // 增
                                @Transactional(readOnly = false)
                                boolean save(User user);
                                // 改
                                @Transactional(readOnly = false)
                                boolean update(User user);
                                // 删
                                @Transactional(readOnly = false)
                                boolean delete(int uuid);
                                // 查
                                User get(int uuid);
                                PageInfo<User> getAll(int page, int size);
                                // 登录
                                User login(String userName, String passWord);
                            }
                        ```
        - resources
            - com.spring.dao
                - UserDao.xml
                    ```xml
                        <?xml version="1.0" encoding="UTF-8"?>
                                <!DOCTYPE mapper
                                        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
                                        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
                        <mapper namespace="com.ssm.dao.UserDao">
                            <!--增-->
                            <insert id="save" parameterType="com.ssm.domain.User">
                                insert into
                                user
                                    (
                                    uuid,
                                    userName,
                                    passWord,
                                    realName,
                                    gender,
                                    birthday)
                                values
                                    (
                                        #{uuid},
                                        #{userName},
                                        #{passWord},
                                        #{realName},
                                        #{gender},
                                        #{birthday}
                                                )
                            </insert>

                            <!--改-->
                            <update id="update" parameterType="com.ssm.domain.User">
                                update user set
                                    userName = #{userName},
                                    passWord = #{passWord},
                                    realName = #{realName},
                                    gender = #{gender},
                                    birthday = #{birthday}
                                where uuid = #{uuid}
                            </update>

                            <!--删-->
                            <delete id="delete" parameterType="int">
                                delete from user where uuid = #{uuid}
                            </delete>

                            <!--查单个-->
                            <select id="get" resultType="com.ssm.domain.User" parameterType="int">
                                select * from user where uuid = #{uuid}
                            </select>

                            <!--查全部-->
                            <select id="getAll" resultType="com.ssm.domain.User">
                                select * from user
                            </select>

                            <!--登录-->
                            <select id="getByUserNameAndPassWord" resultType="com.ssm.domain.User">
                                select * from user where userName = #{userName} and passWord = #{passWord}
                            </select>
                        </mapper>
                    ```
            - applicationContext.xml
                ```xml
                    <?xml version="1.0" encoding="UTF-8"?>
                    <beans xmlns="http://www.springframework.org/schema/beans"
                        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                        xmlns:context="http://www.springframework.org/schema/context"
                        xmlns:tx="http://www.springframework.org/schema/tx"
                        xsi:schemaLocation="http://www.springframework.org/schema/beans
                            http://www.springframework.org/schema/beans/spring-beans.xsd
                            http://www.springframework.org/schema/context
                            https://www.springframework.org/schema/context/spring-context.xsd
                            http://www.springframework.org/schema/tx
                            https://www.springframework.org/schema/tx/spring-tx.xsd">

                        <!--读取com.mvc下所标记的bean-->
                        <context:component-scan base-package="com.ssm" annotation-config="true" />

                        <!--开启注解事务驱动-->
                        <tx:annotation-driven transaction-manager="txManager"/>

                        <!--spring整合mybatis-->
                        <bean class="org.mybatis.spring.SqlSessionFactoryBean">
                            <property name="dataSource" ref="dataSource"/>
                            <property name="typeAliasesPackage" value="com.ssm.domain"/>
                            <!--分页插件-->
                            <property name="plugins">
                                <array>
                                    <bean class="com.github.pagehelper.PageInterceptor">
                                        <property name="properties">
                                            <props>
                                                <prop key="helperDialect">mysql</prop>
                                                <prop key="reasonable">true</prop>
                                            </props>
                                        </property>
                                    </bean>
                                </array>
                            </property>
                        </bean>
                        <context:property-placeholder location="classpath*:jdbc.properties"/>
                        <bean id="dataSource" class="com.alibaba.druid.pool.DruidDataSource">
                            <property name="driverClassName" value="${jdbc.driver}"/>
                            <property name="url" value="${jdbc.url}"/>
                            <property name="username" value="${jdbc.username}"/>
                            <property name="password" value="${jdbc.password}"/>
                        </bean>
                        
                        <!--指定接口-->
                        <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
                            <property name="basePackage" value="com.ssm.dao"/>
                        </bean>

                        <!--事务管理器-->
                        <bean id="txManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
                            <property name="dataSource" ref="dataSource"/>
                        </bean>
                    </beans>
                ```
            - jdbc.properties
                ```java
                    jdbc.driver=com.mysql.jdbc.Driver
                    jdbc.url=jdbc:mysql://localhost:3306/ssm_db?useUnicode=true&characterEncoding=utf-8&useSSL=false&serverTimezone=GMT
                    jdbc.username=root
                    jdbc.password=gzh***
                ```
        - webapp
            - WEB-INF
                web.xml
                    ```xml
                        <?xml version="1.0" encoding="UTF-8"?>
                        <web-app version="2.4"
                                xmlns="http://java.sun.com/xml/ns/j2ee"
                                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                                xsi:schemaLocation="http://java.sun.com/xml/ns/j2ee http://java.sun.com/xml/ns/j2ee/web-app_2_4.xsd">
                        </web-app>
                    ```
    - test
        - java
            - com.ssm.service
                - UserServiceTest
    - resources
        - applicationContext.xml
            配置测试环境的applicationContext
        - jdbc.properties
            配置测试环境的jdbc连接
- pom.xml
    ```xml
        <?xml version="1.0" encoding="UTF-8"?>
            <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">

                <modelVersion>4.0.0</modelVersion>
                <packaging>war</packaging>

                <name>SSM整合</name>
                <groupId>org.example</groupId>
                <!-- artifactId 一定要是中文 不然编译不通过 -->
                <artifactId>SSMIntegration</artifactId>
                <version>1.0-SNAPSHOT</version>

                <dependencies>
                    <!--spring环境-->
                    <dependency>
                    <groupId>org.springframework</groupId>
                    <artifactId>spring-context</artifactId>
                    <version>5.1.9.RELEASE</version>
                    </dependency>

                    <!--mybatis环境-->
                    <dependency>
                    <groupId>org.mybatis</groupId>
                    <artifactId>mybatis</artifactId>
                    <version>3.5.3</version>
                    </dependency>
                    <dependency>
                    <groupId>mysql</groupId>
                    <artifactId>mysql-connector-java</artifactId>
                    <version>5.1.47</version>
                    </dependency>

                    <!--spring整合jdbc-->
                    <dependency>
                    <groupId>org.springframework</groupId>
                    <artifactId>spring-jdbc</artifactId>
                    <version>5.1.9.RELEASE</version>
                    </dependency>

                    <!--spring整合mybatis-->
                    <dependency>
                    <groupId>org.mybatis</groupId>
                    <artifactId>mybatis-spring</artifactId>
                    <version>2.0.3</version>
                    </dependency>

                    <!--druid连接池-->
                    <dependency>
                    <groupId>com.alibaba</groupId>
                    <artifactId>druid</artifactId>
                    <version>1.1.16</version>
                    </dependency>

                    <!--分页插件坐标-->
                    <dependency>
                    <groupId>com.github.pagehelper</groupId>
                    <artifactId>pagehelper</artifactId>
                    <version>5.1.2</version>
                    </dependency>

                    <!--springmvc环境-->
                    <dependency>
                    <groupId>org.springframework</groupId>
                    <artifactId>spring-webmvc</artifactId>
                    <version>5.1.9.RELEASE</version>
                    </dependency>

                    <!--jackson相关坐标3个-->
                    <dependency>
                    <groupId>com.fasterxml.jackson.core</groupId>
                    <artifactId>jackson-databind</artifactId>
                    <version>2.9.0</version>
                    </dependency>
                    <dependency>
                    <groupId>com.fasterxml.jackson.core</groupId>
                    <artifactId>jackson-core</artifactId>
                    <version>2.9.0</version>
                    </dependency>
                    <dependency>
                    <groupId>com.fasterxml.jackson.core</groupId>
                    <artifactId>jackson-annotations</artifactId>
                    <version>2.9.0</version>
                    </dependency>

                    <!--servlet环境-->
                    <dependency>
                    <groupId>javax.servlet</groupId>
                    <artifactId>javax.servlet-api</artifactId>
                    <version>3.1.0</version>
                    </dependency>

                    <!--junit单元测试-->
                    <dependency>
                    <groupId>junit</groupId>
                    <artifactId>junit</artifactId>
                    <version>4.12</version>
                    <scope>test</scope>
                    </dependency>

                    <!--spring整合junit-->
                    <dependency>
                    <groupId>org.springframework</groupId>
                    <artifactId>spring-test</artifactId>
                    <version>5.1.9.RELEASE</version>
                    </dependency>
                </dependencies>

                <!--构建-->
                <build>
                    <!--设置插件-->
                    <plugins>
                    <!--具体的插件配置-->
                    <plugin>
                        <groupId>org.apache.tomcat.maven</groupId>
                        <artifactId>tomcat7-maven-plugin</artifactId>
                        <version>2.1</version>
                        <configuration>
                        <port>80</port>
                        <path>/</path>
                        </configuration>
                    </plugin>
                    </plugins>
                </build>

            </project>
    ```

## SSM整合 SpringMVC
```bash
    - src
        - main
            - java
                - com.ssm
                    - controller
                        - interceptor
                            - ProjectExceptionAdivce
                        - results
                            - Code
                            - Result
                        - UserController
                    - dao
                        - UserDao
                    - domain
                        - User
                    - service
                        - impl
                            - UserServiceImpl
                        - UserService
                    - system.exception
                        - BusinessException
                        - SystemException
            - resources
                - com.spring.dao
                    - UserDao.xml
                - applicationContext.xml
                - jdbc.properties
            - webapp
                - WEB-INF
                    web.xml
        - test
            - java
                - com.ssm.service
                    - UserServiceTest
        - resources
            - applicationContext.xml
            - jdbc.properties   
    - pom.xml
```
- src
    - main
        - java
            - com.ssm
                - controller
                    - interceptor
                        - ProjectExceptionAdivce
                            ```java
                                package com.ssm.controller.interceptor;

                                import com.ssm.controller.results.Result;
                                import com.ssm.system.exception.BusinessException;
                                import org.springframework.stereotype.Component;
                                import org.springframework.web.bind.annotation.ControllerAdvice;
                                import org.springframework.web.bind.annotation.ExceptionHandler;
                                import org.springframework.web.bind.annotation.ResponseBody;

                                // 异常处理器
                                @Component
                                @ControllerAdvice
                                public class ProjectExceptionAdivce {

                                    // 处理 BusinessException 捕获的异常
                                    @ExceptionHandler(BusinessException.class)
                                    @ResponseBody
                                    public Result doBusinessException(BusinessException e) {
                                        System.out.println("捕获到了错误信息" + e.getMessage());
                                        // 返回给前端
                                        return new Result(e.getCode(), e.getMessage());
                                    }
                                }
                            ```
                    - results
                        - Code
                            ```java
                                package com.ssm.controller.results;

                                public class Code {
                                    // 操作结果编码
                                    public static final Integer SAVE_OK = 20011;
                                    public static final Integer UPDATED_OK = 20021;
                                    public static final Integer DELETE_OK = 20031;
                                    public static final Integer GET_OK = 20041;
                                    public static final Integer GETALL_OK = 20051;
                                    public static final Integer LOGIN_OK = 20061;

                                    public static final Integer SAVE_ERROR = 20010;
                                    public static final Integer UPDATED_ERROR = 20020;
                                    public static final Integer DELETE_ERROR = 20030;
                                    public static final Integer GET_ERROR = 20040;
                                    public static final Integer GETALL_ERROR = 20050;
                                    public static final Integer LOGIN_ERROR = 20060;
                                }
                            ```
                        - Result
                            ```java
                                package com.ssm.controller.results;

                                public class Result {
                                    // 操作结果编码
                                    private Integer code;
                                    // 操作数据结果
                                    private Object data;
                                    // 消息
                                    private String message;

                                    public Result(Integer code) {
                                        this.code = code;
                                    }

                                    public Result(Integer code, Object data) {
                                        this.code = code;
                                        this.data = data;
                                    }

                                    public Result(Integer code, Object data, String message) {
                                        this.code = code;
                                        this.data = data;
                                        this.message = message;
                                    }

                                    public Result(Integer code, String message) {
                                        this.code = code;
                                        this.message = message;
                                    }

                                    public Integer getCode() {
                                        return code;
                                    }

                                    public void setCode(Integer code) {
                                        this.code = code;
                                    }

                                    public Object getData() {
                                        return data;
                                    }

                                    public void setData(Object data) {
                                        this.data = data;
                                    }

                                    public String getMessage() {
                                        return message;
                                    }

                                    public void setMessage(String message) {
                                        this.message = message;
                                    }
                                }
                            ```
                    - UserController
                        ```java
                            package com.ssm.controller;

                            import com.github.pagehelper.PageInfo;
                            import com.ssm.controller.results.Code;
                            import com.ssm.controller.results.Result;
                            import com.ssm.domain.User;
                            import com.ssm.service.UserService;
                            import com.ssm.system.exception.BusinessException;
                            import org.springframework.beans.factory.annotation.Autowired;
                            import org.springframework.web.bind.annotation.*;

                            // 表现层
                            @RestController
                            @RequestMapping("/user")
                            public class UserController {

                                // 注入业务接口
                                @Autowired
                                private UserService userService;

                                // 增
                                @PostMapping
                                public Result save(User user) {
                                    System.out.println("save ..." + user);
                                    boolean falg = userService.save(user);
                                    if(!falg) {
                                        throw new BusinessException("添加失败, 请重试", Code.SAVE_ERROR);
                                    }
                                    return new Result(falg ? Code.SAVE_OK : Code.SAVE_ERROR, falg ? "添加成功" : "添加失败");
                                }

                                // 改
                                @PutMapping
                                public Result update(User user) {
                                    System.out.println("update ..." + user);
                                    boolean falg = userService.update(user);
                                    if(!falg) {
                                        throw new BusinessException("修改失败, 请重试", Code.UPDATED_ERROR);
                                    }
                                    return new Result(falg ? Code.UPDATED_OK : Code.UPDATED_ERROR, falg ? "修改成功" : "修改失败");
                                }

                                // 查单个
                                @GetMapping("/{uuid}")
                                public Result get(@PathVariable Integer uuid) {
                                    System.out.println("get ..." + uuid);
                                    User user = userService.get(uuid);
                                    if(null == user) {
                                        throw new BusinessException("查询失败, 请重试", Code.GET_ERROR);
                                    }
                                    return new Result(null != user ? Code.GET_OK : Code.GET_ERROR, user, null != user ? "查询成功" : "查询失败");
                                }

                                // 查分页
                                @GetMapping("/{page}/{size}")
                                public Result getAll(@PathVariable Integer page, @PathVariable Integer size) {
                                    System.out.println("getAll ..." + page + ", " + size);
                                    PageInfo<User> all = userService.getAll(page, size);
                                    if(null == all) {
                                        throw new BusinessException("查询失败, 请重试", Code.GETALL_ERROR);
                                    }
                                    return new Result(null != all ? Code.GETALL_OK : Code.GETALL_ERROR, all, null != all ? "查询成功" : "查询失败");
                                }

                                // 删
                                @DeleteMapping("/{uuid}")
                                public Result delete(@PathVariable Integer uuid) {
                                    System.out.println("delete ..." + uuid);
                                    boolean falg = userService.delete(uuid);
                                    if(!falg) {
                                        throw new BusinessException("删除失败, 请重试", Code.DELETE_ERROR);
                                    }
                                    return new Result(falg ? Code.DELETE_OK : Code.DELETE_ERROR, falg ? "删除成功" : "删除失败");
                                }

                                // 登录
                                @PostMapping("/login")
                                public Result login(String userName, String passWord) {
                                    System.out.println("login ..." + userName + ", " + passWord);
                                    User user = userService.login(userName, passWord);
                                    if(null == user) {
                                        throw new BusinessException("登录失败, 请重试", Code.LOGIN_ERROR);
                                    }
                                    return new Result(null != user ? Code.LOGIN_OK : Code.LOGIN_ERROR, user, null != user ? "登录成功" : "登录失败");
                                }

                            }
                        ```
                - dao
                    - UserDao
                        ```java
                            package com.ssm.dao;

                            import com.ssm.domain.User;
                            import org.apache.ibatis.annotations.Param;

                            import java.util.List;

                            // 数据层
                            public interface UserDao {

                                // 增
                                boolean save(User user);
                                // 改
                                boolean update(User user);
                                // 删
                                boolean delete(int uuid);
                                // 查
                                User get(int uuid);
                                List<User> getAll();
                                // 登录
                                User getByUserNameAndPassWord(@Param("userName") String userName, @Param("passWord")String passWord);
                            }
                        ```
                - domain
                    - User
                        ```java
                            package com.ssm.domain;

                            import java.io.Serializable;
                            import java.util.Date;

                            // 实体类
                            public class User implements Serializable {
                                private int uuid;
                                private String userName;
                                private String passWord;
                                private String realName;
                                private Integer gender;
                                private Date birthday;

                                public int getUuid() {
                                    return uuid;
                                }

                                public void setUuid(int uuid) {
                                    this.uuid = uuid;
                                }

                                public String getUserName() {
                                    return userName;
                                }

                                public void setUserName(String userName) {
                                    this.userName = userName;
                                }

                                public String getPassWord() {
                                    return passWord;
                                }

                                public void setPassWord(String passWord) {
                                    this.passWord = passWord;
                                }

                                public String getRealName() {
                                    return realName;
                                }

                                public void setRealName(String realName) {
                                    this.realName = realName;
                                }

                                public Integer getGender() {
                                    return gender;
                                }

                                public void setGender(Integer gender) {
                                    this.gender = gender;
                                }

                                public Date getBirthday() {
                                    return birthday;
                                }

                                public void setBirthday(Date birthday) {
                                    this.birthday = birthday;
                                }

                                @Override
                                public String toString() {
                                    return "User{" +
                                            "uuid=" + uuid +
                                            ", userName='" + userName + '\'' +
                                            ", passWord='" + passWord + '\'' +
                                            ", realName='" + realName + '\'' +
                                            ", gender=" + gender +
                                            ", birthday=" + birthday +
                                            '}';
                                }
                            }
                        ```
                - service
                    - impl
                        - UserServiceImpl
                            ```java
                                package com.ssm.service.impl;

                                import com.github.pagehelper.PageHelper;
                                import com.github.pagehelper.PageInfo;
                                import com.ssm.dao.UserDao;
                                import com.ssm.domain.User;
                                import com.ssm.service.UserService;
                                import org.springframework.beans.factory.annotation.Autowired;
                                import org.springframework.stereotype.Service;

                                import java.util.List;

                                @Service
                                public class UserServiceImpl implements UserService {

                                    // 注入接口 开启自动装配
                                    @Autowired
                                    private UserDao userDao;

                                    public boolean save(User user) {
                                        return userDao.save(user);
                                    }

                                    public boolean update(User user) {
                                        return userDao.update(user);
                                    }

                                    public boolean delete(int uuid) {
                                        return userDao.delete(uuid);
                                    }

                                    public User get(int uuid) {
                                        return userDao.get(uuid);
                                    }

                                    public PageInfo<User> getAll(int page, int size) {
                                        PageHelper.startPage(page, size);
                                        List<User> all = userDao.getAll();
                                        return new PageInfo<User>(all);
                                    }

                                    public User login(String userName, String passWord) {
                                        return userDao.getByUserNameAndPassWord(userName, passWord);
                                    }
                                }
                            ```
                    - UserService
                        ```java
                            package com.ssm.service;

                            import com.github.pagehelper.PageInfo;
                            import com.ssm.domain.User;
                            import org.springframework.transaction.annotation.Transactional;

                            // 业务层
                            @Transactional(readOnly = true) // 开启只读事务
                            public interface UserService {

                                // 增
                                @Transactional(readOnly = false)
                                boolean save(User user);
                                // 改
                                @Transactional(readOnly = false)
                                boolean update(User user);
                                // 删
                                @Transactional(readOnly = false)
                                boolean delete(int uuid);
                                // 查
                                User get(int uuid);
                                PageInfo<User> getAll(int page, int size);
                                // 登录
                                User login(String userName, String passWord);
                            }
                        ```
                - system.exception
                    - BusinessException
                        ```java
                            package com.ssm.system.exception;

                            // 捕获业务错误
                            public class BusinessException extends RuntimeException {

                                private Integer code;

                                public Integer getCode() {
                                    return code;
                                }

                                public void setCode(Integer code) {
                                    this.code = code;
                                }

                                public BusinessException(Integer code) {
                                    super();
                                    this.code = code;
                                }

                                public BusinessException(String message, Integer code) {
                                    super(message);
                                    this.code = code;
                                }

                                public BusinessException(String message, Throwable cause, Integer code) {
                                    super(message, cause);
                                    this.code = code;
                                }

                                public BusinessException(Throwable cause, Integer code) {
                                    super(cause);
                                    this.code = code;
                                }

                                protected BusinessException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace, Integer code) {
                                    super(message, cause, enableSuppression, writableStackTrace);
                                    this.code = code;
                                }
                            }
                        ```
                    - SystemException
                        ```java
                            package com.ssm.system.exception;

                            // 捕获系统错误
                            public class SystemException extends RuntimeException {
                                public SystemException() {
                                    super();
                                }

                                public SystemException(String message) {
                                    super(message);
                                }

                                public SystemException(String message, Throwable cause) {
                                    super(message, cause);
                                }

                                public SystemException(Throwable cause) {
                                    super(cause);
                                }

                                protected SystemException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
                                    super(message, cause, enableSuppression, writableStackTrace);
                                }
                            }
                        ```
        - resources
            - com.spring.dao
                - UserDao.xml
                    ```xml
                        <?xml version="1.0" encoding="UTF-8"?>
                                <!DOCTYPE mapper
                                        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
                                        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
                        <mapper namespace="com.ssm.dao.UserDao">
                            <!--增-->
                            <insert id="save" parameterType="com.ssm.domain.User">
                                insert into
                                user
                                    (
                                    uuid,
                                    userName,
                                    passWord,
                                    realName,
                                    gender,
                                    birthday)
                                values
                                    (
                                        #{uuid},
                                        #{userName},
                                        #{passWord},
                                        #{realName},
                                        #{gender},
                                        #{birthday}
                                                )
                            </insert>

                            <!--改-->
                            <update id="update" parameterType="com.ssm.domain.User">
                                update user set
                                    userName = #{userName},
                                    passWord = #{passWord},
                                    realName = #{realName},
                                    gender = #{gender},
                                    birthday = #{birthday}
                                where uuid = #{uuid}
                            </update>

                            <!--删-->
                            <delete id="delete" parameterType="int">
                                delete from user where uuid = #{uuid}
                            </delete>

                            <!--查单个-->
                            <select id="get" resultType="com.ssm.domain.User" parameterType="int">
                                select * from user where uuid = #{uuid}
                            </select>

                            <!--查全部-->
                            <select id="getAll" resultType="com.ssm.domain.User">
                                select * from user
                            </select>

                            <!--登录-->
                            <select id="getByUserNameAndPassWord" resultType="com.ssm.domain.User">
                                select * from user where userName = #{userName} and passWord = #{passWord}
                            </select>
                        </mapper>
                    ```
            - applicationContext.xml
                ```xml
                    <?xml version="1.0" encoding="UTF-8"?>
                    <beans xmlns="http://www.springframework.org/schema/beans"
                        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                        xmlns:context="http://www.springframework.org/schema/context"
                        xmlns:tx="http://www.springframework.org/schema/tx"
                        xsi:schemaLocation="http://www.springframework.org/schema/beans
                            http://www.springframework.org/schema/beans/spring-beans.xsd
                            http://www.springframework.org/schema/context
                            https://www.springframework.org/schema/context/spring-context.xsd
                            http://www.springframework.org/schema/tx
                            https://www.springframework.org/schema/tx/spring-tx.xsd">

                        <!--读取com.mvc下所标记的bean-->
                        <context:component-scan base-package="com.ssm" annotation-config="true">
                            <!--让spring不加载Controller 由mvc处理-->
                            <context:exclude-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
                        </context:component-scan>

                        <!--开启注解事务驱动-->
                        <tx:annotation-driven transaction-manager="txManager"/>

                        <!--spring整合mybatis-->
                        <bean class="org.mybatis.spring.SqlSessionFactoryBean">
                            <property name="dataSource" ref="dataSource"/>
                            <property name="typeAliasesPackage" value="com.ssm.domain"/>
                            <!--分页插件-->
                            <property name="plugins">
                                <array>
                                    <bean class="com.github.pagehelper.PageInterceptor">
                                        <property name="properties">
                                            <props>
                                                <prop key="helperDialect">mysql</prop>
                                                <prop key="reasonable">true</prop>
                                            </props>
                                        </property>
                                    </bean>
                                </array>
                            </property>
                        </bean>
                        <context:property-placeholder location="classpath*:jdbc.properties"/>
                        <bean id="dataSource" class="com.alibaba.druid.pool.DruidDataSource">
                            <property name="driverClassName" value="${jdbc.driver}"/>
                            <property name="url" value="${jdbc.url}"/>
                            <property name="username" value="${jdbc.username}"/>
                            <property name="password" value="${jdbc.password}"/>
                        </bean>
                        
                        <!--指定接口-->
                        <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
                            <property name="basePackage" value="com.ssm.dao"/>
                        </bean>

                        <!--事务管理器-->
                        <bean id="txManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
                            <property name="dataSource" ref="dataSource"/>
                        </bean>
                    </beans>
                ```
            - spring-mvc.xml
                ```xml
                    <?xml version="1.0" encoding="UTF-8"?>
                    <beans xmlns="http://www.springframework.org/schema/beans"
                        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                        xmlns:context="http://www.springframework.org/schema/context"
                        xmlns:mvc="http://www.springframework.org/schema/mvc"
                        xsi:schemaLocation="http://www.springframework.org/schema/beans
                        http://www.springframework.org/schema/beans/spring-beans.xsd
                        http://www.springframework.org/schema/context
                        https://www.springframework.org/schema/context/spring-context.xsd
                        http://www.springframework.org/schema/mvc
                        https://www.springframework.org/schema/mvc/spring-mvc.xsd">

                        <!--配置springmvc-->
                        <mvc:annotation-driven/>
                        <!--查找使用构造型（stereotype）注解所标注的类，如@Component(组件)，@Service（服务），@Controller（控制器），@Repository（数据仓库）。-->
                        <context:component-scan base-package="com.ssm.controller"/>
                    </beans>
                ```
            - jdbc.properties
                ```java
                    jdbc.driver=com.mysql.jdbc.Driver
                    jdbc.url=jdbc:mysql://localhost:3306/ssm_db?useUnicode=true&characterEncoding=utf-8&useSSL=false&serverTimezone=GMT
                    jdbc.username=root
                    jdbc.password=gzh***
                ```
        - webapp
            - WEB-INF
                - web.xml
                    ```xml
                        <?xml version="1.0" encoding="UTF-8"?>
                        <web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                                xmlns="http://java.sun.com/xml/ns/javaee"
                                xsi:schemaLocation="http://java.sun.com/xml/ns/javaee
                            http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd"
                                version="3.0">

                            <!-- 启动服务器时，通过监听加载spring运行环境 注入到mvc中 -->
                            <context-param>
                                <param-name>contextConfigLocation</param-name>
                                <param-value>classpath*:applicationContext.xml</param-value>
                            </context-param>
                            <listener>
                                <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
                            </listener>

                            <!--处理中文乱码问题-->
                            <filter>
                                <filter-name>CharacterEncodingFilter</filter-name>
                                <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
                                <init-param>
                                <param-name>encoding</param-name>
                                <param-value>UTF-8</param-value>
                                </init-param>
                            </filter>
                            <filter-mapping>
                                <filter-name>CharacterEncodingFilter</filter-name>
                                <url-pattern>/*</url-pattern>
                            </filter-mapping>

                            <!--rest处理put请求-->
                            <filter>
                                <filter-name>HiddenHttpMethodFilter</filter-name>
                                <filter-class>org.springframework.web.filter.HiddenHttpMethodFilter</filter-class>
                            </filter>
                            <filter-mapping>
                                <filter-name>HiddenHttpMethodFilter</filter-name>
                                <servlet-name>DispatcherServlet</servlet-name>
                            </filter-mapping>

                            <!--拦截所有的请求-->
                            <servlet>
                                <servlet-name>DispatcherServlet</servlet-name>
                                <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
                                <!--加载配置文件-->
                                <init-param>
                                <param-name>contextConfigLocation</param-name>
                                <param-value>classpath:**/spring-mvc.xml</param-value>
                                </init-param>
                                <!--启动级别 1 表示服务器启动，这个项目也跟着启动-->
                                <load-on-startup>1</load-on-startup>
                            </servlet>
                            <servlet-mapping>
                                <servlet-name>DispatcherServlet</servlet-name>
                                <url-pattern>/</url-pattern>
                            </servlet-mapping>
                        </web-app>
                    ```
    - test
        测试环境同上
- pom.xml
    插件同上


## SSM整合 Spring + SpringMvc 纯注解
```bash
    - src
        - main
            - java
                - com.ssm
                    - config
                        - JdbcConfig
                        - MyBatisConfig
                        - ServletContainersInitConfig
                        - SpringConfig
                        - SpringMvcConfig
                    - controller
                        - interceptor
                            - ProjectExceptionAdivce
                        - results
                            - Code
                            - Result
                        - UserController
                    - dao
                        - UserDao
                    - domain
                        - User
                    - service
                        - impl
                            - UserServiceImpl
                        - UserService
                    - system.exception
                        - BusinessException
                        - SystemException
            - resources
                - jdbc.properties
            - webapp
                - WEB-INF
        - test
            切换成Postman
    - pom.xml
```
- src
    - main
        - java
            - com.ssm
                - controller
                    - config
                        - JdbcConfig
                            ```java
                                package com.ssm.config;

                                import com.alibaba.druid.pool.DruidDataSource;
                                import org.springframework.beans.factory.annotation.Value;
                                import org.springframework.context.annotation.Bean;

                                public class JdbcConfig {
                                    @Value("${jdbc.driver}")
                                    private String driver;

                                    @Value("${jdbc.url}")
                                    private String url;

                                    @Value("${jdbc.username}")
                                    private String username;

                                    @Value("${jdbc.password}")
                                    private String password;

                                    // 加载druid资源
                                    @Bean("dataSource")
                                    public DruidDataSource getDataSource() {
                                        DruidDataSource ds = new DruidDataSource();
                                        ds.setDriverClassName(driver);
                                        ds.setUrl(url);
                                        ds.setUsername(username);
                                        ds.setPassword(password);
                                        return ds;
                                    }
                                }
                            ```
                        - MyBatisConfig
                            ```java
                                package com.ssm.config;

                                import com.github.pagehelper.PageInterceptor;
                                import org.apache.ibatis.plugin.Interceptor;
                                import org.mybatis.spring.SqlSessionFactoryBean;
                                import org.mybatis.spring.mapper.MapperScannerConfigurer;
                                import org.springframework.beans.factory.annotation.Autowired;
                                import org.springframework.context.annotation.Bean;

                                import javax.sql.DataSource;
                                import java.util.Properties;

                                public class MyBatisConfig {
                                    // spring整合mybatis后控制的创建连接用的对象
                                    @Bean
                                    public SqlSessionFactoryBean getSqlSessionFactoryBean(@Autowired DataSource dataSource, @Autowired Interceptor interceptor) {
                                        SqlSessionFactoryBean sfb = new SqlSessionFactoryBean();
                                        sfb.setTypeAliasesPackage("com.ssm.domain");
                                        sfb.setDataSource(dataSource);
                                        sfb.setPlugins(interceptor);
                                        return sfb;
                                    }

                                    // 加载mybatis映射配置的扫描，将其作为spring的bean进行管理
                                    @Bean
                                    public MapperScannerConfigurer getScannerConfigurer() {
                                        MapperScannerConfigurer mmc = new MapperScannerConfigurer();
                                        mmc.setBasePackage("com.ssm.dao");
                                        return mmc;
                                    }

                                    // 分页
                                    @Bean("interceptor")
                                    public Interceptor getInterceptor() {
                                        Interceptor interceptor = new PageInterceptor();
                                        Properties properties = new Properties();
                                        properties.setProperty("helperDialect", "mysql");
                                        properties.setProperty("reasonable", "true");
                                        interceptor.setProperties(properties);
                                        return interceptor;
                                    }
                                }
                            ```
                        - ServletContainersInitConfig
                            ```java
                                package com.ssm.config;

                                import org.springframework.web.context.WebApplicationContext;
                                import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
                                import org.springframework.web.filter.CharacterEncodingFilter;
                                import org.springframework.web.filter.HiddenHttpMethodFilter;
                                import org.springframework.web.servlet.support.AbstractDispatcherServletInitializer;

                                import javax.servlet.*;
                                import java.util.EnumSet;

                                public class ServletContainersInitConfig extends AbstractDispatcherServletInitializer  {

                                    //创建Servlet容器时，使用注解的方式加载SPRINGMVC配置类中的信息，并加载成WEB专用的ApplicationContext对象
                                    //该对象放入了ServletContext范围，后期在整个WEB容器中可以随时获取调用
                                    @Override
                                    protected WebApplicationContext createServletApplicationContext() {
                                        AnnotationConfigWebApplicationContext ctx = new AnnotationConfigWebApplicationContext();
                                        ctx.register(SpringMvcConfig.class);
                                        return ctx;
                                    }

                                    //注解配置映射地址方式，服务于SpringMVC的核心控制器DispatcherServlet
                                    @Override
                                    protected String[] getServletMappings() {
                                        return new String[]{"/"};
                                    }

                                    // 启动服务器时，通过监听加载spring运行环境 注入到mvc中
                                    @Override
                                    protected WebApplicationContext createRootApplicationContext() {
                                        AnnotationConfigWebApplicationContext ctx = new AnnotationConfigWebApplicationContext();
                                        ctx.register(SpringConfig.class);
                                        return ctx;
                                    }

                                    // 乱码处理作为过滤器，在servlet容器启动时进行配置
                                    @Override
                                    public void onStartup(ServletContext servletContext) throws ServletException {
                                        // 一定要触发父类的onStartup不然请求会出现404
                                        super.onStartup(servletContext);
                                        CharacterEncodingFilter cef = new CharacterEncodingFilter();
                                        cef.setEncoding("UTF-8");
                                        FilterRegistration.Dynamic registration = servletContext.addFilter("characterEncodingFilter", cef);
                                        registration.addMappingForUrlPatterns(EnumSet.of(DispatcherType.REQUEST, DispatcherType.FORWARD, DispatcherType.INCLUDE), false, "/*");

                                    }
                                }
                            ```
                        - SpringConfig
                            ```java
                                package com.ssm.config;

                                import org.springframework.beans.factory.annotation.Autowired;
                                import org.springframework.context.annotation.*;
                                import org.springframework.jdbc.datasource.DataSourceTransactionManager;
                                import org.springframework.stereotype.Controller;
                                import org.springframework.transaction.annotation.EnableTransactionManagement;

                                import javax.sql.DataSource;

                                // 启动注解驱动，指定对应的的扫描路径，也就是资源所在的包
                                @Configuration
                                @ComponentScan(value = "com.ssm", excludeFilters =
                                    @ComponentScan.Filter(type = FilterType.ANNOTATION, classes = {Controller.class}))
                                // 加载perperties配置文件的信息
                                @PropertySource("classpath:jdbc.properties")
                                // 加载配置 字节码文件
                                @Import({MyBatisConfig.class, JdbcConfig.class})
                                // 开启注解式事务 bean名称 默认找 transactionManager
                                @EnableTransactionManagement
                                public class SpringConfig {
                                    // 事务管理器
                                    @Bean("transactionManager")
                                    public DataSourceTransactionManager txManager(@Autowired DataSource dataSource){
                                        DataSourceTransactionManager dtm = new DataSourceTransactionManager();
                                        dtm.setDataSource(dataSource);
                                        return dtm;
                                    }
                                }
                            ```
                        - SpringMvcConfig
                            ```java
                                package com.ssm.config;

                                import org.springframework.context.annotation.ComponentScan;
                                import org.springframework.context.annotation.Configuration;
                                import org.springframework.web.servlet.config.annotation.EnableWebMvc;

                                // <context:component-scan base-package="com.ssm.controller"/>
                                @Configuration
                                @ComponentScan("com.ssm.controller")
                                // <mvc:annotation-driven/> 相似 没有@EnableWebMvc强大
                                @EnableWebMvc
                                public class SpringMvcConfig {
                                }
                            ```
                    - interceptor
                        - ProjectExceptionAdivce
                            ```java
                                package com.ssm.controller.interceptor;

                                import com.ssm.controller.results.Result;
                                import com.ssm.system.exception.BusinessException;
                                import org.springframework.stereotype.Component;
                                import org.springframework.web.bind.annotation.ControllerAdvice;
                                import org.springframework.web.bind.annotation.ExceptionHandler;
                                import org.springframework.web.bind.annotation.ResponseBody;

                                // 异常处理器
                                @Component
                                @ControllerAdvice
                                public class ProjectExceptionAdivce {

                                    // 处理 BusinessException 捕获的异常
                                    @ExceptionHandler(BusinessException.class)
                                    @ResponseBody
                                    public Result doBusinessException(BusinessException e) {
                                        System.out.println("捕获到了错误信息" + e.getMessage());
                                        // 返回给前端
                                        return new Result(e.getCode(), e.getMessage());
                                    }
                                }
                            ```
                    - results
                        - Code
                            ```java
                                package com.ssm.controller.results;

                                public class Code {
                                    // 操作结果编码
                                    public static final Integer SAVE_OK = 20011;
                                    public static final Integer UPDATED_OK = 20021;
                                    public static final Integer DELETE_OK = 20031;
                                    public static final Integer GET_OK = 20041;
                                    public static final Integer GETALL_OK = 20051;
                                    public static final Integer LOGIN_OK = 20061;

                                    public static final Integer SAVE_ERROR = 20010;
                                    public static final Integer UPDATED_ERROR = 20020;
                                    public static final Integer DELETE_ERROR = 20030;
                                    public static final Integer GET_ERROR = 20040;
                                    public static final Integer GETALL_ERROR = 20050;
                                    public static final Integer LOGIN_ERROR = 20060;
                                }
                            ```
                        - Result
                            ```java
                                package com.ssm.controller.results;

                                public class Result {
                                    // 操作结果编码
                                    private Integer code;
                                    // 操作数据结果
                                    private Object data;
                                    // 消息
                                    private String message;

                                    public Result(Integer code) {
                                        this.code = code;
                                    }

                                    public Result(Integer code, Object data) {
                                        this.code = code;
                                        this.data = data;
                                    }

                                    public Result(Integer code, Object data, String message) {
                                        this.code = code;
                                        this.data = data;
                                        this.message = message;
                                    }

                                    public Result(Integer code, String message) {
                                        this.code = code;
                                        this.message = message;
                                    }

                                    public Integer getCode() {
                                        return code;
                                    }

                                    public void setCode(Integer code) {
                                        this.code = code;
                                    }

                                    public Object getData() {
                                        return data;
                                    }

                                    public void setData(Object data) {
                                        this.data = data;
                                    }

                                    public String getMessage() {
                                        return message;
                                    }

                                    public void setMessage(String message) {
                                        this.message = message;
                                    }
                                }
                            ```
                    - UserController
                        ```java
                            package com.ssm.controller;

                            import com.github.pagehelper.PageInfo;
                            import com.ssm.controller.results.Code;
                            import com.ssm.controller.results.Result;
                            import com.ssm.domain.User;
                            import com.ssm.service.UserService;
                            import com.ssm.system.exception.BusinessException;
                            import org.springframework.beans.factory.annotation.Autowired;
                            import org.springframework.web.bind.annotation.*;

                            // 表现层
                            @RestController
                            @RequestMapping("/user")
                            public class UserController {

                                // 注入业务接口
                                @Autowired
                                private UserService userService;

                                // 增
                                @PostMapping
                                public Result save(User user) {
                                    System.out.println("save ..." + user);
                                    boolean falg = userService.save(user);
                                    if(!falg) {
                                        throw new BusinessException("添加失败, 请重试", Code.SAVE_ERROR);
                                    }
                                    return new Result(falg ? Code.SAVE_OK : Code.SAVE_ERROR, falg ? "添加成功" : "添加失败");
                                }

                                // 改
                                @PutMapping
                                public Result update(User user) {
                                    System.out.println("update ..." + user);
                                    boolean falg = userService.update(user);
                                    if(!falg) {
                                        throw new BusinessException("修改失败, 请重试", Code.UPDATED_ERROR);
                                    }
                                    return new Result(falg ? Code.UPDATED_OK : Code.UPDATED_ERROR, falg ? "修改成功" : "修改失败");
                                }

                                // 查单个
                                @GetMapping("/{uuid}")
                                public Result get(@PathVariable Integer uuid) {
                                    System.out.println("get ..." + uuid);
                                    User user = userService.get(uuid);
                                    if(null == user) {
                                        throw new BusinessException("查询失败, 请重试", Code.GET_ERROR);
                                    }
                                    return new Result(null != user ? Code.GET_OK : Code.GET_ERROR, user, null != user ? "查询成功" : "查询失败");
                                }

                                // 查分页
                                @GetMapping("/{page}/{size}")
                                public Result getAll(@PathVariable Integer page, @PathVariable Integer size) {
                                    System.out.println("getAll ..." + page + ", " + size);
                                    PageInfo<User> all = userService.getAll(page, size);
                                    if(null == all) {
                                        throw new BusinessException("查询失败, 请重试", Code.GETALL_ERROR);
                                    }
                                    return new Result(null != all ? Code.GETALL_OK : Code.GETALL_ERROR, all, null != all ? "查询成功" : "查询失败");
                                }

                                // 删
                                @DeleteMapping("/{uuid}")
                                public Result delete(@PathVariable Integer uuid) {
                                    System.out.println("delete ..." + uuid);
                                    boolean falg = userService.delete(uuid);
                                    if(!falg) {
                                        throw new BusinessException("删除失败, 请重试", Code.DELETE_ERROR);
                                    }
                                    return new Result(falg ? Code.DELETE_OK : Code.DELETE_ERROR, falg ? "删除成功" : "删除失败");
                                }

                                // 登录
                                @PostMapping("/login")
                                public Result login(String userName, String passWord) {
                                    System.out.println("login ..." + userName + ", " + passWord);
                                    User user = userService.login(userName, passWord);
                                    if(null == user) {
                                        throw new BusinessException("登录失败, 请重试", Code.LOGIN_ERROR);
                                    }
                                    return new Result(null != user ? Code.LOGIN_OK : Code.LOGIN_ERROR, user, null != user ? "登录成功" : "登录失败");
                                }

                            }
                        ```
                - dao
                    - UserDao
                        ```java
                            package com.ssm.dao;

                            import com.ssm.domain.User;
                            import org.apache.ibatis.annotations.*;

                            import java.util.List;

                            // 数据层
                            public interface UserDao {

                                // 增
                                @Insert("insert into user(uuid,userName,passWord,realName,gender,birthday) values(#{uuid},#{userName},#{passWord},#{realName},#{gender},#{birthday})")
                                boolean save(User user);
                                // 改
                                @Update("update user set userName = #{userName},passWord = #{passWord},realName = #{realName},gender = #{gender},birthday = #{birthday} where uuid = #{uuid}")
                                boolean update(User user);
                                // 删
                                @Delete("delete from user where uuid = #{uuid}")
                                boolean delete(int uuid);
                                // 查
                                @Select("select * from user where uuid = #{uuid}")
                                User get(int uuid);
                                @Select("select * from user")
                                List<User> getAll();
                                // 登录
                                @Select("select * from user where userName = #{userName} and passWord = #{passWord}")
                                User getByUserNameAndPassWord(@Param("userName") String userName, @Param("passWord")String passWord);
                            }
                        ```
                - domain
                    - User
                        ```java
                            package com.ssm.domain;

                            import java.io.Serializable;
                            import java.util.Date;

                            // 实体类
                            public class User implements Serializable {
                                private int uuid;
                                private String userName;
                                private String passWord;
                                private String realName;
                                private Integer gender;
                                private Date birthday;

                                public int getUuid() {
                                    return uuid;
                                }

                                public void setUuid(int uuid) {
                                    this.uuid = uuid;
                                }

                                public String getUserName() {
                                    return userName;
                                }

                                public void setUserName(String userName) {
                                    this.userName = userName;
                                }

                                public String getPassWord() {
                                    return passWord;
                                }

                                public void setPassWord(String passWord) {
                                    this.passWord = passWord;
                                }

                                public String getRealName() {
                                    return realName;
                                }

                                public void setRealName(String realName) {
                                    this.realName = realName;
                                }

                                public Integer getGender() {
                                    return gender;
                                }

                                public void setGender(Integer gender) {
                                    this.gender = gender;
                                }

                                public Date getBirthday() {
                                    return birthday;
                                }

                                public void setBirthday(Date birthday) {
                                    this.birthday = birthday;
                                }

                                @Override
                                public String toString() {
                                    return "User{" +
                                            "uuid=" + uuid +
                                            ", userName='" + userName + '\'' +
                                            ", passWord='" + passWord + '\'' +
                                            ", realName='" + realName + '\'' +
                                            ", gender=" + gender +
                                            ", birthday=" + birthday +
                                            '}';
                                }
                            }
                        ```
                - service
                    - impl
                        - UserServiceImpl
                            ```java
                                package com.ssm.service.impl;

                                import com.github.pagehelper.PageHelper;
                                import com.github.pagehelper.PageInfo;
                                import com.ssm.dao.UserDao;
                                import com.ssm.domain.User;
                                import com.ssm.service.UserService;
                                import org.springframework.beans.factory.annotation.Autowired;
                                import org.springframework.stereotype.Service;

                                import java.util.List;

                                @Service
                                public class UserServiceImpl implements UserService {

                                    // 注入接口 开启自动装配
                                    @Autowired
                                    private UserDao userDao;

                                    public boolean save(User user) {
                                        return userDao.save(user);
                                    }

                                    public boolean update(User user) {
                                        return userDao.update(user);
                                    }

                                    public boolean delete(int uuid) {
                                        return userDao.delete(uuid);
                                    }

                                    public User get(int uuid) {
                                        return userDao.get(uuid);
                                    }

                                    public PageInfo<User> getAll(int page, int size) {
                                        PageHelper.startPage(page, size);
                                        List<User> all = userDao.getAll();
                                        return new PageInfo<User>(all);
                                    }

                                    public User login(String userName, String passWord) {
                                        return userDao.getByUserNameAndPassWord(userName, passWord);
                                    }
                                }
                            ```
                    - UserService
                        ```java
                            package com.ssm.service;

                            import com.github.pagehelper.PageInfo;
                            import com.ssm.domain.User;
                            import org.springframework.transaction.annotation.Transactional;

                            // 业务层
                            @Transactional(readOnly = true) // 开启只读事务
                            public interface UserService {

                                // 增
                                @Transactional(readOnly = false)
                                boolean save(User user);
                                // 改
                                @Transactional(readOnly = false)
                                boolean update(User user);
                                // 删
                                @Transactional(readOnly = false)
                                boolean delete(int uuid);
                                // 查
                                User get(int uuid);
                                PageInfo<User> getAll(int page, int size);
                                // 登录
                                User login(String userName, String passWord);
                            }
                        ```
                - system.exception
                    - BusinessException
                        ```java
                            package com.ssm.system.exception;

                            // 捕获业务错误
                            public class BusinessException extends RuntimeException {

                                private Integer code;

                                public Integer getCode() {
                                    return code;
                                }

                                public void setCode(Integer code) {
                                    this.code = code;
                                }

                                public BusinessException(Integer code) {
                                    super();
                                    this.code = code;
                                }

                                public BusinessException(String message, Integer code) {
                                    super(message);
                                    this.code = code;
                                }

                                public BusinessException(String message, Throwable cause, Integer code) {
                                    super(message, cause);
                                    this.code = code;
                                }

                                public BusinessException(Throwable cause, Integer code) {
                                    super(cause);
                                    this.code = code;
                                }

                                protected BusinessException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace, Integer code) {
                                    super(message, cause, enableSuppression, writableStackTrace);
                                    this.code = code;
                                }
                            }
                        ```
                    - SystemException
                        ```java
                            package com.ssm.system.exception;

                            // 捕获系统错误
                            public class SystemException extends RuntimeException {
                                public SystemException() {
                                    super();
                                }

                                public SystemException(String message) {
                                    super(message);
                                }

                                public SystemException(String message, Throwable cause) {
                                    super(message, cause);
                                }

                                public SystemException(Throwable cause) {
                                    super(cause);
                                }

                                protected SystemException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
                                    super(message, cause, enableSuppression, writableStackTrace);
                                }
                            }
                        ```
        - resources
            - jdbc.properties
                ```java
                    jdbc.driver=com.mysql.jdbc.Driver
                    jdbc.url=jdbc:mysql://localhost:3306/ssm_db?useUnicode=true&characterEncoding=utf-8&useSSL=false&serverTimezone=GMT
                    jdbc.username=root
                    jdbc.password=gzh***
                ```
        - webapp
            - WEB-INF
    - test
        测试环境换成Postman
- pom.xml
    插件同上