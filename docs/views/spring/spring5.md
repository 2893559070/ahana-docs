# Spring5

spring理念：使现有的技术更加容易使用，本身是一个大杂烩，整合了现有的技术框架

## 简介

- spring是一个开源的免费的框架（容器）
- spring是一个轻量级的、非入侵式的框架
- 控制反转（IOC），面向切面编程（AOP）
- 支持事务的处理，对框架整合的支持

  总结：spring就是一个轻量级的控制反转（IOC）和切面编程（AOP）的框架

## 组成及扩展

- 组成
  <img :src="$withBase('/spring/spring_zc.png')" alt="foo">

- 扩展
  <img :src="$withBase('/spring/spring_kz.png')" alt="foo">

  - Spring Boot
    - 一个快速开发的脚手架
    - 基础SpringBoot可以快速的开发单个微服务
    - 约定大约配置
  - SpringCloud
    - SoringCloud是基于SpringBoot实现的

## IOC

- IOC理论推导
  1. UserDao 接口
  2. UserImpl 实现类
  3. UserService 业务接口
  4. UserServiceImpl 业务实现类

用户实际访问业务层，业务层请求dao层

之前的业务中，用户的需求可能会影响原来的代码，需要根据用户的需求修改源代码！
代码量是非常大，修改一次的成本代价十分麻烦！

接口注入

```java
  /* 之前 */
  // 固定一个接口 后续管理十分麻烦
  private UserDao userDao = new UserDaoImpl();

  /* IOC思想 */
  private UserDao userDao;

  // 利用set进行动态实现值的注入
  public void setUserDao(UserDao userDao) {
    this.userDao = userDao;
  }
```

### 容器

- 配置元数据
applicationContext.xml

  ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <beans xmlns="http://www.springframework.org/schema/beans"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans.xsd">

      <!-- 
        使用spring来创建对象，在spring这些都称为Bean
        bean = 对象  new Hello();
        id：变量名
        class：对象
        property 相当于给对象中的属性设置一个值

        这个就叫控制反转 这个类被spring托管了
      -->
      <bean id="hello" class="com.spring.pojo.Hello">
        <property name="str" value="Spring">
      </bean>

      <!-- 接口注册 -->
      <bean id="UserImpl" class="com.spring.dao.UserDaoImpl"/>

      <bean id="userServiceImpl" class="com.spring.service.UserServiceImpl">
        <!-- 
          ref：引用spring容器中创建好的对象
          value：具体的值，基本数据类型

          相当于：
          private UserDao userDao = new UserDaoImpl();
        -->
        <property name="userDao" ref="userImpl"/>
      </bean>

    </beans>
  ```

- 实例化容器

  ```java
    // 获取spring的上下文对象 加载元数据
    ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

    // 我们的对象现在都在spring中管理了，我们要使用，直接去里面取出来就可以！
    Hello hello = (Hello) context.getBean("hello");
    String str = hello.getStr(); // 值为Spring

    // 获取注册的接口
    UserDaoImpl userDaoImpl = (UserDaoImpl) context.getBean("userServiceImpl");
    userDaoImpl.getUser(); // 获取接口数据
  ```

### IOC创建对象的方式

1. 使用无参构造创建对象，默认！
2. 假设我们要使用有参构造创建对象

总结：在配置文件加载的时候，在容器中管理的对象就已经初始化了

  ```xml
    <!-- 第一种：下标赋值 -->
    <bean id="user" class="com.spring.pojo.User">
      <constructor-arg index="0" value="下标赋值"/>
    </bean>

    <!-- 第二种：通过类型创建，不建议使用 -->
    <bean id="user" class="com.spring.pojo.User">
      <constructor-arg type="java.lang.String" value="类型创建"/>
    </bean>

    <!-- 第三种：通过参数名来设置 -->
    <bean id="user" class="com.spring.pojo.User">
      <constructor-arg name="name" value="参数名"/>
    </bean>
  ```

### spring配置说明

- 别名
- Bean的配置
- import
  一般用于团队开发使用，可以将多个配置文件，导入合并为一个

  ```xml
    <!-- 别名：可以使用别名 getBean 方法可以获取到对象 -->
    <bean id="user" class="com.spring.pojo.User">
      <property name="name" value="起别名">
    </bean>
    <alias name="user" alias="nweUser"/>

    <!-- 
      id：bean 的唯一标识符，也就是相当于对象名
      class：bean 对象所对应的全限定名：包名 + 类型
      name：也是别名，可以同时取多个别名 getBean 方法可以获取到对象
     -->
    <bean id="user"
          class="com.spring.pojo.User"
          name="user1,user2"
    >
      <property name="name" value="bean">
    </bean>

    <!-- import 引入bean中的内容相同会合并-->
    <import resource="beans1.xml"/>
    <import resource="beans2.xml"/>
  ```

<!-- ## 依赖注入 -->

### set注入【重点】

- 依赖：bean对象的创建依赖于容器
- bean对象中的所有属性，由容器来注入

<img :src="$withBase('/spring5/1.png')" alt="foo">

```xml
  <bean id="address" class="类的路径">
    <property name="address" ref="南京"/>
  </bean>
  <bean id="student" class="类的路径">
    <!-- 普通值注入 -->
    <property name="name" value="张三"/>
    <!-- bean注入，ref -->
    <property name="address" ref="address"/>

    <!-- 数组注入 -->
    <property name="books">
      <array>
        <value>红楼梦</value>
        <value>西游记</value>
      </array>
    </property>

    <!-- list -->
    <property name="hobbys">
      <list>
        <value>听歌</value>
        <value>看电影</value>
      </list>
    </property>

    <!-- Map -->
    <property name="card">
      <map>
        <entry key="username" value="zhangsan"/>
        <entry key="password" value="123456"/>
      </map>
    </property>

    <!-- Set -->
    <property name="games">
      <set>
        <value>aaa</value>
        <value>bbb</value>
        <value>ccc</value>
      </set>
    </property>

    <!-- null -->
    <property name="wife">
      <null/>
    </property>

    <!-- Properties -->
    <property name="info">
      <props>
        <prop key="学号">111</prop>
        <prop key="性别">男</prop>
      </props>
    </property>
  </bean>
```

### c命名和p命名空间注入 （扩展方式）

需要导入xml约束

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:p="http://www.springframework.org/schema/p"
    xmlns:c="http://www.springframework.org/schema/c"
    xsi:schemaLocation="http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans.xsd">

  <!-- p命名空间注入，可以直接注入属性的值：property -->
  <bean id="user" class="类路径" p:name="张三" p:age="18"/>
  
  <!-- c命名空间注入，通过构造器注入：construct-args -->
  <bean id="user2" class="类路径"
    c:name="lisi"
    c:age="18"
  />

</beans>
```

### bean的作用域

1. 单例模式（spring默认机制）

```xml
  <bean id="address" class="类的路径" p:name="张三" p:age="18" scope="singleton"/>

  Address address1 = context.getBean("address", Address.class);
  Address address2 = context.getBean("address", Address.class);

  System.out.println(address1 == address2) // true
```

2. 原型模式（每次从容器中get的时候，都会产生一个新对象）

```xml
  <bean id="address" class="类的路径" p:name="张三" p:age="18" scope="property"/>

  Address address1 = context.getBean("address", Address.class);
  Address address2 = context.getBean("address", Address.class);

  System.out.println(address1 == address2) // false
```

3. 其余的 request、session、application、websocket 这些只能在web开发中使用到！

### bean的自动装配

- 自动装配是spring满足bean依赖一种方式
- spring会在上下文中自动寻找，并自动给bean装配属性

在spring中三种装配的方式

1. 在xml中显示的配置
2. 在java中显示配置
3. 隐式的自动装配bean【重要】

<img :src="$withBase('/spring5/2.png')" alt="foo">

```xml
  <bean id="cat" class="----"/>
  <bean id="dog" class="----"/>

  <bean id="people" class="----">
    <property name="name" value="张三"/>
    <property name="dog" ref="dog"/>
    <property name="cat" ref="cat"/>
  </bean>

  <!-- 
    自动装配 
    autowire="byName"：会自动在容器上下文中查找，和自己对象set方法后面的值对应的beanid
    autowire="byType"：会自动在容器上下文中查找，和自己对象属性类型对应的beanid，类型必须在容器中唯一才可以
  -->

  <!--  autowire="byName" -->
  <bean id="people" class="----" autowire="byName">
    <property name="name" value="张三"/>
    <!-- <property name="dog" ref="dog"/>
    <property name="cat" ref="cat"/> -->
  </bean>

  <!--  autowire="byType" -->
  <bean id="people" class="----" autowire="byType">
    <property name="name" value="张三"/>
    <!-- <property name="dog" ref="dog"/>
    <property name="cat" ref="cat"/> -->
  </bean>

  People people = context.getBean("people", People.class);
  people.getDog().shout();
  people.getCat().shout();
```

### 注解实现自动装配

要是用注解须知：

1. 导入约束 context
2. 配置注解的支持 `<context:annotation-config/>`

```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <beans xmlns="http://www.springframework.org/schema/beans"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns:context="http://www.springframework.org/schema/context"
      xsi:schemaLocation="http://www.springframework.org/schema/beans
          https://www.springframework.org/schema/beans/spring-beans.xsd
          http://www.springframework.org/schema/context
          https://www.springframework.org/schema/context/spring-context.xsd">

      <!-- 开启注解支持 -->
      <context:annotation-config/>

      <bean id="cat" class="----"/>
      <bean id="dog" class="----"/>
      <bean id="dog222" class="----"/>

  </beans>
```

```java
  /*
    使用Autowired注解自动装配

    写在属性上 （注解使用反射来实现，可以不用编写set方法，前提是在容器中已被注入）

    Autowired(required = false) 说明这个对象可以为null 否则不允许为空，类型，名字

    @Nullable 说明这个字段可以为null

    @Qualifier(value = "dog222") 指定实现自动装配的bean，需要与声明的类型一致

    @Resource 自动装配 先根据id查找再根据类型查找，类型必须在容器中唯一才可以，都找不到在报错
      多个类型可以指定名字 @Resource(name = "dog") ， 名字，类型
  */ 
  public class People {
    // @Autowired
    @Resource
    private Cat cat;

    @Autowired
    @Qualifier(value = "dog222")
    private Dog dog;

    private String name;

    public People(@Nullable String name) {
      this.name = name;
    }

  }

  // 使用
  People people = context.getBean("people", People.class);
  people.getDog().shout();
  people.getCat().shout();
```

### spring注解开发

spring4之后，要使用注解开发，必须要保证aop的包导入了

1. bean
2. 属性如何注入

```java
  // bean
  @Component
  public class User {

    // 属性注入
    @Value('张三')
    public String name;
  }
```

3. 衍生的注解

  @Component有几个衍生注解，我们在web开发中，会按照mvc三层架构分层
    - dao           接口层           【 @Repository 】
    - service       业务层           【 @Service 】
    - controller    操作层           【 @Controller 】
      这四个注解功能都是一样的，都是代表将某个类注册到Spring中，装配Bean

4. 自动装配置

- @Autowired      : 自动装配，先类型，在名字
  如果Autowired不能自动装配上属性，则需要通过@Qualifier(value = "xxx") 指定bean
- @Resource       : 自动装配，先名字，在类型
  如果容器出现多个类型相同的bean，则通过 @Resource(name = "xxx") 指定bean
- @Nullable       : 字段标记，说明这个字段可以为null

5. 作用域
  @Scope("singleton")        : 配置模式 单例 singleton 原型模式 property

6. 小结

- xml 更加万能，适用于任何场景！维护简单方便
- 注解 不是自己的类使用不了，维护相对复杂
- xml用来管理bean，注解只负责完成属性的注入

### 使用存java的方式配置Spring

不使用spring的xml配置，完全使用java配置
javaConfig是spring的一个子项目，在spring4之后，它成为了一个核心功能

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

## AOP

需要学习代理模式，代理模式是SpringAOP的底层，【SpringAOP和SpringMVC】面试必问

代理模式的分类

- 静态代理
  角色分析
  - 抽象角色：一般会使用接口或者抽象类类解决
  - 真实角色：被代理的角色
  - 代理角色：代理真实角色，代理真实角色后，我们一般会做一些附属操作
  - 客户：访问代理对象的人
  缺点
  - 一个真实角色就会产生一个代理角色，代码量会翻倍，开发效率会变低

- 动态代理
  - 动态代理和静态代理角色一样
  - 动态代理的类是动态生成的，不是我们直接写好的
  - 动态代理分为两大类：基于接口的动态代理，基于类的动态代理
    - 基于接口--JDK代理
    - 基于类：cglib
    - java字节码实现：javasist
  - 动态代理的是接口

  <img :src="$withBase('/spring5/5.png')" alt="foo">
  <img :src="$withBase('/spring5/5-1.png')" alt="foo">
  <img :src="$withBase('/spring5/5-2.png')" alt="foo">

  需要了解两个类：Proxy（代理），invocationHandler（调用处理程序）
    <img :src="$withBase('/spring5/3.png')" alt="foo">

  - 代理模式
    <img :src="$withBase('/spring5/4.png')" alt="foo">

  ```xml
    <!-- 使用spring实现aop -->
    <dependency>
      <groupId>org.aspectj</groupId>
      <artifactId>aspectjweaver</artifactId>
      <version>1.9.4</version>
    </dependency>
  ```

  ```java
    /**
      方式一：使用spring实现aop接口 【主要是SpringAPI接口实现】
    */
    // 日志类 Log 前置
    public class Log implements MethodBeforeAdvice {
      /*
        method: 要执行的目标对象的方法
        args: 参数
        target: 目标对象
      */
      public void before(Method method, Object[] args, Object target) throws {
        System.out.println(target.class.getName() + "的" + method.getName() + "被执行了")
      }
    }

    // 日志类 AfterLog 后置
    public class AfterLog implements AfterReturningAdvice {
      /*
        returnValue: 返回值
        method: 要执行的目标对象的方法
        args: 参数
        target: 目标对象
      */
      public void afterReturning(Object returnValue, Method method, Object[] args, Object target) throws {
        System.out.println(target.class.getName() + "的" + method.getName() + "被执行了" + "返回结果为" + returnValue)
      }
    }


    /**
      方式二：自定义类 【主要是切面定义】
    */

    public class DiyPointCut {
      public void before() {
        System.out.println("方法执行前")
      }

      public void after() {
        System.out.println("方法执行后")
      }
    }
  ```

  aop的容器配置

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


        <bean id="userService" class="包名.UserServiceImpl" />
        <bean id="log" class="包名.类名.Log" />
        <bean id="afterLog" class="包名.类名.AfterLog" />

        <!-- 方式一：使用原生的spring API接口 -->
        <!-- 配置aop：需要导入aop的约束 -->
        <aop:config>
          <!-- 切入点: expression：表达式，expression（修饰词，返回值，包名.类名.方法名(方法的参数) ） -->
          <aop:pointcut id="pointcut" expression="expression(* com.com.service.UserServiceImpl.*(..))"/>

          <!-- 执行环绕增加 -->
          <aop:advisor advice-ref="log" pointcut-ref="pointcut"/>
          <aop:advisor advice-ref="afterLog" pointcut-ref="pointcut"/>
        </aop:config>

        <!-- 方式二：自定义类 -->
        <bean id="diy" class="包名.类名.DiyPointCut"/>
        <aop:config>
          <!-- 自定义的切面，ref要引用的类 -->
          <aop:aspect ref="diy">
            <!-- 切入点：配置在哪个类进行切入 -->
            <aop:pointcut id="point" expression="expression(* com.com.service.UserServiceImpl.*(..))"/>
            <!-- 通知 -->
            <aop:before method="before" pointcut-ref="point"/>
            <aop:after method="after" pointcut-ref="point"/>
          </aop:aspect>
        </aop:config>

        <!--方式三 -->
        <bean id="annotationPointCut" class="包名.类名.AnnotationPointCut"/>
        <!-- 开启注解支持 JDK代理proxy-target-class="false", cglib proxy-target-class="true" -->
        <aop:aspectj-autoproxy proxy-target-class="false" />
    </beans>
  ```

### 方式三使用注解实现AOP

```java
  @Aspect // 标注这个类是一个切面
  public class AnnotationPointCut {

    @Before("expression(* com.com.service.UserServiceImpl.*(..))")
    public void before() {
      System.out.println("方法执行前")
    }

    @After("expression(* com.com.service.UserServiceImpl.*(..))")
    public void after() {
      System.out.println("方法执行后")
    }

    // 在环绕增强中，我们可以给定一个参数，代表我们要获取处理切入的点；
    @Around("expression(* com.com.service.UserServiceImpl.*(..))")
    public void around(ProceedingJoinPoint jp) {
      System.out.println("环绕前")

      // 执行方法
      Object proceed = jp.proceed();

      System.out.println("环绕后")
    }
  }
```
