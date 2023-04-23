import{_ as n,p as a,q as d,R as e,t as s,a1 as i}from"./framework-5866ffd3.js";const r={},c=i(`<h1 id="mysql-sql" tabindex="-1"><a class="header-anchor" href="#mysql-sql" aria-hidden="true">#</a> Mysql-SQL</h1><h2 id="dml" tabindex="-1"><a class="header-anchor" href="#dml" aria-hidden="true">#</a> DML</h2><h3 id="update、insert、delete-增删改查" tabindex="-1"><a class="header-anchor" href="#update、insert、delete-增删改查" aria-hidden="true">#</a> (update、insert、delete) 增删改查</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- update
UPDATE 表名称 SET 字段名=&#39;新值&#39; WHERE 字段名=&#39;某值&#39;;

-- insert
INSERT INTO table_name (列1,列2,...) VALUES (值1,值2,...);

-- delete
DELETE FROM 表名称 WHERE 列名称=&#39;某值&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dql" tabindex="-1"><a class="header-anchor" href="#dql" aria-hidden="true">#</a> DQL</h2><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> 
  字段列表
<span class="token keyword">from</span>
  表名列表
<span class="token keyword">where</span>
  条件列表
<span class="token keyword">group</span> <span class="token keyword">by</span>
  分组字段列表
<span class="token keyword">having</span>
  分组后条件列表
<span class="token keyword">order</span> <span class="token keyword">by</span>
  排序字段列表
<span class="token keyword">limit</span>
  分页参数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),m=["src"],t=["src"],u=["src"],o=["src"],v=["src"],p=["src"],b=["src"],h=["src"],g=i(`<li><p>按条件表达式筛选</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 简单条件运算符： &gt;， &lt;， =，（!= | &lt;&gt;）， &gt;=， &lt;=
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,5),y=["src"],_=i(`<h2 id="ddl" tabindex="-1"><a class="header-anchor" href="#ddl" aria-hidden="true">#</a> DDL</h2><h3 id="create、alter、drop等-定义表-或者-改变表的物理结构、数据类型、表之间的链接和物理约束等初始化操作" tabindex="-1"><a class="header-anchor" href="#create、alter、drop等-定义表-或者-改变表的物理结构、数据类型、表之间的链接和物理约束等初始化操作" aria-hidden="true">#</a> (CREATE、ALTER、DROP等) 定义表 或者 改变表的物理结构、数据类型、表之间的链接和物理约束等初始化操作</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 建表
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dcl" tabindex="-1"><a class="header-anchor" href="#dcl" aria-hidden="true">#</a> DCL</h2><p>用户管理的sql语句</p>`,5),q=["src"],f=["src"],w=["src"],D=["src"];function L(l,k){return a(),d("div",null,[c,e("img",{src:l.$withBase("/mysql/DQL01.png"),alt:"foo"},null,8,m),e("img",{src:l.$withBase("/mysql/DQL02.png"),alt:"foo"},null,8,t),e("img",{src:l.$withBase("/mysql/DQL03.png"),alt:"foo"},null,8,u),e("ul",null,[e("li",null,[e("p",null,[s("分组查询 "),e("img",{src:l.$withBase("/mysql/DQL04.png"),alt:"foo"},null,8,o),e("img",{src:l.$withBase("/mysql/DQL04-1.png"),alt:"foo"},null,8,v)])]),e("li",null,[e("p",null,[s("排序查询 "),e("img",{src:l.$withBase("/mysql/DQL05.png"),alt:"foo"},null,8,p)])]),e("li",null,[e("p",null,[s("分页查询 "),e("img",{src:l.$withBase("/mysql/DQL06.png"),alt:"foo"},null,8,b)])]),e("li",null,[e("p",null,[s("执行顺序 "),e("img",{src:l.$withBase("/mysql/DQL07.png"),alt:"foo"},null,8,h)])]),g,e("li",null,[e("p",null,[s("总结 "),e("img",{src:l.$withBase("/mysql/DQLEnd.png"),alt:"foo"},null,8,y)])])]),_,e("ul",null,[e("li",null,[e("p",null,[s("用户管理 "),e("img",{src:l.$withBase("/mysql/DCL01.png"),alt:"foo"},null,8,q)])]),e("li",null,[e("p",null,[s("权限控制 "),e("img",{src:l.$withBase("/mysql/DCL02.png"),alt:"foo"},null,8,f),e("img",{src:l.$withBase("/mysql/DCL03.png"),alt:"foo"},null,8,w)])]),e("li",null,[e("p",null,[s("总结 "),e("img",{src:l.$withBase("/mysql/DCLend.png"),alt:"foo"},null,8,D)])])])])}const B=n(r,[["render",L],["__file","Mysql-SQL.html.vue"]]);export{B as default};
