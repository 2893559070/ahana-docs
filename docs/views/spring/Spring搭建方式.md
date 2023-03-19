# spring

## 注解开发
### 文件层级
```bash
- src
    - main
        - java
            - com.spring
                - config
                    - JDBCConfig
                    - MybatisConfig
                    - SpringConfig
                - dao
                    - AccountDao
                - domain
                    - AccountDao
                - service
                    - impl
                        - AccountServiceImpl
                    - AccountService
        - resources
            - com.spring.dao
                - AccountDao.xml
            applicationContext.xml
            jdbc.properties
    - test
- pom.xml
```
- src
    - main
        - java
            - com.spring
                - config
                    - JDBCConfig
                        ```java
                            package com.spring.config;

                            import com.alibaba.druid.pool.DruidDataSource;
                            import org.springframework.beans.factory.annotation.Value;
                            import org.springframework.context.annotation.Bean;

                            /**
                            * 注解加载第三方资源
                            * */
                            //@Component
                            public class JDBCConfig {

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
                    - MybatisConfig
                        ```java
                            package com.spring.config;

                            import org.mybatis.spring.SqlSessionFactoryBean;
                            import org.mybatis.spring.mapper.MapperScannerConfigurer;
                            import org.springframework.beans.factory.annotation.Autowired;
                            import org.springframework.context.annotation.Bean;

                            import javax.sql.DataSource;

                            public class MybatisConfig {
                                
                                // spring整合mybatis后控制的创建连接用的对象
                                @Bean
                                public SqlSessionFactoryBean getSqlSessionFactoryBean(@Autowired DataSource dataSource) {
                                    SqlSessionFactoryBean sfb = new SqlSessionFactoryBean();
                                    sfb.setTypeAliasesPackage("com.spring.domain");
                                    sfb.setDataSource(dataSource);
                                    return sfb;
                                }

                                // 加载mybatis映射配置的扫描，将其作为spring的bean进行管理
                                @Bean
                                public MapperScannerConfigurer getScannerConfigurer() {
                                    MapperScannerConfigurer mmc = new MapperScannerConfigurer();
                                    mmc.setBasePackage("com.spring.dao");
                                    return mmc;
                                }
                            }

                        ```
                    - SpringConfig
                        ```java
                            package com.spring.config;

                            import org.springframework.context.annotation.ComponentScan;
                            import org.springframework.context.annotation.Configuration;
                            import org.springframework.context.annotation.Import;
                            import org.springframework.context.annotation.PropertySource;

                            /**
                            * @Configuration
                            * @ComponentScan("com.spring")
                            * 替换
                            * <context:component-scan base-package="com.spring"/>
                            * */

                            // 启动注解驱动，指定对应的的扫描路径，也就是资源所在的包
                            @Configuration
                            @ComponentScan("com.spring")
                            // 加载perperties配置文件的信息
                            @PropertySource("classpath:jdbc.properties")
                            // 加载配置 字节码文件
                            @Import({JDBCConfig.class, MybatisConfig.class})
                            public class SpringConfig {
                            }
                        ```
                - dao
                    - AccountDao
                        ```java
                            package com.spring.dao;

                            import com.spring.domain.Account;
                            import org.apache.ibatis.annotations.Delete;
                            import org.apache.ibatis.annotations.Insert;
                            import org.apache.ibatis.annotations.Select;
                            import org.apache.ibatis.annotations.Update;

                            import java.util.List;

                            public interface AccountDao {
                                @Insert("insert into spring_db01 values(null, #{name}, #{age})")
                                void save(Account account);

                                @Delete("delete from spring_db01 where id = #{id}")
                                void delete(Integer id);

                                @Update("update spring_db01 set name=#{name},age=#{age} where id=#{id}")
                                void update(Account account);

                                @Select("select * from spring_db01")
                                List<Account> findAll();

                                @Select("select * from spring_db01 where id = #{id}")
                                Account findById(Integer id);
                            }
                        ```
                - domain
                    - Account
                        ```java
                            package com.spring.domain;

                            import java.io.Serializable;

                            public class Account implements Serializable {
                                private int id;
                                private String name;
                                private int age;
                                private Double money;

                                public int getId() {
                                    return id;
                                }

                                public void setId(int id) {
                                    this.id = id;
                                }

                                public String getName() {
                                    return name;
                                }

                                public void setName(String name) {
                                    this.name = name;
                                }

                                public int getAge() {
                                    return age;
                                }

                                public void setAge(int age) {
                                    this.age = age;
                                }

                                public Double getMoney() {
                                    return money;
                                }

                                public void setMoney(Double money) {
                                    this.money = money;
                                }

                                @Override
                                public String toString() {
                                    return "Account{" +
                                            "id=" + id +
                                            ", name='" + name + '\'' +
                                            ", age=" + age +
                                            ", money=" + money +
                                            '}';
                                }
                            }
                        ```
                - service
                    - impl
                        - AccountServiceImpl
                            ```java
                                package com.spring.service.impl;

                                import com.spring.dao.AccountDao;
                                import com.spring.domain.Account;
                                import com.spring.service.AccountService;
                                import org.springframework.beans.factory.annotation.Autowired;
                                import org.springframework.stereotype.Component;

                                import java.util.List;

                                @Component("accountService")
                                public class AccountServiceImpl implements AccountService {
                                    
                                    // 指定接口类
                                    @Autowired
                                    private AccountDao accountDao;

                                    public void save(Account account) {
                                        accountDao.save(account);
                                    }

                                    public void update(Account account){
                                        accountDao.update(account);
                                    }

                                    public void delete(Integer id) {
                                        accountDao.delete(id);
                                    }

                                    public Account findById(Integer id) {
                                        return accountDao.findById(id);
                                    }

                                    public List<Account> findAll() {
                                        return accountDao.findAll();
                                    }
                                }
                            ```
                    - AccountService
                        ```java
                            package com.spring.service;

                            import com.spring.domain.Account;

                            import java.util.List;

                            public interface AccountService {
                                void save(Account account);

                                void delete(Integer id);

                                void update(Account account);

                                List<Account> findAll();

                                Account findById(Integer id);
                            }
                        ```
        - resources
            - jdbc.properties
                ```java
                    jdbc.driver=com.mysql.jdbc.Driver
                    jdbc.url=jdbc:mysql://localhost:3306/spring_db?useUnicode=true&characterEncoding=utf-8&useSSL=false&serverTimezone=GMT
                    jdbc.username=root
                    jdbc.password=gzh***
                ```
    - test
        - java
            - com.spring.service
                - testDemo
                    ```java
                        package com.spring.service;

                        import com.spring.config.SpringConfig;
                        import com.spring.domain.Account;
                        import org.junit.Test;
                        import org.junit.runner.RunWith;
                        import org.springframework.beans.factory.annotation.Autowired;
                        import org.springframework.test.context.ContextConfiguration;
                        import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

                        import java.util.List;
                        // 设定spring 加载器
                        @RunWith(SpringJUnit4ClassRunner.class)
                        // 设置加载的spring上下文对应的配置
                        @ContextConfiguration( classes = SpringConfig.class)
                        public class testDome {

                            @Autowired
                            private AccountService accountService;

                            @Test
                            public void testFindById() {
                                Account byId = accountService.findById(1);
                                System.out.println(byId);
                            }

                            @Test
                            public void testFindAll() {
                                List<Account> all = accountService.findAll();
                                System.out.println(all);
                            }
                        }
                    ```
- pom.xml
    ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <project xmlns="http://maven.apache.org/POM/4.0.0"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
            <modelVersion>4.0.0</modelVersion>

            <groupId>org.example</groupId>
            <artifactId>注解开发</artifactId>
            <version>1.0-SNAPSHOT</version>

            <dependencies>
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
                <dependency>
                    <groupId>org.springframework</groupId>
                    <artifactId>spring-context</artifactId>
                    <version>5.1.9.RELEASE</version>
                </dependency>
                <dependency>
                    <groupId>org.springframework</groupId>
                    <artifactId>spring-jdbc</artifactId>
                    <version>5.1.9.RELEASE</version>
                </dependency>
                <dependency>
                    <groupId>com.alibaba</groupId>
                    <artifactId>druid</artifactId>
                    <version>1.1.16</version>
                </dependency>
                <dependency>
                    <groupId>org.mybatis</groupId>
                    <artifactId>mybatis-spring</artifactId>
                    <version>1.3.0</version>
                </dependency>
                <dependency>
                    <groupId>junit</groupId>
                    <artifactId>junit</artifactId>
                    <version>4.12</version>
                </dependency>
                <dependency>
                    <groupId>org.springframework</groupId>
                    <artifactId>spring-test</artifactId>
                    <version>5.1.9.RELEASE</version>
                </dependency>
            </dependencies>
        </project>
    ```

## spring XML + 连接数据库 搭建模式
### 文件层级
```bash
- src
    - main
        - java
            - com.spring
                - dao
                    - AccountDao
                - domain
                    - AccountDao
                - service
                    - impl
                        AccountServiceImpl
                    AccountService
        - resources
            - com.spring.dao
                - AccountDao.xml
            applicationContext.xml
            jdbc.properties
    - test
- pom.xml
```
- src
    - main
        - java
            - com.spring
                - dao
                    - AccountDao
                        ```java
                            package com.spring.dao;

                            import org.apache.ibatis.annotations.Param;

                            public interface AccountDao {
                                void inMoney(@Param("name") String name, @Param("money") Integer money);
                                void outMoney(@Param("name") String name, @Param("money") Integer money);
                            }
                        ```
                - domain
                    - AccountDao
                        ```java
                            package com.spring.domain;

                            public class AccountDao {
                                private String name;
                                private Integer money;

                                public void setName(String name) {
                                    this.name = name;
                                }

                                public void setMoney(Integer money) {
                                    this.money = money;
                                }
                            }
                        ```
                - service
                    - impl
                        AccountServiceImpl
                        ```java
                            package com.spring.service.impl;

                            import com.spring.dao.AccountDao;
                            import com.spring.service.AccountService;
                            import org.springframework.jdbc.datasource.DataSourceTransactionManager;
                            import org.springframework.transaction.PlatformTransactionManager;
                            import org.springframework.transaction.TransactionDefinition;
                            import org.springframework.transaction.TransactionStatus;
                            import org.springframework.transaction.support.DefaultTransactionDefinition;

                            import javax.sql.DataSource;

                            public class AccountServiceImpl implements AccountService {

                                private AccountDao accountDao;
                                private DataSource dataSource;

                                public void setAccountDao(AccountDao accountDao) {
                                    this.accountDao = accountDao;
                                }

                                public void setDataSource(DataSource dataSource) {
                                    this.dataSource = dataSource;
                                }

                                public void transfer(String outName, String inName, Integer money) {
                                    // 开启事务
                                    PlatformTransactionManager ptm = new DataSourceTransactionManager(dataSource);
                                    // 事务定义
                                    TransactionDefinition td = new DefaultTransactionDefinition();
                                    // 事务状态
                                    TransactionStatus ts = ptm.getTransaction(td);

                                    accountDao.inMoney(outName, money);
                                    accountDao.outMoney(inName, money);

                                    // 提交事务
                                    ptm.commit(ts);
                                }
                            }
                        ```
                    AccountService
                    ```java
                        package com.spring.service;

                        public interface AccountService {
                            void transfer(String outName, String inName, Integer money);
                        }
                    ```
        - resources
            - com.spring.dao
                - AccountDao.xml
                    ```xml
                        <?xml version="1.0" encoding="UTF-8"?>

                        <!DOCTYPE mapper
                                PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
                                "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
                        <mapper namespace="com.spring.dao.AccountDao">
                            <update id="inMoney">
                                update account set money = money + #{money} where name = #{name}
                            </update>

                            <update id="outMoney">
                                update account set money = money - #{money} where name = #{name}
                            </update>
                        </mapper>
                    ```
            applicationContext.xml
            ```xml
                <?xml version="1.0" encoding="UTF-8"?>
                <beans xmlns="http://www.springframework.org/schema/beans"
                    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                    xmlns:context="http://www.springframework.org/schema/context"
                    xsi:schemaLocation="http://www.springframework.org/schema/beans
                    http://www.springframework.org/schema/beans/spring-beans.xsd
                    http://www.springframework.org/schema/context
                    https://www.springframework.org/schema/context/spring-context.xsd">


                    <context:property-placeholder location="jdbc.properties" />

                    <bean id="dataSource" class="com.alibaba.druid.pool.DruidDataSource">
                        <property name="driverClassName" value="${jdbc.driver}"/>
                        <property name="url" value="${jdbc.url}"/>
                        <property name="username" value="${jdbc.username}"/>
                        <property name="password" value="${jdbc.password}"/>
                    </bean>

                    <!--数据源对象 注入-->
                    <bean id="accountService" class="com.spring.service.impl.AccountServiceImpl">
                        <property name="accountDao" ref="accountDao"/>
                        <property name="dataSource" ref="dataSource"/>
                    </bean>

                    <!-- 指定类型 -->
                    <bean class="org.mybatis.spring.SqlSessionFactoryBean">
                        <property name="dataSource" ref="dataSource"/>
                        <property name="typeAliasesPackage" value="com.spring.domain"/>
                    </bean>
                    <!-- 指定接口 -->
                    <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
                        <property name="basePackage" value="com.spring.dao"/>
                    </bean>
                </beans>
            ```
            jdbc.properties
            ```bash
                jdbc.driver=com.mysql.jdbc.Driver
                jdbc.url=jdbc:mysql://localhost:3306/spring_db?useUnicode=true&characterEncoding=utf-8&useSSL=false&serverTimezone=GMT
                jdbc.username=root
                jdbc.password=gzh***
            ```
    - test
        - java
            - com.spring.sevice
            AccountServiceTest
            ```java
                package com.spring.service;

                import org.junit.Test;
                import org.springframework.context.support.ClassPathXmlApplicationContext;

                public class AccountServiceTest {
                    @Test
                    public void transferDome() {
                        ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
                        AccountService accountService = (AccountService) ctx.getBean("accountService");
                        accountService.transfer("zhangsan", "lisi", 500);
                    }
                }
            ```
- pom.xml
    ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <project xmlns="http://maven.apache.org/POM/4.0.0"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
                http://maven.apache.org/xsd/maven-4.0.0.xsd">
            <modelVersion>4.0.0</modelVersion>

            <groupId>org.example</groupId>
            <artifactId>编程事务控制</artifactId>
            <version>1.0-SNAPSHOT</version>

            <!--spring连接数据库-->
            <dependencies>
                <dependency>
                    <groupId>org.springframework</groupId>
                    <artifactId>spring-context</artifactId>
                    <version>5.1.9.RELEASE</version>
                </dependency>
                <dependency>
                    <groupId>org.springframework</groupId>
                    <artifactId>spring-jdbc</artifactId>
                    <version>5.1.9.RELEASE</version>
                </dependency>
                <dependency>
                    <groupId>org.mybatis</groupId>
                    <artifactId>mybatis</artifactId>
                    <version>3.5.3</version>
                </dependency>
                <dependency>
                    <groupId>org.apache.ibatis</groupId>
                    <artifactId>ibatis-core</artifactId>
                    <version>3.0</version>
                </dependency>
                <dependency>
                    <groupId>mysql</groupId>
                    <artifactId>mysql-connector-java</artifactId>
                    <version>5.1.47</version>
                </dependency>
                <dependency>
                    <groupId>com.alibaba</groupId>
                    <artifactId>druid</artifactId>
                    <version>1.1.16</version>
                </dependency>
                <dependency>
                    <groupId>org.mybatis</groupId>
                    <artifactId>mybatis-spring</artifactId>
                    <version>1.3.0</version>
                </dependency>
                <dependency>
                    <groupId>junit</groupId>
                    <artifactId>junit</artifactId>
                    <version>4.12</version>
                    <scope>test</scope>
                </dependency>
                <dependency>
                    <groupId>junit</groupId>
                    <artifactId>junit</artifactId>
                    <version>4.12</version>
                    <scope>test</scope>
                </dependency>
            </dependencies>

        </project>
    ```

## spring XML + 连接数据库 + aop 搭建模式

### aop搭建模式
#### 文件层级
```bash
- src
    - main
        - java
            - com.spring
                - aop
                    TxAdvice
                - dao
                    - AccountDao
                - domain
                    - AccountDao
                - service
                    - impl
                        AccountServiceImpl
                    AccountService
        - resources
            - com.spring.dao
                - AccountDao.xml
            applicationContext.xml
            jdbc.properties
    - test
- pom.xml
```
- src
    - main
        - java
            - com.spring
                - aop
                    TxAdvice
                    ```java
                        package com.spring.aop;

                        import org.aspectj.lang.ProceedingJoinPoint;
                        import org.springframework.jdbc.datasource.DataSourceTransactionManager;
                        import org.springframework.transaction.PlatformTransactionManager;
                        import org.springframework.transaction.TransactionDefinition;
                        import org.springframework.transaction.TransactionStatus;
                        import org.springframework.transaction.support.DefaultTransactionDefinition;

                        import javax.sql.DataSource;

                        public class TxAdvice {
                            private DataSource dataSource;

                            public void setDataSource(DataSource dataSource) {
                                this.dataSource = dataSource;
                            }

                            public Object transactionManager(ProceedingJoinPoint pjp) throws Throwable {
                                // 开启事务
                                PlatformTransactionManager ptm = new DataSourceTransactionManager(dataSource);
                                // 事务定义
                                TransactionDefinition td = new DefaultTransactionDefinition();
                                // 事务状态
                                TransactionStatus ts = ptm.getTransaction(td);

                                Object ret = pjp.proceed(pjp.getArgs());

                                // 提交事务
                                ptm.commit(ts);

                                return ret;
                            }
                        }

                    ```
                - dao
                    - AccountDao
                        ```java
                            package com.spring.dao;

                            import org.apache.ibatis.annotations.Param;

                            public interface AccountDao {
                                void inMoney(@Param("name") String name, @Param("money") Integer money);
                                void outMoney(@Param("name") String name, @Param("money") Integer money);
                            }
                        ```
                - domain
                    - AccountDao
                        ```java
                            package com.spring.domain;

                            public class AccountDao {
                                private String name;
                                private Integer money;

                                public void setName(String name) {
                                    this.name = name;
                                }

                                public void setMoney(Integer money) {
                                    this.money = money;
                                }
                            }
                        ```
                - service
                    - impl
                        AccountServiceImpl
                        ```java
                            import com.spring.dao.AccountDao;
                            import com.spring.service.AccountService;

                            public class AccountServiceImpl implements AccountService {

                                private AccountDao accountDao;
                                // private DataSource dataSource;

                                public void setAccountDao(AccountDao accountDao) {
                                    this.accountDao = accountDao;
                                }

                                // public void setDataSource(DataSource dataSource) {
                                //     this.dataSource = dataSource;
                                // }

                                public void transfer(String outName, String inName, Integer money) {
                                    // 开启事务
                                    // PlatformTransactionManager ptm = new DataSourceTransactionManager(dataSource);
                                    // 事务定义
                                    // TransactionDefinition td = new DefaultTransactionDefinition();
                                    // 事务状态
                                    // TransactionStatus ts = ptm.getTransaction(td);

                                    accountDao.inMoney(outName, money);
                                    accountDao.outMoney(inName, money);

                                     // 提交事务
                                     // ptm.commit(ts);
                                }
                            }
                        ```
                    AccountService
                    ```java
                        package com.spring.service;

                        public interface AccountService {
                            void transfer(String outName, String inName, Integer money);
                        }
                    ```
        - resources
            - com.spring.dao
                - AccountDao.xml
                    ```xml
                        <?xml version="1.0" encoding="UTF-8"?>

                        <!DOCTYPE mapper
                                PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
                                "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
                        <mapper namespace="com.spring.dao.AccountDao">
                            <update id="inMoney">
                                update account set money = money + #{money} where name = #{name}
                            </update>

                            <update id="outMoney">
                                update account set money = money - #{money} where name = #{name}
                            </update>
                        </mapper>
                    ```
            applicationContext.xml
            ```xml
                <?xml version="1.0" encoding="UTF-8"?>
                <beans xmlns="http://www.springframework.org/schema/beans"
                    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                    xmlns:context="http://www.springframework.org/schema/context"
                    xmlns:aop="http://www.springframework.org/schema/aop"
                    xsi:schemaLocation="http://www.springframework.org/schema/beans
                    http://www.springframework.org/schema/beans/spring-beans.xsd
                    http://www.springframework.org/schema/context
                    https://www.springframework.org/schema/context/spring-context.xsd
                    http://www.springframework.org/schema/aop
                    https://www.springframework.org/schema/aop/spring-aop.xsd">


                    # ... 编程事务控制 一致bean配置

                    <!-- AOP -->
                    <bean id="txAdvice" class="com.spring.aop.TxAdvice">
                        <property name="dataSource" ref="dataSource"/>
                    </bean>

                    <aop:config>
                        <aop:pointcut id="pt" expression="execution(* *..*transfer(..))"/>
                        <aop:aspect ref="txAdvice" >
                            <aop:around method="transactionManager" pointcut-ref="pt"/>
                        </aop:aspect>
                    </aop:config>
                </beans>
            ```
            jdbc.properties
            ```bash
                jdbc.driver=com.mysql.jdbc.Driver
                jdbc.url=jdbc:mysql://localhost:3306/spring_db?useUnicode=true&characterEncoding=utf-8&useSSL=false&serverTimezone=GMT
                jdbc.username=root
                jdbc.password=gzh***
            ```
    - test
        - java
            - com.spring.sevice
            AccountServiceTest
            ```java
                package com.spring.service;

                import org.junit.Test;
                import org.springframework.context.support.ClassPathXmlApplicationContext;

                public class AccountServiceTest {
                    @Test
                    public void transferDome() {
                        ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
                        AccountService accountService = (AccountService) ctx.getBean("accountService");
                        accountService.transfer("zhangsan", "lisi", 500);
                    }
                }
            ```
- pom.xml
    ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <project xmlns="http://maven.apache.org/POM/4.0.0"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
                http://maven.apache.org/xsd/maven-4.0.0.xsd">
            <modelVersion>4.0.0</modelVersion>

            <groupId>org.example</groupId>
            <artifactId>编程事务控制AOP</artifactId>
            <version>1.0-SNAPSHOT</version>

                # ...编程事务控制 一致依赖

                <!--aop-->
                <dependency>
                    <groupId>org.aspectj</groupId>
                    <artifactId>aspectjweaver</artifactId>
                    <version>1.9.4</version>
                </dependency>
            </dependencies>

        </project>
    ```

### 申明式事务
#### 文件层级
```bash
- src
    - main
        - java
            - com.spring
                - aop （ 配置申明式事务后 可删除 ）
                    TxAdvice
                - dao
                    - AccountDao
                - domain
                    - AccountDao
                - service
                    - impl
                        AccountServiceImpl
                    AccountService
        - resources
            - com.spring.dao
                - AccountDao.xml
            applicationContext.xml
            jdbc.properties
    - test
- pom.xml
```

#### 变更代码
- src\main\resources\applicationContext.xml ( 修改后 )
    ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <beans xmlns="http://www.springframework.org/schema/beans"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xmlns:context="http://www.springframework.org/schema/context"
            xmlns:aop="http://www.springframework.org/schema/aop"
            xmlns:tx="http://www.springframework.org/schema/tx"
            xsi:schemaLocation="http://www.springframework.org/schema/beans
            http://www.springframework.org/schema/beans/spring-beans.xsd
            http://www.springframework.org/schema/context
            https://www.springframework.org/schema/context/spring-context.xsd
            http://www.springframework.org/schema/aop
            https://www.springframework.org/schema/aop/spring-aop.xsd
            http://www.springframework.org/schema/tx
            https://www.springframework.org/schema/tx/spring-tx.xsd">


            <context:property-placeholder location="jdbc.properties" />

            <bean id="dataSource" class="com.alibaba.druid.pool.DruidDataSource">
                <property name="driverClassName" value="${jdbc.driver}"/>
                <property name="url" value="${jdbc.url}"/>
                <property name="username" value="${jdbc.username}"/>
                <property name="password" value="${jdbc.password}"/>
            </bean>

            <!--数据源对象 注入-->
            <bean id="accountService" class="com.spring.service.impl.AccountServiceImpl">
                <property name="accountDao" ref="accountDao"/>
            <!--<property name="dataSource" ref="dataSource"/>-->
            </bean>

            <!-- 指定类型 -->
            <bean class="org.mybatis.spring.SqlSessionFactoryBean">
                <property name="dataSource" ref="dataSource"/>
                <property name="typeAliasesPackage" value="com.spring.domain"/>
            </bean>
            <!-- 指定接口 -->
            <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
                <property name="basePackage" value="com.spring.dao"/>
            </bean>


        <!--    ############################ AOP ##############################-->

        <!--    <bean id="txAdvice" class="com.spring.aop.TxAdvice">-->
        <!--        <property name="dataSource" ref="dataSource"/>-->
        <!--    </bean>-->

        <!--    <aop:config>-->
        <!--        <aop:pointcut id="pt" expression="execution(* *..*transfer(..))"/>-->
        <!--        <aop:aspect ref="txAdvice" >-->
        <!--            <aop:around method="transactionManager" pointcut-ref="pt"/>-->
        <!--        </aop:aspect>-->
        <!--    </aop:config>-->

            <!--事务管理器-->
            <bean id="txManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
                <property name="dataSource" ref="dataSource"/>
            </bean>
            <!--事务管理器的通知类-->
            <tx:advice id="txAdvice" transaction-manager="txManager">
                <!--定义控制的事务-->
                <tx:attributes>
                    <!--对所有方法设置读取-->
                    <tx:method name="*" read-only="false"/>
                    <!--对get开头的方法设置只读事务-->
                    <tx:method name="get*" read-only="true"/>
        <!--            <tx:method name="transfer" read-only="false"/>-->
                </tx:attributes>
            </tx:advice>

            <aop:config>
                <!--对service的接口进行aop挂载-->
                <aop:pointcut id="pt" expression="execution(* com.spring.service.*Service.*(..))"/>
                <aop:advisor advice-ref="txAdvice" pointcut-ref="pt" />
            </aop:config>
        </beans>
    ```

### 申明式事务_注解
#### 文件层级
```bash
- src
    - main
        - java
            - com.spring
                - dao
                    - AccountDao
                - domain
                    - AccountDao
                - service
                    - impl
                        AccountServiceImpl
                    AccountService
        - resources
            - com.spring.dao
                - AccountDao.xml
            applicationContext.xml
            jdbc.properties
    - test
- pom.xml
```

#### 变更代码
- src\main\java\com\spring\service\AccountService.java ( 修改后 )
    ```java
        package com.spring.service;

        import org.springframework.transaction.annotation.Isolation;
        import org.springframework.transaction.annotation.Propagation;
        import org.springframework.transaction.annotation.Transactional;

        @Transactional(isolation = Isolation.DEFAULT)
        public interface AccountService {

            // 指定事务管理器
            @Transactional(
                    readOnly = false,
                    timeout = -1,
                    isolation = Isolation.DEFAULT,
                    rollbackFor = {}, // java.lang.ArithmeticException.class, IOException.class
                    propagation = Propagation.REQUIRED
            )
            void transfer(String outName, String inName, Integer money);
        }
    ```
- src\main\resources\applicationContext.xml ( 修改后 )
    ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <beans xmlns="http://www.springframework.org/schema/beans"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xmlns:context="http://www.springframework.org/schema/context"
            xmlns:aop="http://www.springframework.org/schema/aop"
            xmlns:tx="http://www.springframework.org/schema/tx"
            xsi:schemaLocation="http://www.springframework.org/schema/beans
            http://www.springframework.org/schema/beans/spring-beans.xsd
            http://www.springframework.org/schema/context
            https://www.springframework.org/schema/context/spring-context.xsd
            http://www.springframework.org/schema/aop
            https://www.springframework.org/schema/aop/spring-aop.xsd
            http://www.springframework.org/schema/tx
            https://www.springframework.org/schema/tx/spring-tx.xsd">


            <context:property-placeholder location="jdbc.properties" />

            <bean id="dataSource" class="com.alibaba.druid.pool.DruidDataSource">
                <property name="driverClassName" value="${jdbc.driver}"/>
                <property name="url" value="${jdbc.url}"/>
                <property name="username" value="${jdbc.username}"/>
                <property name="password" value="${jdbc.password}"/>
            </bean>

            <!--数据源对象 注入-->
            <bean id="accountService" class="com.spring.service.impl.AccountServiceImpl">
                <property name="accountDao" ref="accountDao"/>
            <!--<property name="dataSource" ref="dataSource"/>-->
            </bean>

            <!-- 指定类型 -->
            <bean class="org.mybatis.spring.SqlSessionFactoryBean">
                <property name="dataSource" ref="dataSource"/>
                <property name="typeAliasesPackage" value="com.spring.domain"/>
            </bean>
            <!-- 指定接口 -->
            <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
                <property name="basePackage" value="com.spring.dao"/>
            </bean>


        <!--    ############################ AOP ##############################-->

        <!--    <bean id="txAdvice" class="com.spring.aop.TxAdvice">-->
        <!--        <property name="dataSource" ref="dataSource"/>-->
        <!--    </bean>-->

        <!--    <aop:config>-->
        <!--        <aop:pointcut id="pt" expression="execution(* *..*transfer(..))"/>-->
        <!--        <aop:aspect ref="txAdvice" >-->
        <!--            <aop:around method="transactionManager" pointcut-ref="pt"/>-->
        <!--        </aop:aspect>-->
        <!--    </aop:config>-->

            <!--事务管理器-->
            <bean id="txManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
                <property name="dataSource" ref="dataSource"/>
            </bean>

            <!--开启事务注解驱动, 指定事务管理器-->
            <tx:annotation-driven transaction-manager="txManager" />

        <!--    &lt;!&ndash;事务管理器的通知类&ndash;&gt;-->
        <!--    <tx:advice id="txAdvice" transaction-manager="txManager">-->
        <!--        &lt;!&ndash;定义控制的事务&ndash;&gt;-->
        <!--        <tx:attributes>-->
        <!--            &lt;!&ndash;对所有方法设置读取&ndash;&gt;-->
        <!--            <tx:method name="*" read-only="false"/>-->
        <!--            &lt;!&ndash;对get开头的方法设置只读事务&ndash;&gt;-->
        <!--            <tx:method name="get*" read-only="true"/>-->
        <!--        </tx:attributes>-->
        <!--    </tx:advice>-->

        <!--    <aop:config>-->
        <!--        &lt;!&ndash;对service的接口进行aop挂载&ndash;&gt;-->
        <!--        <aop:pointcut id="pt" expression="execution(* com.spring.service.*Service.*(..))"/>-->
        <!--        <aop:advisor advice-ref="txAdvice" pointcut-ref="pt" />-->
        <!--    </aop:config>-->
        </beans>
    ```

## 申明式事务_存注解驱动
### 文件层级
```bash
    - src
        - main
            - java
                - com.spring
                    - config
                        - JDBCConfig
                        - MyBatisConfig
                        - SpringConfig
                    - dao
                        - AccountDao
                    - domain
                        - AccountDao
                    - service
                        - impl
                            AccountServiceImpl
                        AccountService
            - resources
                jdbc.properties
        - test
            - java
                - com.spring.service
                    - testDemo
    - pom.xml
```
- src
    - main
        - java
            - com.spring
                - config
                    - JDBCConfig
                        ```java
                            package com.spring.config;

                            import com.alibaba.druid.pool.DruidDataSource;
                            import org.springframework.beans.factory.annotation.Value;
                            import org.springframework.context.annotation.Bean;
                            import org.springframework.jdbc.datasource.DataSourceTransactionManager;
                            import org.springframework.transaction.PlatformTransactionManager;

                            import javax.sql.DataSource;

                            /**
                            * 注解加载第三方资源
                            * */
                            //@Component
                            public class JDBCConfig {

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

                                @Bean
                                public PlatformTransactionManager getPlatformTransactionManager(DataSource dataSource) {
                                    return new DataSourceTransactionManager(dataSource);
                                }
                            }
                        ```
                    - MyBatisConfig
                        ```java
                            package com.spring.config;

                            import org.mybatis.spring.SqlSessionFactoryBean;
                            import org.mybatis.spring.mapper.MapperScannerConfigurer;
                            import org.springframework.beans.factory.annotation.Autowired;
                            import org.springframework.context.annotation.Bean;

                            import javax.sql.DataSource;

                            public class MyBatisConfig {
                                // spring整合mybatis后控制的创建连接用的对象
                                @Bean
                                public SqlSessionFactoryBean getSqlSessionFactoryBean(@Autowired DataSource dataSource) {
                                    SqlSessionFactoryBean sfb = new SqlSessionFactoryBean();
                                    sfb.setTypeAliasesPackage("com.spring.domain");
                                    sfb.setDataSource(dataSource);
                                    return sfb;
                                }

                                // 加载mybatis映射配置的扫描，将其作为spring的bean进行管理
                                @Bean
                                public MapperScannerConfigurer getScannerConfigurer() {
                                    MapperScannerConfigurer mmc = new MapperScannerConfigurer();
                                    mmc.setBasePackage("com.spring.dao");
                                    return mmc;
                                }
                            }
                        ```
                    - SpringConfig
                        ```java
                            package com.spring.config;

                            import org.springframework.context.annotation.ComponentScan;
                            import org.springframework.context.annotation.Configuration;
                            import org.springframework.context.annotation.Import;
                            import org.springframework.context.annotation.PropertySource;
                            import org.springframework.transaction.annotation.EnableTransactionManagement;

                            /**
                            * @Configuration
                            * @ComponentScan("com.spring")
                            * 替换
                            * <context:component-scan base-package="com.spring"/>
                            * */

                            // 启动注解驱动，指定对应的的扫描路径，也就是资源所在的包
                            @Configuration
                            @ComponentScan("com.spring")
                            // 加载perperties配置文件的信息
                            @PropertySource("classpath:jdbc.properties")
                            // 加载配置 字节码文件
                            @Import({JDBCConfig.class, MyBatisConfig.class})
                            // （申明式事务 存注解驱动）开启注解驱动，等同XML格式中的注解驱动
                            @EnableTransactionManagement
                            public class SpringConfig {
                            }
                        ```
                - dao
                    - AccountDao
                        ```java
                            package com.spring.dao;

                            import org.apache.ibatis.annotations.Param;
                            import org.apache.ibatis.annotations.Update;
                            import org.springframework.stereotype.Service;

                            public interface AccountDao {
                                @Update("update account set money = money + #{money} where name = #{name}")
                                void inMoney(@Param("name") String name, @Param("money") Integer money);
                                @Update("update account set money = money - #{money} where name = #{name}")
                                void outMoney(@Param("name") String name, @Param("money") Integer money);
                            }
                        ```
                - domain
                    - AccountDao
                        ```java
                            package com.spring.domain;

                            public class AccountDao {
                                private String name;
                                private Integer money;

                                public void setName(String name) {
                                    this.name = name;
                                }

                                public void setMoney(Integer money) {
                                    this.money = money;
                                }
                            }
                        ```
                - service
                    - impl
                        AccountServiceImpl
                        ```java
                            package com.spring.service.impl;

                            import com.spring.dao.AccountDao;
                            import com.spring.service.AccountService;
                            import org.springframework.beans.factory.annotation.Autowired;
                            import org.springframework.stereotype.Service;

                            @Service("accountService")
                            public class AccountServiceImpl implements AccountService {

                                @Autowired
                                private AccountDao accountDao;

                                public void setAccountDao(AccountDao accountDao) {
                                    this.accountDao = accountDao;
                                }

                                public void transfer(String outName, String inName, Integer money) {
                                    accountDao.inMoney(outName, money);
                            //                int a = 1 / 0;
                                    accountDao.outMoney(inName, money);
                                }
                            }
                        ```
                    AccountService
                    ```java
                        package com.spring.service;

                        import org.springframework.transaction.annotation.Isolation;
                        import org.springframework.transaction.annotation.Propagation;
                        import org.springframework.transaction.annotation.Transactional;

                        @Transactional(isolation = Isolation.DEFAULT)
                        public interface AccountService {

                            // 指定事务管理器
                            @Transactional(
                                    readOnly = false,
                                    timeout = -1,
                                    isolation = Isolation.DEFAULT,
                                    rollbackFor = {}, // java.lang.ArithmeticException.class, IOException.class
                                    propagation = Propagation.REQUIRED
                            )
                            void transfer(String outName, String inName, Integer money);
                        }
                    ```
        - resources
            jdbc.properties
            ```bash
                jdbc.driver=com.mysql.jdbc.Driver
                jdbc.url=jdbc:mysql://localhost:3306/spring_db?useUnicode=true&characterEncoding=utf-8&useSSL=false&serverTimezone=GMT
                jdbc.username=root
                jdbc.password=gzh***
            ```
    - test
        - java
            - com.spring.service
                - testDemo
                    ```java
                        package com.spring.service;

                        import com.spring.config.SpringConfig;
                        import org.junit.Test;
                        import org.junit.runner.RunWith;
                        import org.springframework.beans.factory.annotation.Autowired;
                        import org.springframework.test.context.ContextConfiguration;
                        import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

                        // 设定spring 加载器
                        @RunWith(SpringJUnit4ClassRunner.class)
                        // 设置加载的spring上下文对应的配置
                        @ContextConfiguration( classes = SpringConfig.class)
                        public class testDemo {

                            @Autowired
                            private AccountService accountService;

                            @Test
                            public void transferDome() {
                                accountService.transfer("lisi", "zhangsan", 100);
                            }
                        }
                    ```
- pom.xml
    配置同上