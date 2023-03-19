# Stream

## Stream 流是生成方式

```java
List<String> myList =
    Arrays.asList("a1", "a2", "b1", "c2", "c1");

myList
    .stream() // 创建流
    .filter(s -> s.startsWith("c")) // 执行过滤，过滤出以 c 为前缀的字符串 ( 中间流 )
    .map(String::toUpperCase) // 转换成大写 ( 中间流 )
    .sorted() // 排序 ( 中间流 )
    .forEach(System.out::println); // for 循环打印 （ 终结操作 ）

// C1
// C2
```

