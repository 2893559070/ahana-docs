import{_ as e,p as l,q as i,a1 as s}from"./framework-5866ffd3.js";const a={},n=s(`<h1 id="mysql基础语法" tabindex="-1"><a class="header-anchor" href="#mysql基础语法" aria-hidden="true">#</a> Mysql基础语法</h1><h2 id="dml" tabindex="-1"><a class="header-anchor" href="#dml" aria-hidden="true">#</a> DML</h2><h2 id="select、update、insert、delete-增删改查" tabindex="-1"><a class="header-anchor" href="#select、update、insert、delete-增删改查" aria-hidden="true">#</a> (select、update、insert、delete) 增删改查</h2><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- select
SELECT 字段名 | *  FROM 表名称;

-- update
UPDATE 表名称 SET 字段名=&#39;新值&#39; WHERE 字段名=&#39;某值&#39;;

-- insert
INSERT INTO table_name (列1,列2,...) VALUES (值1,值2,...);

-- delete
DELETE FROM 表名称 WHERE 列名称=&#39;某值&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="条件查询" tabindex="-1"><a class="header-anchor" href="#条件查询" aria-hidden="true">#</a> 条件查询</h3><ul><li><p>按条件表达式筛选</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 简单条件运算符： &gt;， &lt;， =，（!= | &lt;&gt;）， &gt;=， &lt;=
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>按逻辑表达式筛选</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>作用： 用于连接条件表达式
  &amp;&amp;  ||  ！ and or  not
&amp;&amp; 和 and：两个条件都为true，结果为true，反之为false
|| 和 or： 只要有一个条件为true，结果为true，反之为false
！ 和 not：如果连接的条件本身为false，结果为true，反之为false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>模糊查询</p><ul><li><p>like</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 含字符a的员工信息
select * from employees where last_name like &#39;%a%&#39;;
-- 第三个字符为e，第五个字符为a
select last_name, salary from employees where last_name like &#39;__e_a%&#39;;
-- 第二个字符为_的
select last_name from employees where last_name like &#39;_$_%&#39; escape &#39;$&#39;;  #escape 后代表转义字符  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>between and</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 查询员工编号在100到200之间的员工信息
select * from employees where employee_id&gt;= 100 and employee_id &lt;= 200;
----------------------
selct * from employees where employee_id between 100 and 200;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>in</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 查询员工的工种编号是IT_PROG、AD_VP、AD_PRES中的一个员工名和工种编号
select last_name,job_id from employees where job_id = &#39;IT_PROG&#39; or job_id = &#39;AD_VP&#39; or job_id = &#39;AD_PRES&#39;;
--------------------
select lase_name, job_id from employees where job_id in (&#39;IT_PROG&#39;, &#39;AD_VP&#39;, &#39;AD_PRES&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>is null</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 查询为null的数据
select last_name,commission_pct from employees 列名 is null;
-- 查询不为null的数据
select last_name,commission_pct from employees 列名 is not null;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安全等于 &lt;=&gt;</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 查询为12000的信息
select * from employees where salary &lt;=&gt; 12000;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>排序查询</p><ul><li><p>asc 代表的是升序，默认是升序，可以省略；desc 代表的是降序</p></li><li><p>order by 子句可以支持单个字段、别名、表达式、函数、多个字段</p></li><li><p>order by 子句一般是放在查询语句的最后面，除了 limit 语句</p></li><li><p>语法</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 单个字段
select * from employees order by salary desc;

-- 多个字段
select * from employees order by salary desc,employee_id asc;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>limit</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT * | 列名 FROM 表名 LIMIT 从第几行开始, 取几条数据;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="ddl" tabindex="-1"><a class="header-anchor" href="#ddl" aria-hidden="true">#</a> DDL</h2><h3 id="create、alter、drop等-定义表-或者-改变表的物理结构、数据类型、表之间的链接和物理约束等初始化操作" tabindex="-1"><a class="header-anchor" href="#create、alter、drop等-定义表-或者-改变表的物理结构、数据类型、表之间的链接和物理约束等初始化操作" aria-hidden="true">#</a> (CREATE、ALTER、DROP等) 定义表 或者 改变表的物理结构、数据类型、表之间的链接和物理约束等初始化操作</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 建表
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dcl" tabindex="-1"><a class="header-anchor" href="#dcl" aria-hidden="true">#</a> DCL</h2><h3 id="用户创建和授权" tabindex="-1"><a class="header-anchor" href="#用户创建和授权" aria-hidden="true">#</a> 用户创建和授权</h3><p>暂时只做了解</p>`,12),d=[n];function r(m,c){return l(),i("div",null,d)}const t=e(a,[["render",r],["__file","mysql基础语法.html.vue"]]);export{t as default};
