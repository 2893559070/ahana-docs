# 常用配置依赖

## spring

### 常用依赖

```xml
  <dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-webmvc</artifactId>
    <version>5.2.0.RELEASE</version>
  </dependency>

  <!-- 使用spring实现aop -->
  <dependency>
    <groupId>org.aspectj</groupId>
    <artifactId>aspectjweaver</artifactId>
    <version>1.9.4</version>
  </dependency>
```

### applicationContext 容器配置

```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <beans xmlns="http://www.springframework.org/schema/beans"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns:context="http://www.springframework.org/schema/context"
      xmlns:aop="http://www.springframework.org/schema/aop"
      xsi:schemaLocation="http://www.springframework.org/schema/beans
          https://www.springframework.org/schema/beans/spring-beans.xsd
          http://www.springframework.org/schema/context
          https://www.springframework.org/schema/context/spring-context.xsd">

      <!-- 开启注解支持 -->
      <context:annotation-config/>

      <!-- 包扫描 指定要扫描的包，这个包下的注解就会生效 -->
      <context:component-scan base-package="***.项目"/>

      <!-- 配置aop：需要导入aop的约束 -->
      <aop:config>
        <!-- 切入点: expression：表达式，expression（修饰词，返回值，包名.类名.方法名(方法的参数) ） -->
        <aop:pointcut id="pointcut" expression="expression(* com.com.service.UserServiceImpl.*(..))"/>

        <!-- 执行环绕增加 -->
        <aop:advisor advice-ref="Bean的id" pointcut-ref="pointcut"/>
      </aop:config>

  </beans>
```

### 获取容器

```java
  ApplicationContext ctx = new ClassPathXmlApplicationContext("scripting/beans.xml");
  ctx.getBean('xxx', Object.class); // beanId 类型反射或者强转
```

### 注解说明

- @Autowired      : 自动装配，先类型，在名字
  如果Autowired不能自动装配上属性，则需要通过@Qualifier(value = "xxx") 指定bean
- @Resource       : 自动装配，先名字，在类型
  如果容器出现多个类型相同的bean，则通过 @Resource(name = "xxx") 指定bean
- @Nullable       : 字段标记，说明这个字段可以为null

- @Component      : 组件，注解放在类上，说明这个类被spring管理了，等价于 `<bean id="user" class="***.pojo.User"/>`
  @Value('张三')相当于`<property name="name" value="张三"/>`
  @Component有几个衍生注解，我们在web开发中，会按照mvc三层架构分层
  - dao           接口层           【 @Repository 】
  - service       业务层           【 @Service 】
  - controller    操作层           【 @Controller 】
    这四个注解功能都是一样的，都是代表将某个类注册到Spring中，装配Bean

  @Scope("singleton")        : 配置模式 单例 singleton 原型模式 property

  ```java
    @Component
    @Scope("singleton")
    public class User {

      @Value('张三')
      public String name;
    }
  ```

- 使用存java的方式配置Spring
  不属于spring
  - @Configuration                          : 代表这是一个配置类，就和我们之前看的appconfigContext.xml一样
  - @ComponentScan("***.项目")              : 包扫描 指定要扫描的包，这个包下的注解就会生效
  - @Import(Class.class)                    ：引入类

  ```java
    /* 配置容器 */
    @Configuration // 这个也会被Spring容器托管，注册到容器中，因为本身就是一个@Component，@Configuration代表这是一个配置类，就和我们之前看的appconfigContext.xml一样
    @ComponentScan("***.项目") // 包扫描 指定要扫描的包，这个包下的注解就会生效
    @Import(Class.class) // 引入类
    public class Appconfig {

        /*
          注册一个bean，就相当于我们之前写的一个bean标签
          这个方法的名字，就相当于bean标签中的id属性
          这个方法的返回值，就相当于bean标签中的class属性
        */ 
        @Bean
        public User user() {
          return new User();
        }
    }

    /* 获取容器 */
    public class Tset {
      public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(Appconfig.class);
        context.getBean("user");
      }
    }
  ```
