# springMvc Service 数据交互问题

## org.springframework.web.HttpMediaTypeNotSupportedException: Content type ‘application/x-www-form-url

如果想用SpringMVC的@RequestBody注解解析JSON字符串入参实体时POST请求的ContentType的值必须是application/json;charset=UTF-8，否则会抛"not supported"异常。

导致这个问题的出现是因为缺少缺少jackson-databind 的jar包。添加maven坐标即可。

```xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.8.8.1</version>
</dependency>
```

## 解决POST表单提交报错 Content type 'application/x-www-form-urlencoded;charset=UTF-8' not supported

application/x-www-form-urlencoded;charset=UTF-8 是以键值对拼接的形式，如 name=abc&phone=123456

```java
@PostMapping("save")
public Result save(@RequestParam Map<String, Object> params) {

}
```

application/json是以json格式{"name":"abc","phone":"123456"}

```java
@PostMapping("save")
public Result save(@RequestBody User user) {

}
```



## json数据对象 与 路径参数

```java
 // 前端
 路径参数: http://localhost:82/checkgroup/add.do?checkitemIds=33,35,36,37,38,39
 json数据对象: {
    "code": "1",
    "name": "张三",
    "helpCode": "测试1",
    "sex": "1",
    "remark": "测试2",
    "attention": "测试3"
}
 
 // 后端
 public Result add(@RequestBody CheckGroup checkGroup, Integer[] checkitemIds) {
        System.out.println(checkGroup);
        System.out.println(checkitemIds[0]);
        System.out.println(checkitemIds[1]);
        System.out.println(checkitemIds[2]);
 }
```


