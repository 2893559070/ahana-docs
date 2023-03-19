# Mysql基础语法

## DML

## (select、update、insert、delete) 增删改查

```mysql
-- select
SELECT 字段名 | *  FROM 表名称;

-- update
UPDATE 表名称 SET 字段名='新值' WHERE 字段名='某值';

-- insert
INSERT INTO table_name (列1,列2,...) VALUES (值1,值2,...);

-- delete
DELETE FROM 表名称 WHERE 列名称='某值';
```

### 条件查询

- 按条件表达式筛选

  ```mysql
  -- 简单条件运算符： >， <， =，（!= | <>）， >=， <=
  ```

- 按逻辑表达式筛选

  ```mysql
  作用： 用于连接条件表达式
    &&  ||  ！ and or  not
  && 和 and：两个条件都为true，结果为true，反之为false
  || 和 or： 只要有一个条件为true，结果为true，反之为false
  ！ 和 not：如果连接的条件本身为false，结果为true，反之为false
  ```

- 模糊查询

  - like

    ```mysql
    -- 含字符a的员工信息
    select * from employees where last_name like '%a%';
    -- 第三个字符为e，第五个字符为a
    select last_name, salary from employees where last_name like '__e_a%';
    -- 第二个字符为_的
    select last_name from employees where last_name like '_$_%' escape '$';  #escape 后代表转义字符  
    ```

  - between and

    ```mysql
    -- 查询员工编号在100到200之间的员工信息
    select * from employees where employee_id>= 100 and employee_id <= 200;
    ----------------------
    selct * from employees where employee_id between 100 and 200;
    ```

  - in

    ```mysql
    -- 查询员工的工种编号是IT_PROG、AD_VP、AD_PRES中的一个员工名和工种编号
    select last_name,job_id from employees where job_id = 'IT_PROG' or job_id = 'AD_VP' or job_id = 'AD_PRES';
    --------------------
    select lase_name, job_id from employees where job_id in ('IT_PROG', 'AD_VP', 'AD_PRES');
    ```

  - is null

    ```mysql
    -- 查询为null的数据
    select last_name,commission_pct from employees 列名 is null;
    -- 查询不为null的数据
    select last_name,commission_pct from employees 列名 is not null;
    ```

  - 安全等于 <=>

    ```mysql
    -- 查询为12000的信息
    select * from employees where salary <=> 12000;
    ```

- 排序查询

  - asc 代表的是升序，默认是升序，可以省略；desc 代表的是降序
  - order by 子句可以支持单个字段、别名、表达式、函数、多个字段
  - order by 子句一般是放在查询语句的最后面，除了 limit 语句

  - 语法

    ```mysql
    -- 单个字段
    select * from employees order by salary desc;
    
    -- 多个字段
    select * from employees order by salary desc,employee_id asc;
    ```

- limit

  ```mysql
  SELECT * | 列名 FROM 表名 LIMIT 从第几行开始, 取几条数据;
  ```

  

## DDL

 ### (CREATE、ALTER、DROP等) 定义表 或者 改变表的物理结构、数据类型、表之间的链接和物理约束等初始化操作

```mysql
-- 建表
create table 表名称(
	列名称1, 数据类型,
	列名称2, 数据类型,
	...
)engine=innodb default charset=utf8mb4 collate=utf8mb4_general_ci
-- engine=innodb 设置表的引擎
-- default charset=utf8mb4  设置表的编码字符集
-- collate=utf8mb4_general_ci 设置字符序

-- 修改表
alter table 表名称 drop 字段名;
alter table 表名称 add 字段名 数据类型 [字段约束] [字段约束];
```



## DCL

### 用户创建和授权

暂时只做了解