# SpringCloud02

## Feign 声明式服务调用

### Feign 概述

Feign 是一个声明式的 REST 客户端，它用了基于接口的注解方式，很方便实现客户端配置。
Feign 最初由 Netflix 公司提供，但不支持SpringMVC注解，后由 SpringCloud 对其封装，支持了SpringMVC注解，让使用者更易于接受。
  <img :src="$withBase('/springcloud/09.png')" alt="foo">

### Feign 快速入门

1. 在消费端引入 open-feign 依赖

```xml
<!-- feign -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-openfeign</artifactId>
</dependency>
```

```yml
server:
  port: 9000

# eureka 配置
eureka:
  instance:
    hostname: localhost # 主机名
    lease-renewal-interval-in-seconds: 3 # 3秒发一次心跳包
    lease-expiration-duration-in-seconds: 9 # 9秒没有发心跳包，就把我干掉

  client:
    service-url:
#      defaultZone: http://eureka-server02:8763/eureka,http://eureka-server01:8762/eureka # eureka服务端地址，与客户端通信
      defaultZone: http://localhost:8761/eureka # eureka服务端地址，与客户端通信
    register-with-eureka: true # 是否将自己的路径，注册到eureka上： server 不需要， provider 需要
    fetch-registry: true # 是否需要从eureka中抓取路径： server 不需要， client 需要

spring:
  application:
    name: feign-consumer # 应用名称，可以获取访问路径

ribbon:
  ConnectTimeout: 1000   #连接超时时间,毫秒
  ReadTimeout: 1000     #逻辑处理超时时间,毫秒

# 设置日志级别 debug，feign只支持记录debug级别的日志
logging:
  level:
    com.eureka: debug
```

2. 编写Feign调用接口
feign/GoodsFeignClient.java

```java
/**
 * feign声明式接口。发起远程调用
 *
 *  1. 定义接口
 *  2. 接口上添加注解 @FeignClient
 *  3. 编写调用接口，接口的声明规则和提供方法接口保持一致
 *  4. 注入该接口对象，调用接口的方法完成远程调用
 *  5. 日志 FeignLogConfig.class
 * */

@FeignClient(value = "FEIGN-PROVIDER", configuration = FeignLogConfig.class)
public interface GoodsFeignClient {

    @RequestMapping("/goods/findOne/{id}")
    public Goods findGoodsById(@PathVariable("id") int id);
}
```

3. 在启动类 添加 @EnableFeignClients 注解，开启Feign功能
ConsumerApp.java

```java
@SpringBootApplication
@EnableEurekaClient
@EnableDiscoveryClient // 激活 DiscoveryClient
@EnableFeignClients // 开启feign功能
public class ConsumerApp {
    public static void main(String[] args) {
        SpringApplication.run(ConsumerApp.class, args);
    }
}
```

- config/FeignLogConfig.java

```java
@Configuration
public class FeignLogConfig {

    /**
     * NONE：不记录
     * BASIC：记录基本的请求行，响应状态码数据
     * HEADERS：记录基本的请求行，响应状态码数据，记录响应头信息
     * FULL：记录完成的请求 响应数据
     * */
    @Bean
    public Logger.Level level() {
        return Logger.Level.FULL;
    }
}
```

4. 测试调用

### Feign 其他功能

#### 超时设置

- Feign 底层依赖于 Ribbon 实现负载均衡和远程调用。
- Ribbon默认1秒超时。
- 超时配置：

```yml
  ribbon:
    ConnectTimeout: 1000 #连接超时时间,毫秒  
    ReadTimeout: 1000 #逻辑处理超时时间,毫秒
```

#### 日志记录

- Feign 只能记录 debug 级别的日志信息。
  logging:
    level:
      com.itheima: debug
- 定义Feign日志级别Bean
  @Bean
  Logger.Level feignLoggerLevel() {
    return Logger.Level.FULL;
  }
- 启用该Bean：
  @FeignClient(configuration = XxxConfig.class)

## Hystrix 熔断器

### Hystrix 概述

Hystix 是 Netflix 开源的一个延迟和容错库，用于隔离访问远程服务、第三方库，防止出现级联失败（雪崩）。
雪崩：一个服务失败，导致整条链路的服务都失败的情形。

  <img :src="$withBase('/springcloud/10.png')" alt="foo">

- Hystix 主要功能
  - 隔离
    1. 线程池隔离
        <img :src="$withBase('/springcloud/11.png')" alt="foo">
    2. 信号量隔离
      <img :src="$withBase('/springcloud/12.png')" alt="foo">

  - 降级
    - 当服务发生异常或调用超时，返回默认数据
      <img :src="$withBase('/springcloud/13.png')" alt="foo">
  - 熔断
  -限流

### Hystrix 降级

  <img :src="$withBase('/springcloud/14.png')" alt="foo">

#### Hystrix 降级 – 服务提供方

1. 在服务提供方，引入 hystrix 依赖

```xml
  <!-- hystrix -->
  <dependency>
      <groupId>org.springframework.cloud</groupId>
      <artifactId>spring-cloud-starter-netflix-hystrix</artifactId>
  </dependency>
```

2. 定义降级方法
3. 使用 @HystrixCommand 注解配置降级方法

```java
@RestController
@RequestMapping("/goods")
public class GoodsController {

    @Autowired
    private GoodService goodService;

    @Value("${server.port}")
    private int port;

    /**
     * 降级
     * 1. 出现一场
     * 2. 服务调用超时
     * 3. @HystrixCommand 指定失败后调用的方法
     *      1. @HystrixProperty(name="execution.isolation.thread.timeoutInMilliseconds", value = "5000")
     *         设置超时时间，默认为1秒
     * */

    @RequestMapping("/findOne/{id}")
    @HystrixCommand(fallbackMethod = "findOne_fallback", commandProperties = {
            @HystrixProperty(name="execution.isolation.thread.timeoutInMilliseconds", value = "5000")
    })
    public Goods findOne(@PathVariable("id") int id) {
        Goods goods = goodService.findOne(id);

//        int i = 3 / 0; // 制造异常

        // 制造超时时间
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        goods.setTitle(goods.getTitle() + port);
        return goods;
    }

    /**
     * 定于降级方法
     * 1. 方法和返回值需要和原方法一样
     * 2. 方法的参数需要和原方法一样
     * */
    public Goods findOne_fallback(int id) {
        Goods goods = new Goods();
        goods.setTitle("降级了：" + id);

        return goods;
    }
}
```

4. 在启动类上开启Hystrix功能：@EnableCircuitBreaker

```java
@SpringBootApplication
@EnableEurekaClient
@EnableCircuitBreaker // 开启熔断器 Hystrix功能
public class ProviderApp {
    public static void main(String[] args) {
        SpringApplication.run(ProviderApp.class, args);
    }
}
```

#### Hystrix 降级 – 服务消费方

- feign 组件已经集成了 hystrix 组件。

```xml
  <!-- feign -->
  <dependency>
      <groupId>org.springframework.cloud</groupId>
      <artifactId>spring-cloud-starter-openfeign</artifactId>
  </dependency>
```

- 定义feign 调用接口实现类，复写方法，即 降级方法
  - GoodsFeignClient.java
  - 在 @FeignClient 注解中使用 fallback 属性设置降级处理类。

    ```java
      @FeignClient(value = "HYSTRIX-PROVIDER", fallback = GoodsFeignClientFallback.class)
      public interface GoodsFeignClient {
          @GetMapping("/goods/findOne/{id}")
          public Goods findGoodsById(@PathVariable("id") int id);
      }
    ```

    ```java
      /**
        * Feign 客户端的降级处理类
        * 1. 定义类 实现Feign 客户端接口
        * 2. 使用@Component注解将该类的Bean加入SpringIOC容器
      */

      @Component
      public class GoodsFeignClientFallback implements GoodsFeignClient {
          @Override
          public Goods findGoodsById(int id) {
              Goods goods = new Goods();
              goods.setTitle("被降级了：" + id);
              return goods;
          }
      }
    ```

- 配置开启 feign.hystrix.enabled = true
  - application.yml

  ```yml
    spring:
      application:
        name: hystrix-provider # 应用名称，可以获取访问路径
  ```

### Hystrix 熔断

Hystrix 熔断机制，用于监控微服务调用情况，当失败的情况达到预定的阈值（5秒失败20次），会打开断路器，拒绝所有请求，直到服务恢复正常为止。

- circuitBreaker.sleepWindowInMilliseconds：监控时间
- circuitBreaker.requestVolumeThreshold：失败次数
- circuitBreaker.errorThresholdPercentage：失败率

    <img :src="$withBase('/springcloud/15.png')" alt="foo">

```java
  @HystrixCommand(fallbackMethod = "findOne_fallback", commandProperties = {
          // 超时时间 默认1000毫秒
          @HystrixProperty(name="execution.isolation.thread.timeoutInMilliseconds", value = "5000"),
          // 监控的时间 默认5000毫秒
          @HystrixProperty(name="circuitBreaker.sleepWindowInMilliseconds", value = "5000"),
          // 失败的次数 默认20次
          @HystrixProperty(name="circuitBreaker.requestVolumeThreshold", value = "20"),
          // 失败率 默认50%
          @HystrixProperty(name="circuitBreaker.errorThresholdPercentage", value = "50"),
  })
```

### Hystrix 熔断监控

- Hystrix 提供了 Hystrix-dashboard 功能，用于实时监控微服务运行状态。
- 但是Hystrix-dashboard只能监控一个微服务。
- Netflix 还提供了 Turbine ，进行聚合监控。

  <img :src="$withBase('/springcloud/16.png')" alt="foo">

#### Turbine聚合监控

**1. 创建监控模块**

创建hystrix-monitor模块，使用Turbine聚合监控多个Hystrix dashboard功能,

**2. 引入Turbine聚合监控起步依赖**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <parent>
        <artifactId>hystrix-parent</artifactId>
        <groupId>com.itheima</groupId>
        <version>1.0-SNAPSHOT</version>
    </parent>
    <modelVersion>4.0.0</modelVersion>

    <artifactId>hystrix-monitor</artifactId>
    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
        <java.version>1.8</java.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-hystrix-dashboard</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-turbine</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
        </dependency>


        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>

</project>
```

**3. 修改application.yml**

```yml
spring:
  application.name: hystrix-monitor
server:
  port: 8769
turbine:
  combine-host-port: true
  # 配置需要监控的服务名称列表
  app-config: hystrix-provider,hystrix-consumer
  cluster-name-expression: "'default'"
  aggregator:
    cluster-config: default
  #instanceUrlSuffix: /actuator/hystrix.stream
eureka:
  client:
    serviceUrl:
      defaultZone: http://localhost:8761/eureka/

```

**4. 创建启动类**

```java

@SpringBootApplication
@EnableEurekaClient

@EnableTurbine //开启Turbine 很聚合监控功能
@EnableHystrixDashboard //开启Hystrix仪表盘监控功能
public class HystrixMonitorApp {

    public static void main(String[] args) {
        SpringApplication.run(HystrixMonitorApp.class, args);
    }

}

```

##### 二、修改被监控模块

需要分别修改 hystrix-provider 和 hystrix-consumer 模块：

**1、导入依赖：**

```xml
  <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-hystrix</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-hystrix-dashboard</artifactId>
        </dependency>
```

**2、配置Bean**

此处为了方便，将其配置在启动类中。(高版本需要，低版本不需要)

```java
  @Bean
  public ServletRegistrationBean getServlet() {
      HystrixMetricsStreamServlet streamServlet = new HystrixMetricsStreamServlet();
      ServletRegistrationBean registrationBean = new ServletRegistrationBean(streamServlet);
      registrationBean.setLoadOnStartup(1);
      registrationBean.addUrlMappings("/actuator/hystrix.stream"); // 默认路径
      registrationBean.setName("HystrixMetricsStreamServlet");
      return registrationBean;
  }
```

**3、启动类上添加注解@EnableHystrixDashboard**

```java

@EnableDiscoveryClient
@EnableEurekaClient
@SpringBootApplication
@EnableFeignClients 
@EnableHystrixDashboard // 开启Hystrix仪表盘监控功能
public class ConsumerApp {
  public static void main(String[] args) {
      SpringApplication.run(ConsumerApp.class,args);
  }
  @Bean
  public ServletRegistrationBean getServlet() {
      HystrixMetricsStreamServlet streamServlet = new HystrixMetricsStreamServlet();
      ServletRegistrationBean registrationBean = new ServletRegistrationBean(streamServlet);
      registrationBean.setLoadOnStartup(1);
      registrationBean.addUrlMappings("/actuator/hystrix.stream");
      registrationBean.setName("HystrixMetricsStreamServlet");
      return registrationBean;
  }
}

```

##### 三、启动测试

**1、启动服务：**

- eureka-server

- hystrix-provider

- hystrix-consumer

- hystrix-monitor

**2、访问：**

在浏览器访问<http://localhost:8769/hystrix/> 进入Hystrix Dashboard界面

  <img :src="$withBase('/springcloud/1585421193757.png')" alt="foo">

界面中输入监控的Url地址 <http://localhost:8769/turbine.stream，监控时间间隔2000毫秒和title>，如下图

  <img :src="$withBase('/springcloud/1585421278837.png')" alt="foo">

- 实心圆：它有颜色和大小之分，分别代表实例的监控程度和流量大小。如上图所示，它的健康度从绿色、黄色、橙色、红色递减。通过该实心圆的展示，我们就可以在大量的实例中快速的发现故障实例和高压力实例。
- 曲线：用来记录 2 分钟内流量的相对变化，我们可以通过它来观察到流量的上升和下降趋势。

  <img :src="$withBase('/springcloud/1167856120180.png')" alt="foo">

## Gateway 网关

### 网关概述

- 网关旨在为微服务架构提供一种简单而有效的统一的API路由管理方式。
- 在微服务架构中，不同的微服务可以有不同的网络地址，各个微服务之间通过互相调用完成用户请求，客户端可能通过调用N个微服务的接口完成一个用户请求。
  - 存在的问题：
    - 客户端多次请求不同的微服务，增加客户端的复杂性
    - 认证复杂，每个服务都要进行认证
    - http请求不同服务次数增加，性能不高
- 网关就是系统的入口，封装了应用程序的内部结构，为客户端提
  - 供统一服务，一些与业务本身功能无关的公共逻辑可以在这里实现，
  - 诸如认证、鉴权、监控、缓存、负载均衡、流量管控、路由转发等
- 在目前的网关解决方案里，有Nginx+ Lua、Netflix Zuul 、Spring Cloud Gateway等等

  <img :src="$withBase('/springcloud/17.png')" alt="foo">

### Gateway 网关快速入门

  <img :src="$withBase('/springcloud/18.png')" alt="foo">

1. 搭建网关模块
2. 引入依赖：starter-gateway

```xml
  <dependencies>
      <!--引入gateway网关-->
      <dependency>
          <groupId>org.springframework.cloud</groupId>
          <artifactId>spring-cloud-starter-gateway</artifactId>
      </dependency>

      <dependency>
          <groupId>org.springframework.cloud</groupId>
          <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
      </dependency>
  </dependencies>
```

3. 编写启动类

```java
@SpringBootApplication
@EnableEurekaClient
public class ApiGatewayApp {
    public static void main(String[] args) {
        SpringApplication.run(ApiGatewayApp.class, args);
    }
}
```

4. 编写配置文件

```yml
server:
  port: 80

spring:
  application:
    name: api-gateway-server

  cloud:
    # 网关配置
    gateway:
      #配置路由：转发规则
      routes:
      # id：唯一标识。默认是一个UUID
      # uri：转发路径
      # predicates：条件，用于网关路径的匹配规则
      # filters：配置局部过滤器
        - id: gateway-provider
          # 静态路由
          # uri: http://localhost:8000/
          # 动态路由
          uri: lb://GATEWAY-PROVIDER
          predicates:
            - Path=/goods/**
          filters:
            - AddRequestParameter=username,zhangsan

        - id: gateway-consumer
          # 静态路由
          # uri: http://localhost:9000/
          # 动态路由
          uri: lb://GATEWAY-CONSUMER
          predicates:
            - Path=/order/**
      discovery:
        locator:
          enabled: true # 请求路径前添加微服务名称
          lower-case-service-id: true # 允许为小写

# eureka 配置
eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka # eureka服务端地址，与客户端通信
```

5. 启动测试

### Gateway 网关路由配置

引入eureka-client配置
修改uri属性：uri: lb://服务名称

```yml
  # 静态路由
  # uri: http://localhost:9000/
  # 动态路由 需要引入 eureka-client配置
  uri: lb://GATEWAY-CONSUMER

# eureka 配置
eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka # eureka服务端地址，与客户端通信
```

#### 微服务名称配置

```yml
spring:
  cloud:
    gateway:
      discovery:
        locator:
          enabled: true # 请求路径前添加微服务名称 ( 请求时url上 添加名称 与 不添加名称 都可以正常发起请求)
          lower-case-service-id: true # 允许为小写
```

### Gateway 网关过滤器

- Gateway 支持过滤器功能，对请求或响应进行拦截，完成一些通用操作。
- Gateway 提供两种过滤器方式：“pre”和“post”
- pre 过滤器，在转发之前执行，可以做参数校验、权限校验、流量监控、日志输出、协议转换等。
- post 过滤器，在响应之前执行，可以做响应内容、响应头的修改，日志的输出，流量监控等。
- Gateway 还提供了两种类型过滤器
  - GatewayFilter：局部过滤器，针对单个路由
  - GlobalFilter ：全局过滤器，针对所有路由

#### 局部过滤器

- GatewayFilter 局部过滤器，是针对单个路由的过滤器。
- 在Spring Cloud Gateway 组件中提供了大量内置的局部过滤器，对请求和响应做过滤操作。
- 遵循约定大于配置的思想，只需要在配置文件配置局部过滤器名称，并为其指定对应的值，就可以让其生效。

```yml
  cloud:
    # 网关配置
    gateway:
      #局部过滤器
          filters:
            - AddRequestParameter=username,zhangsan
```

#### 全局过滤器

- GlobalFilter 全局过滤器，不需要在配置文件中配置，系统初始化时加载，并作用在每个路由上。
- Spring Cloud Gateway 核心的功能也是通过内置的全局过滤器来完成。
- 自定义全局过滤器步骤：
  - 定义类实现 GlobalFilter 和 Ordered接口
  - 复写方法
  - 完成逻辑处理

  <img :src="$withBase('/springcloud/19.png')" alt="foo">

- filter/MyFilter.java

```java
@Component
public class MyFilter implements GlobalFilter, Ordered {
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {

        System.out.println("自定义全局过滤器执行了");

        // 放行
        return chain.filter(exchange);
    }

    /**
     * 过滤器排序
     * @return 数值越小 越先执行
     * */
    @Override
    public int getOrder() {
        return 0;
    }
}
```
