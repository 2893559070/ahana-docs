# JDBC

## 编写代码步骤

- 创建工程，导入驱动jar包

- 注册驱动

  ```java
  Class.forName("com.mysql.jdbc.Driver");  // 可省略
  ```

- 获取连接

  ```java
  String url = "url地址";
  String username = "用户名";
  String password = "密码";
  Connection conn = DriverManager.getConnection(url, username, password);
  /**
  Java代码需要发送SQL给MySQL服务端，就需要先建立连接
  语法：jdbc:mysql://ip地址(域名):端口号/数据库名称?参数键值对1&参数键值对2…
  
  示例：jdbc:mysql://127.0.0.1:3306/db1
  
  ==细节：==
  
  * 如果连接的是本机mysql服务器，并且mysql服务默认端口是3306，则url可以简写为：jdbc:mysql:///数据库名称?参数键值对
  
  * 配置 useSSL=false 参数，禁用安全连接方式，解决警告提示
  */ 
  ```

- 定义SQL语句

  ```java
  String sql =  "增删改查逻辑" ;
  ```

- 获取执行SQL对象

  ```java
  // 执行SQL语句需要SQL执行对象，而这个执行对象就是Statement对象
  Statement stmt = conn.createStatement();
  ```

- 执行SQL

  ```java
  stmt.executeUpdate(sql); 
  ```

- 代码

  ```java
  public class JDBCDemo {
      public static void main(String[] args) throws Exception {
          //1. 注册驱动
          //Class.forName("com.mysql.jdbc.Driver");
          //2. 获取连接
          String url = "jdbc:mysql://127.0.0.1:3306/db1";
          String username = "root";
          String password = "1234";
          Connection conn = DriverManager.getConnection(url, username, password);
          //3. 定义sql
          String sql = "update account set money = 2000 where id = 1";
          //4. 获取执行sql的对象 Statement
          Statement stmt = conn.createStatement();
          //5. 执行sql
          int count = stmt.executeUpdate(sql);//受影响的行数
          //6. 处理结果
          System.out.println(count);
          //7. 释放资源
          stmt.close();
          conn.close();
      }
  }
  ```



## 防止SQL注入

```java
 @Test
public void testPreparedStatement() throws  Exception {
    //2. 获取连接：如果连接的是本机mysql并且端口是默认的 3306 可以简化书写
    String url = "jdbc:mysql:///db1?useSSL=false";
    String username = "root";
    String password = "1234";
    Connection conn = DriverManager.getConnection(url, username, password);

    // 接收用户输入 用户名和密码
    String name = "zhangsan";
    String pwd = "' or '1' = '1";

    // 定义sql
    String sql = "select * from tb_user where username = ? and password = ?";
    // 获取pstmt对象
    PreparedStatement pstmt = conn.prepareStatement(sql);
    // 设置？的值
    pstmt.setString(1,name);
    pstmt.setString(2,pwd);
    // 执行sql
    ResultSet rs = pstmt.executeQuery();
    // 判断登录是否成功
    if(rs.next()){
        System.out.println("登录成功~");
    }else{
        System.out.println("登录失败~");
    }
    //7. 释放资源
    rs.close();
    pstmt.close();
    conn.close();
}
```



## 事务管理

- 开启事务 ： BEGIN; 或者 START TRANSACTION;
- 提交事务 ： COMMIT;
- 回滚事务 ： ROLLBACK;

```java
/**
 * JDBC API 详解：Connection
 */
public class JDBCDemo3_Connection {

    public static void main(String[] args) throws Exception {
        //1. 注册驱动
        //Class.forName("com.mysql.jdbc.Driver");
        //2. 获取连接：如果连接的是本机mysql并且端口是默认的 3306 可以简化书写
        String url = "jdbc:mysql:///db1?useSSL=false";
        String username = "root";
        String password = "1234";
        Connection conn = DriverManager.getConnection(url, username, password);
        //3. 定义sql
        String sql1 = "update account set money = 3000 where id = 1";
        String sql2 = "update account set money = 3000 where id = 2";
        //4. 获取执行sql的对象 Statement
        Statement stmt = conn.createStatement();

        try {
            // ============开启事务==========
            conn.setAutoCommit(false);
            //5. 执行sql
            int count1 = stmt.executeUpdate(sql1);//受影响的行数
            //6. 处理结果
            System.out.println(count1);
            int i = 3/0;
            //5. 执行sql
            int count2 = stmt.executeUpdate(sql2);//受影响的行数
            //6. 处理结果
            System.out.println(count2);

            // ============提交事务==========
            //程序运行到此处，说明没有出现任何问题，则需求提交事务
            conn.commit();
        } catch (Exception e) {
            // ============回滚事务==========
            //程序在出现异常时会执行到这个地方，此时就需要回滚事务
            conn.rollback();
            e.printStackTrace();
        }

        //7. 释放资源
        stmt.close();
        conn.close();
    }
}
```



## Statement

- 执行DDL、DML语句 （ 修改 删除 ）

- 代码实现

  ```java
  /**
    * 执行DML语句 修改
    * @throws Exception
    */
  @Test
  public void testDML() throws  Exception {
      //1. 注册驱动
      //Class.forName("com.mysql.jdbc.Driver");
      //2. 获取连接：如果连接的是本机mysql并且端口是默认的 3306 可以简化书写
      String url = "jdbc:mysql:///db1?useSSL=false";
      String username = "root";
      String password = "1234";
      Connection conn = DriverManager.getConnection(url, username, password);
      //3. 定义sql
      String sql = "update account set money = 3000 where id = 1";
      //4. 获取执行sql的对象 Statement
      Statement stmt = conn.createStatement();
      //5. 执行sql
      int count = stmt.executeUpdate(sql);//执行完DML语句，受影响的行数
      //6. 处理结果
      //System.out.println(count);
      if(count > 0){
          System.out.println("修改成功~");
      }else{
          System.out.println("修改失败~");
      }
      //7. 释放资源
      stmt.close();
      conn.close();
  }
  ```

  ```java
  /**
    * 执行DDL语句 删除
    * @throws Exception
    */
  @Test
  public void testDDL() throws  Exception {
      //1. 注册驱动
      //Class.forName("com.mysql.jdbc.Driver");
      //2. 获取连接：如果连接的是本机mysql并且端口是默认的 3306 可以简化书写
      String url = "jdbc:mysql:///db1?useSSL=false";
      String username = "root";
      String password = "1234";
      Connection conn = DriverManager.getConnection(url, username, password);
      //3. 定义sql
      String sql = "drop database db2";
      //4. 获取执行sql的对象 Statement
      Statement stmt = conn.createStatement();
      //5. 执行sql
      int count = stmt.executeUpdate(sql);//执行完DDL语句，可能是0
      //6. 处理结果
      System.out.println(count);
  
      //7. 释放资源
      stmt.close();
      conn.close();
  }
  ```



## ResultSet

- 执行DQL语句  （ 查询 ）

  ```java
  ResultSet  executeQuery(sql)：执行DQL 语句，返回 ResultSet 对象
  ```

- 从 `ResultSet` 对象中获取数据

  - boolean  next()
    - 将光标从当前位置向前移动一行
    - 判断当前行是否为有效行
    - true  ： 有效航，当前行有数据
    - false ： 无效行，当前行没有数据
  - xxx  getXxx(参数)：获取数据
    - xxx : 数据类型；如： int getInt(参数) ；String getString(参数)
    - 参数
      - int类型的参数：列的编号，从1开始
      - String类型的参数： 列的名称 

- 代码实现

  ```java
  /**
    * 执行DQL
    * @throws Exception
    */
  @Test
  public void testResultSet() throws  Exception {
      //1. 注册驱动
      //Class.forName("com.mysql.jdbc.Driver");
      //2. 获取连接：如果连接的是本机mysql并且端口是默认的 3306 可以简化书写
      String url = "jdbc:mysql:///db1?useSSL=false";
      String username = "root";
      String password = "1234";
      Connection conn = DriverManager.getConnection(url, username, password);
      //3. 定义sql
      String sql = "select * from account";
      //4. 获取statement对象
      Statement stmt = conn.createStatement();
      //5. 执行sql
      ResultSet rs = stmt.executeQuery(sql);
      //6. 处理结果， 遍历rs中的所有数据
      /* // 6.1 光标向下移动一行，并且判断当前行是否有数据
          while (rs.next()){
              //6.2 获取数据  getXxx()
              int id = rs.getInt(1);
              String name = rs.getString(2);
              double money = rs.getDouble(3);
  
              System.out.println(id);
              System.out.println(name);
              System.out.println(money);
  
              System.out.println("--------------");
  
          }*/
      // 6.1 光标向下移动一行，并且判断当前行是否有数据
      while (rs.next()){
          //6.2 获取数据  getXxx()
          int id = rs.getInt("id");
          String name = rs.getString("name");
          double money = rs.getDouble("money");
  
          System.out.println(id);
          System.out.println(name);
          System.out.println(money);
  
          System.out.println("--------------");
      }
  
      //7. 释放资源
      rs.close();
      stmt.close();
      conn.close();
  }
  ```

- 存入 ArrayList集合

  ```java
  /**
    * 查询account账户表数据，封装为Account对象中，并且存储到ArrayList集合中
    * 1. 定义实体类Account
    * 2. 查询数据，封装到Account对象中
    * 3. 将Account对象存入ArrayList集合中
    */
  @Test
  public void testResultSet2() throws  Exception {
      //1. 注册驱动
      //Class.forName("com.mysql.jdbc.Driver");
      //2. 获取连接：如果连接的是本机mysql并且端口是默认的 3306 可以简化书写
      String url = "jdbc:mysql:///db1?useSSL=false";
      String username = "root";
      String password = "1234";
      Connection conn = DriverManager.getConnection(url, username, password);
  
      //3. 定义sql
      String sql = "select * from account";
  
      //4. 获取statement对象
      Statement stmt = conn.createStatement();
  
      //5. 执行sql
      ResultSet rs = stmt.executeQuery(sql);
  
      // 创建集合
      List<Account> list = new ArrayList<>();
     
      // 6.1 光标向下移动一行，并且判断当前行是否有数据
      while (rs.next()){
          Account account = new Account();
  
          //6.2 获取数据  getXxx()
          int id = rs.getInt("id");
          String name = rs.getString("name");
          double money = rs.getDouble("money");
  
          //赋值
          account.setId(id);
          account.setName(name);
          account.setMoney(money);
  
          // 存入集合
          list.add(account);
      }
  
      System.out.println(list);
  
      //7. 释放资源
      rs.close();
      stmt.close();
      conn.close();
  }
  ```





## Driud数据库连接池

### Driud使用

- 导入jar包 druid-1.1.12.jar

- 定义配置文件

  ```mysql
  driverClassName=com.mysql.jdbc.Driver
  url=jdbc:mysql:///db1?useSSL=false&useServerPrepStmts=true
  username=root
  password=1234
  # 初始化连接数量
  initialSize=5
  # 最大连接数
  maxActive=10
  # 最大等待时间
  maxWait=3000
  ```

- 加载配置文件

  ```java
  Properties prop = new Properties();
  prop.load(new FileInputStream("jdbc-demo/src/druid.properties"));
  ```

- 获取数据库连接池对象

  ```java
  DataSource dataSource = DruidDataSourceFactory.createDataSource(prop);
  ```

- 获取连接

  ```java
  Connection connection = dataSource.getConnection();
  System.out.println(connection); //获取到了连接后就可以继续做其他操作了
  ```



### 操作

- 查询

  ```java
   /**
     * 查询所有
     * 1. SQL：select * from tb_brand;
     * 2. 参数：不需要
     * 3. 结果：List<Brand>
     */
  
  @Test
  public void testSelectAll() throws Exception {
      //1. 获取Connection
      //3. 加载配置文件
      Properties prop = new Properties();
      prop.load(new FileInputStream("jdbc-demo/src/druid.properties"));
      //4. 获取连接池对象
      DataSource dataSource = DruidDataSourceFactory.createDataSource(prop);
  
      //5. 获取数据库连接 Connection
      Connection conn = dataSource.getConnection();
      //2. 定义SQL
      String sql = "select * from tb_brand;";
      //3. 获取pstmt对象
      PreparedStatement pstmt = conn.prepareStatement(sql);
      //4. 设置参数
      //5. 执行SQL
      ResultSet rs = pstmt.executeQuery();
      //6. 处理结果 List<Brand> 封装Brand对象，装载List集合
      Brand brand = null;
      List<Brand> brands = new ArrayList<>();
      while (rs.next()){
          //获取数据
          int id = rs.getInt("id");
          String brandName = rs.getString("brand_name");
          String companyName = rs.getString("company_name");
          int ordered = rs.getInt("ordered");
          String description = rs.getString("description");
          int status = rs.getInt("status");
          //封装Brand对象
          brand = new Brand();
          brand.setId(id);
          brand.setBrandName(brandName);
          brand.setCompanyName(companyName);
          brand.setOrdered(ordered);
          brand.setDescription(description);
          brand.setStatus(status);
  
          //装载集合
          brands.add(brand);
      }
      System.out.println(brands);
      //7. 释放资源
      rs.close();
      pstmt.close();
      conn.close();
  }
  ```

- 添加数据

  ```java
  /**
    * 添加
    * 1. SQL：insert into tb_brand(brand_name, company_name, ordered, description, status) values(?,?,?,?,?);
    * 2. 参数：需要，除了id之外的所有参数信息
    * 3. 结果：boolean
    */
  @Test
  public void testAdd() throws Exception {
      // 接收页面提交的参数
      String brandName = "香飘飘";
      String companyName = "香飘飘";
      int ordered = 1;
      String description = "绕地球一圈";
      int status = 1;
  
      //1. 获取Connection
      //3. 加载配置文件
      Properties prop = new Properties();
      prop.load(new FileInputStream("jdbc-demo/src/druid.properties"));
      //4. 获取连接池对象
      DataSource dataSource = DruidDataSourceFactory.createDataSource(prop);
      //5. 获取数据库连接 Connection
      Connection conn = dataSource.getConnection();
      //2. 定义SQL
      String sql = "insert into tb_brand(brand_name, company_name, ordered, description, status) values(?,?,?,?,?);";
      //3. 获取pstmt对象
      PreparedStatement pstmt = conn.prepareStatement(sql);
      //4. 设置参数
      pstmt.setString(1,brandName);
      pstmt.setString(2,companyName);
      pstmt.setInt(3,ordered);
      pstmt.setString(4,description);
      pstmt.setInt(5,status);
  
      //5. 执行SQL
      int count = pstmt.executeUpdate(); // 影响的行数
      //6. 处理结果
      System.out.println(count > 0);
  
      //7. 释放资源
      pstmt.close();
      conn.close();
  }
  ```

- 修改数据

  ```java
  /**
    * 修改
    * 1. SQL：
  
       update tb_brand
           set brand_name  = ?,
           company_name= ?,
           ordered     = ?,
           description = ?,
           status      = ?
       where id = ?
  
     * 2. 参数：需要，所有数据
     * 3. 结果：boolean
     */
  
  @Test
  public void testUpdate() throws Exception {
      // 接收页面提交的参数
      String brandName = "香飘飘";
      String companyName = "香飘飘";
      int ordered = 1000;
      String description = "绕地球三圈";
      int status = 1;
      int id = 4;
  
      //1. 获取Connection
      //3. 加载配置文件
      Properties prop = new Properties();
      prop.load(new FileInputStream("jdbc-demo/src/druid.properties"));
      //4. 获取连接池对象
      DataSource dataSource = DruidDataSourceFactory.createDataSource(prop);
      //5. 获取数据库连接 Connection
      Connection conn = dataSource.getConnection();
      //2. 定义SQL
      String sql = " update tb_brand\n" +
          "         set brand_name  = ?,\n" +
          "         company_name= ?,\n" +
          "         ordered     = ?,\n" +
          "         description = ?,\n" +
          "         status      = ?\n" +
          "     where id = ?";
  
      //3. 获取pstmt对象
      PreparedStatement pstmt = conn.prepareStatement(sql);
  
      //4. 设置参数
      pstmt.setString(1,brandName);
      pstmt.setString(2,companyName);
      pstmt.setInt(3,ordered);
      pstmt.setString(4,description);
      pstmt.setInt(5,status);
      pstmt.setInt(6,id);
  
      //5. 执行SQL
      int count = pstmt.executeUpdate(); // 影响的行数
      //6. 处理结果
      System.out.println(count > 0);
  
      //7. 释放资源
      pstmt.close();
      conn.close();
  }
  ```

- 删除数据

  ```java
  /**
    * 删除
    * 1. SQL：
              delete from tb_brand where id = ?
    * 2. 参数：需要，id
    * 3. 结果：boolean
    */
  @Test
  public void testDeleteById() throws Exception {
      // 接收页面提交的参数
      int id = 4;
      //1. 获取Connection
      //3. 加载配置文件
      Properties prop = new Properties();
      prop.load(new FileInputStream("jdbc-demo/src/druid.properties"));
      //4. 获取连接池对象
      DataSource dataSource = DruidDataSourceFactory.createDataSource(prop);
      //5. 获取数据库连接 Connection
      Connection conn = dataSource.getConnection();
      //2. 定义SQL
      String sql = " delete from tb_brand where id = ?";
      //3. 获取pstmt对象
      PreparedStatement pstmt = conn.prepareStatement(sql);
      //4. 设置参数
      pstmt.setInt(1,id);
      //5. 执行SQL
      int count = pstmt.executeUpdate(); // 影响的行数
      //6. 处理结果
      System.out.println(count > 0);
  
      //7. 释放资源
      pstmt.close();
      conn.close();
  }
  ```

  