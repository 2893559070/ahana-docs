# 常用API
应用程序接口

clrt + alt + t 快捷生成方法

## API的基本使用
- Math 
    数学运算法
    ```java
        Math.abs() //返回绝对值
        Math.ceil() //向上取整
        Math.floor() //向下取整
        Math.round() //四舍五入
        Math.max() //返回最大值
        Math.min() //返回最小值
        Math.pow(a, b) //返回a的b次幂
        Math.random() //随机数
    ```

- System
    系统
    ```java
        System.exit(0) //停止jvm虚拟机
        System.currentTomeMillis() //返回当前时间（毫秒）
        System.arraycopy(数据源数组，起始索引，目的地索引，起始索引，拷贝个数) //拷贝数组
    ```

## Object类
是所有类的直接或者间接的父类
- toString
    Object的toString是累的地址值，一般都会在类中把toString重写
- equals
    Object类中equals是比较地址值，重写可以比较内容
- StringBuilder
    StringBuilder类中没有 equals 方法

- Objects类
    - toString(obj)
        Objects.toString(obj) 类似 toString的重写
    - toString(obj, 默认字符串)
        Objects.toString(obj, "obj如果是空，就显示我")
    - inNull
        Objects.inNull(obj) 是空返回true，否则false
    - noNull
        Objects.inNull(obj) 是空返回false，否则true

## BigDecimal类
精确计算
字符串可以精确运算，数值会出现浮点
- add 加
- subtract 减
- multiply 乘法
- divide 除法
    - 舍入模式
        1. 进一法 BigDeciMal.ROUND_UP
        2. 去尾法 BigDeciMal.ROUND_FLOOR
        3. 四舍五入法 BigDeciMal.ROUND_HALF_UP
```java
    // BigDecimal(字符串 | 数值);

    BigDecimal nbd1 = BigDecimal(0.1);
    BigDecimal nbd2 = BigDecimal(0.2);
    nbd1.add(nbd2) // 和 会出现浮点

    BigDecimal bd1 = BigDecimal("0.1");
    BigDecimal bd2 = BigDecimal("0.3");
    bd1.add(bd2) // 精确计算

    bd1.divide(bd2, BigDeciMal.ROUND_UP) // 除法舍入模式
```

## 基本类型包装类
- Integer
    - MAX_VALUE 最大值
    - MIN_VALUE 最小值
    - Integer.valueOf()
    - Integer.parseInt() 字符串 转换成 int类型的整数
    ```java
        Integer.valueOf(100);
        Integer a = 100; // 自动装箱 底层自动调用 Integer.valueOf() 方法

        // String -> int
        int i = Integer.parseInt("100");
        // int -> String
        int a = 10;
        String Stra = a + "";

        String Strb = Integer.valueOf(i);
    ```
- 装箱拆箱
    - 装箱：把一个基本数据类型 变量对象包装类
    - 拆箱：把一个包装类型 变成对应的基本数据类型
    - 注意: 包装类型 null 无法转换成基本数据类型 需要做一下非空判断

## 数组的高级操作
- 二分查找
    <img :src="$withBase('/java/二分查找.png')" alt="foo">
- 递归
    <img :src="$withBase('/java/递归.png')" alt="foo">


## 时间
Date
```java
    Date d1 = new Date(); // 当前时间
    Date d2 = new Date(0L); // 1970年 原点时间

    Date d3 = new Date();
    d3.setTime(0L) // 设置时间
    long time = d3.getTime(); // 当前时间的毫秒值
```

- SimpleDateFormat
    对Date对象，进行格式化和解析
    - 格式
        yyyy MM dd HH:mm:ss
    ```java
        Date d1 = new Date(); // 当前时间
        SimpleDateFormat sdf = SimpleDateFormat("yyyy MM dd HH:mm:ss"); // 定义时间格式
        String resDate = sdf.format(d1); // 获取格式后的时间

        String s = "2022-01-01"; // 定义时间
        SimpleDateFormat sdf1 = SimpleDateFormat("yyyy-MM-dd"); // 定义时间格式
        Date time = sdf1.parse(s) // 将字符时间转换成时间对象 需要捕获异常
    ```
- DateTimeFormatter
    ```java
        String s = "2022-01-01"; // 定义时间
        DateTimeFormatter pattern = DateTimeFormatter.ofpattern("yyyy MM dd HH:mm:ss"); // 定义时间格式
        LocalDateTime time = LocalDateTime.parse(s, pattern); // 解析时间格式
        LocalDateTime newTime = LocalDateTime.plusDays(1); // 增加一天时间
        String resTime = newTime.format(pattern); // 获得增加后的时间
    ```

- JDK8新增的日期类
    - localDateTime
        - localDateTime.getYear() 获取年
        - localDateTime.getMonthValue() 获取月
        - localDateTime.getDayOfMonth() 月中多少天
        - localDateTime.getDayOfYear() 年中多少天
        - localDateTime.getDayOfWeek() 获取星期
        - localDateTime.getMinute() 获取分钟
        - localDateTime.getHour() 获取小时
    - LocalDate 年月日
    - LocalTime 时分秒
        - format
        - parse
    - 计算时间
        - Period （开始时间， 结束时间）
            - 年，月，天，总数月
        - Duration （开始时间， 结束时间）
            - 秒，毫秒，纳秒

    ```java
        localDateTime time1 = localDateTime.now(); // 获取当前系统时间
        localDateTime time2 = localDateTime.of(2022,1,12,11,11); // 获取指定时间的localDateTime对象

        LocalDate LocalDate = time2.toLocalDate(); // 转换成 LocalDate 对象 年月日
        LocalTime LocalTime = time2.toLocalTime(); // 转换成 LocalTime 对象 时分秒

        // LocalTime format
        localDateTime time3 = localDateTime.of(2022,1,12,11,11); // 获取指定时间的localDateTime对象
        DateTimeFormatter pattern = DateTimeFormatter.ofpattern("yyyy MM dd HH:mm:ss"); // 定义时间格式
        String s3 = time2.format(pattern);

        // LocalTime parse
        String sTime = "2022-01-01"; // 定义时间
        DateTimeFormatter pattern2 = DateTimeFormatter.ofpattern("yyyy MM dd HH:mm:ss"); // 定义时间格式
        LocalTime s3 time2.parse(sTime, pattern2);
    ```

## 异常处理
- throws
    - 异常申明 用在方法名后面，跟的是异常类名 告诉方法可能会出现这样的异常
        ```java
            /**
                给方法处理或者给虚拟机处理
                运行时异常可以忽略不写
                编译时异常需要申明
            */ 
            
            public static void method() throws 异常名称 {}
        ```
- throw        
    - 抛出异常 用在方法里面 跟的是异常对象名 手动抛出异常 让方法里面处理
        ```java            
            public static void method(int[] arr) {
                if(err == null) {
                    throw new NullPointerException();
                }
            }
        ```
- try...catch
    - 自己处理异常 不交给虚拟机 可以让程序继续执行
    - 存在异常子父类关系 父类异常一定要写在下面
        ```java         
            ...main() {
                int[] arr = null;

                try{
                    method(arr);
                    // 正常执行区域
                }catch(NullPointerException e) {
                    // 处理异常区域一
                }catch(NumberFormatException e) {
                    // 处理异常区域二
                }
            }   
            public static void method(int[] arr) {
                if(err == null) {
                    throw new NullPointerException();
                }
            }
        ```
- 
    - getMessage 异常的信息
    - toString 异常的简短描述
    - printStackTrace 把异常的错误信息输出在控制台 红色字体
        ```java
            try{
                method(arr);
                // 正常执行区域
            }catch(NullPointerException e) {
                String message = e.getMessage();
                String string = e.toString();
                e.printStackTrace();
            }
        ```
