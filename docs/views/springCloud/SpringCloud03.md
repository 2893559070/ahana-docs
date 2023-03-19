# SpringCloud03

## Config 分布式配置中心

::: danger
记住傻逼，远程仓库配置内容不要取 config configs 这样的语义性强的key 使用的话一定会出错！！！
:::

::: danger
config服务maven使用的是spring-cloud-config-server  分布式配置链接configserver使用的是 spring-cloud-config-client  ！！！
:::

### Config 概述

Spring Cloud Config 解决了在分布式场景下多环境配置文件的管理和维护。

- 好处：
  - 集中管理配置文件
  - 不同环境不同配置，动态化的配置更新
  - 配置信息改变时，不需要重启即可更新配置信息到服务
    <img :src="$withBase('/springcloud/20.png')" alt="foo">

### Config 快速入门

#### config server

  1. 使用gitee创建远程仓库，上传配置文件
  2. 搭建 config server 模块
  3. 导入 config-server 依赖
  4. 编写配置，设置 gitee 远程仓库地址
  5. 测试访问远程配置文件

- pom.xml

```xml
    <dependencies>
        <!-- config-server -->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-config-server</artifactId>
        </dependency>

        <!-- eureka-client -->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
        </dependency>
    </dependencies>
```

- ConfigServerApp.java

```java
@SpringBootApplication
@EnableEurekaClient
@EnableConfigServer // 启用config server 功能
public class ConfigServerApp {
    public static void main(String[] args) {
        SpringApplication.run(ConfigServerApp.class, args);
    }
}
```

- application.yml

```yml
server:
  port: 9527

spring:
  application:
    name: config-configs # 应用名称，可以获取访问路径
  # spring cloud config 配置
  cloud:
    config:
      server:
        git:
          uri: https://gitee.com/ahan-pot/spring-cloud-configs.git
          skip-ssl-validation: true # 跳过SSL校验
      #          username: ***@***.com
#          password: ***
      label: master # 分支

# eureka 配置
eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka # eureka服务端地址，与客户端通信
```

#### config client

  1. 导入 starter-config 依赖
  2. 配置config server 地址，读取配置文件名称等信息
  3. 获取配置值
  4. 启动测试

- pom.xml

```xml
  <dependencies>
      <dependency>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-starter-web</artifactId>
      </dependency>

      <!-- actuator 动态化的配置更新 -->
      <dependency>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-starter-actuator</artifactId>
      </dependency>

      <!-- eureka-client -->
      <dependency>
          <groupId>org.springframework.cloud</groupId>
          <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
      </dependency>

      <!-- config-client -->
      <dependency>
          <groupId>org.springframework.cloud</groupId>
          <artifactId>spring-cloud-config-client</artifactId>
      </dependency>
  </dependencies>
```

- application.yml

```yml
server:
  port: 8000

# eureka 配置
eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka # eureka服务端地址，与客户端通信
spring:
  application:
    name: config-provider # 应用名称，可以获取访问路径
```

- bootstrap.yml

```yml
# 配置config-server地址
# 配置获得配置文件的名称等信息
spring:
  cloud:
    config:
      # 配置config-server地址
#      uri: http://localhost:9527
      # 配置获得配置文件的名称等信息
      name: config # 文件名
      profile: dev # profile指定，  config-dev.yml
      label: master # 分支
      # 从注册中心去寻找config-server地址
      discovery:
        enabled: true
        service-id: CONFIG-SERVER

# 动态化的配置更新
management:
  endpoints:
    web:
      exposure:
        include: '*'
```

- controller/GoodsController.java

```java
@RestController
@RequestMapping("/goods")
@RefreshScope // 客户端刷新
public class GoodsController {

    @Autowired
    private GoodService goodService;

    @Value("${username}")
    private String username;

    @Value("${titleGit}")
    private String titleGit;

    @RequestMapping("/findOne/{id}")
    public Goods findOne(@PathVariable("id") int id) {
        Goods goods = goodService.findOne(id);

        goods.setTitle(goods.getTitle() + port + " 远程读取gitee仓库配置：" + username + titleGit);
        return goods;
    }
}
```

- Config 客户端刷新

1. 在 config 客户端引入 actuator 依赖
2. 获取配置信息类上，添加 @RefreshScope 注解
3. 添加配置 management.endpoints.web.exposure.include: refresh
4. 使用curl工具发送post请求 `curl -X POST http://localhost:8001/actuator/refresh`

### Config 集成Eureka

- config-client配置
参考 config client

```yml
spring:
  cloud:
      config:
        discovery:
          enabled: true
          service-id: CONFIG-SERVER
```

- config-server配置

```yml
eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka/
```

## Bus 消息总线

Spring Cloud Bus 是用轻量的消息中间件将分布式的节点连接起来，可以用于广播配置文件的更改或者服务的监控管理。关键的思想就是，消息总线可以为微服务做监控，也可以实现应用程序之间相通信。
Spring Cloud Bus 可选的消息中间件包括 RabbitMQ 和  Kafka 。

  <img :src="$withBase('/springcloud/21.png')" alt="foo">

1. 分别在 config-server 和 config-client中引入 bus依赖：bus-amqp

```xml
  <!-- bus -->
  <dependency>
      <groupId>org.springframework.cloud</groupId>
      <artifactId>spring-cloud-starter-bus-amqp</artifactId>
  </dependency>
```

2. 分别在 config-server 和 config-client中配置 RabbitMQ

- config-server

```yml
spring:
  # 配置rabbitmq信息
  rabbitmq:
    host: localhost
    port: 5672
    username: guest
    password: guest
    virtual-host: /

# 暴露bus的刷新断点
management:
  endpoints:
    web:
      exposure:
        include: 'bus-refresh'
```

- config-client

```yml
spring:
  cloud:
    config:
      # 配置config-server地址
#      uri: http://localhost:9527
      # 配置获得配置文件的名称等信息
      name: config # 文件名
      profile: dev # profile指定，  config-dev.yml
      label: master # 分支
      # 从注册中心去寻找config-server地址
      discovery:
        enabled: true
        service-id: CONFIG-SERVER
  
  # 配置rabbitmq信息
  rabbitmq:
    host: localhost
    port: 5672
    username: guest
    password: guest
    virtual-host: /

management:
  endpoints:
    web:
      exposure:
        include: '*'
```

3. 在config-server中设置暴露监控断点：bus-refresh
4. 启动测试

```bash
curl -X POST http://localhost:9527/actuator/bus-refresh
```

## Stream 消息驱动

### Stream 概述

- Spring Cloud Stream 是一个构建消息驱动微服务应用的框架。
- Stream 解决了开发人员无感知的使用消息中间件的问题，因为Stream对消息中间件的进一步封装，可以做到代码层面对中间件的无感知，甚至于动态的切换中间件，使得微服务开发的高度解耦，服务可以关注更多自己的业务流程。
- Spring Cloud Stream目前支持两种消息中间件RabbitMQ和Kafka

  <img :src="$withBase('/springcloud/22.png')" alt="foo">

### Stream 组件

- Spring Cloud Stream 构建的应用程序与消息中间件之间是通过绑定器 Binder 相关联的。绑定器对于应用程序而言起到了隔离作用， 它使得不同消息中间件的实现细节对应用程序来说是透明的。
- binding 是我们通过配置把应用和spring cloud stream 的 binder 绑定在一起
- output：发送消息 Channel，内置 Source接口
- input：接收消息 Channel，内置 Sink接口

  <img :src="$withBase('/springcloud/23.png')" alt="foo">

### Stream 消息生产者

1. 创建消息生产者模块，引入依赖 starter-stream-rabbit

```xml
  <!-- stream -->
  <dependency>
      <groupId>org.springframework.cloud</groupId>
      <artifactId>spring-cloud-starter-stream-rabbit</artifactId>
  </dependency>
```

2. 编写配置，定义 binder，和 bingings

- application.yml

```yml
server:
  port: 8000

spring:
  cloud:
    stream:
      binders:
        rabbit_binder: # 自定义的绑定器名称
          type: rabbit # 绑定器类型
          environment: # 指定mq的环境
            spring:
              rabbitmq:
                host: localhost
                port: 5672
                username: guest
                password: guest
                virtual-host: /
      bindings:
        output: # channel名称
          binder: rabbit_binder #指定使用哪一个binder
          destination: rabbit_exchange # 消息目的地
```

3. 定义消息发送业务类。添加 @EnableBinding(Source.class)，注入MessageChannel output ，完成消息发送

- producer/MessageProducer.java

```java
package com.stu.stream.producer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.cloud.stream.messaging.Source;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Component;

@Component
@EnableBinding(Source.class) // 注意不要引错包
public class MessageProducer {

    @Autowired
    private MessageChannel output;
    public void send() {
        String message = "hello stream~~~";
        // 发送消息
        output.send(MessageBuilder.withPayload(message).build());
        System.out.println("消息发送成功");
    }
}
```

- controller/ProducerController.java

```java
package com.stu.stream.controller;

import com.stu.stream.producer.MessageProducer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProducerController {

    @Autowired
    private MessageProducer messageProducer;

    @RequestMapping("/send")
    public String sendMessage() {
        messageProducer.send();
        return "success";
    }
}
```

4. 编写启动类，测试

### Stream 消息消费者

1. 创建消息消费者模块，引入依赖 starter-stream-rabbit

```xml
  <!-- stream -->
  <dependency>
      <groupId>org.springframework.cloud</groupId>
      <artifactId>spring-cloud-starter-stream-rabbit</artifactId>
  </dependency>
```

2. 编写配置，定义 binder，和 bingings

- application.yml

```yml
server:
  port: 9000

spring:
  cloud:
    stream:
      binders:
        rabbit_binder: # 自定义的绑定器名称
          type: rabbit # 绑定器类型
          environment: # 指定mq的环境
            spring:
              rabbitmq:
                host: localhost
                port: 5672
                username: guest
                password: guest
                virtual-host: /
      bindings:
        input: # channel名称
          binder: rabbit_binder #指定使用哪一个binder
          destination: rabbit_exchange # 消息目的地
```

3. 定义消息接收业务类。添加 @EnableBinding(Sink.class)，使用@StreamListener(Sink.INPUT)，完成消息接收。

- consumer/MessageListener.java

```java
package com.stu.stream.consumer;

import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.cloud.stream.annotation.StreamListener;
import org.springframework.cloud.stream.messaging.Sink;
import org.springframework.messaging.Message;
import org.springframework.stereotype.Component;

@Component
@EnableBinding({Sink.class})
public class MessageListener {

    // 接收消息
    @StreamListener(Sink.INPUT)
    public void onMessage(Message message) {
        System.out.println(message);
        System.out.println(message.getPayload());
    }
}
```

4. 编写启动类，测试

## Sleuth+Zipkin 链路追踪

1. 安装启动zipkin。 java –jar zipkin.jar
2. 访问zipkin web界面。 <http://localhost:9411/>
3. 在服务提供方和消费方分别引入  sleuth 和 zipkin 依赖

```xml
  <!-- sleuth-zipkin -->
  <!-- <dependency>
      <groupId>org.springframework.cloud</groupId>
      <artifactId>spring-cloud-starter-sleuth</artifactId>
  </dependency> -->

  <!-- sleuth-zipkin zipkin已经引入了sleuth-->
  <dependency>
      <groupId>org.springframework.cloud</groupId>
      <artifactId>spring-cloud-starter-zipkin</artifactId>
  </dependency>
```

4. 分别配置服务提供方和消费方。

```yml
spring:
  zipkin:
    base-url: http://localhost:9411/ # 设置zipkin服务端路径
  sleuth:
    sampler:
      probability: 1 # 采集率 默认 0.1 10%
```

5. 启动，测试
