import{_ as n,o as s,c as a,a as t}from"./app-676abf65.js";const p={},e=t(`<h1 id="jdbc" tabindex="-1"><a class="header-anchor" href="#jdbc" aria-hidden="true">#</a> JDBC</h1><h2 id="编写代码步骤" tabindex="-1"><a class="header-anchor" href="#编写代码步骤" aria-hidden="true">#</a> 编写代码步骤</h2><ul><li><p>创建工程，导入驱动jar包</p></li><li><p>注册驱动</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.mysql.jdbc.Driver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 可省略</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>获取连接</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;url地址&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">&quot;用户名&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">&quot;密码&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
Java代码需要发送SQL给MySQL服务端，就需要先建立连接
语法：jdbc:mysql://ip地址(域名):端口号/数据库名称?参数键值对1&amp;参数键值对2…

示例：jdbc:mysql://127.0.0.1:3306/db1

==细节：==

* 如果连接的是本机mysql服务器，并且mysql服务默认端口是3306，则url可以简写为：jdbc:mysql:///数据库名称?参数键值对

* 配置 useSSL=false 参数，禁用安全连接方式，解决警告提示
*/</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>定义SQL语句</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> sql <span class="token operator">=</span>  <span class="token string">&quot;增删改查逻辑&quot;</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>获取执行SQL对象</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 执行SQL语句需要SQL执行对象，而这个执行对象就是Statement对象</span>
<span class="token class-name">Statement</span> stmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>执行SQL</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>stmt<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>代码</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JDBCDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">//1. 注册驱动</span>
        <span class="token comment">//Class.forName(&quot;com.mysql.jdbc.Driver&quot;);</span>
        <span class="token comment">//2. 获取连接</span>
        <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;jdbc:mysql://127.0.0.1:3306/db1&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">&quot;1234&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//3. 定义sql</span>
        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;update account set money = 2000 where id = 1&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">//4. 获取执行sql的对象 Statement</span>
        <span class="token class-name">Statement</span> stmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//5. 执行sql</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> stmt<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//受影响的行数</span>
        <span class="token comment">//6. 处理结果</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//7. 释放资源</span>
        stmt<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="防止sql注入" tabindex="-1"><a class="header-anchor" href="#防止sql注入" aria-hidden="true">#</a> 防止SQL注入</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testPreparedStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span>  <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">//2. 获取连接：如果连接的是本机mysql并且端口是默认的 3306 可以简化书写</span>
    <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;jdbc:mysql:///db1?useSSL=false&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">&quot;1234&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 接收用户输入 用户名和密码</span>
    <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> pwd <span class="token operator">=</span> <span class="token string">&quot;&#39; or &#39;1&#39; = &#39;1&quot;</span><span class="token punctuation">;</span>

    <span class="token comment">// 定义sql</span>
    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select * from tb_user where username = ? and password = ?&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">// 获取pstmt对象</span>
    <span class="token class-name">PreparedStatement</span> pstmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置？的值</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span>pwd<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 执行sql</span>
    <span class="token class-name">ResultSet</span> rs <span class="token operator">=</span> pstmt<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 判断登录是否成功</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>rs<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;登录成功~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;登录失败~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//7. 释放资源</span>
    rs<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    pstmt<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事务管理" tabindex="-1"><a class="header-anchor" href="#事务管理" aria-hidden="true">#</a> 事务管理</h2><ul><li>开启事务 ： BEGIN; 或者 START TRANSACTION;</li><li>提交事务 ： COMMIT;</li><li>回滚事务 ： ROLLBACK;</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * JDBC API 详解：Connection
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JDBCDemo3_Connection</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">//1. 注册驱动</span>
        <span class="token comment">//Class.forName(&quot;com.mysql.jdbc.Driver&quot;);</span>
        <span class="token comment">//2. 获取连接：如果连接的是本机mysql并且端口是默认的 3306 可以简化书写</span>
        <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;jdbc:mysql:///db1?useSSL=false&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">&quot;1234&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//3. 定义sql</span>
        <span class="token class-name">String</span> sql1 <span class="token operator">=</span> <span class="token string">&quot;update account set money = 3000 where id = 1&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> sql2 <span class="token operator">=</span> <span class="token string">&quot;update account set money = 3000 where id = 2&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">//4. 获取执行sql的对象 Statement</span>
        <span class="token class-name">Statement</span> stmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// ============开启事务==========</span>
            conn<span class="token punctuation">.</span><span class="token function">setAutoCommit</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//5. 执行sql</span>
            <span class="token keyword">int</span> count1 <span class="token operator">=</span> stmt<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span>sql1<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//受影响的行数</span>
            <span class="token comment">//6. 处理结果</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>count1<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">3</span><span class="token operator">/</span><span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token comment">//5. 执行sql</span>
            <span class="token keyword">int</span> count2 <span class="token operator">=</span> stmt<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span>sql2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//受影响的行数</span>
            <span class="token comment">//6. 处理结果</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>count2<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// ============提交事务==========</span>
            <span class="token comment">//程序运行到此处，说明没有出现任何问题，则需求提交事务</span>
            conn<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// ============回滚事务==========</span>
            <span class="token comment">//程序在出现异常时会执行到这个地方，此时就需要回滚事务</span>
            conn<span class="token punctuation">.</span><span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//7. 释放资源</span>
        stmt<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="statement" tabindex="-1"><a class="header-anchor" href="#statement" aria-hidden="true">#</a> Statement</h2><ul><li><p>执行DDL、DML语句 （ 修改 删除 ）</p></li><li><p>代码实现</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
  * 执行DML语句 修改
  * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
  */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDML</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span>  <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">//1. 注册驱动</span>
    <span class="token comment">//Class.forName(&quot;com.mysql.jdbc.Driver&quot;);</span>
    <span class="token comment">//2. 获取连接：如果连接的是本机mysql并且端口是默认的 3306 可以简化书写</span>
    <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;jdbc:mysql:///db1?useSSL=false&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">&quot;1234&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//3. 定义sql</span>
    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;update account set money = 3000 where id = 1&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">//4. 获取执行sql的对象 Statement</span>
    <span class="token class-name">Statement</span> stmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//5. 执行sql</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> stmt<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//执行完DML语句，受影响的行数</span>
    <span class="token comment">//6. 处理结果</span>
    <span class="token comment">//System.out.println(count);</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>count <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;修改成功~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;修改失败~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//7. 释放资源</span>
    stmt<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
  * 执行DDL语句 删除
  * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
  */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDDL</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span>  <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">//1. 注册驱动</span>
    <span class="token comment">//Class.forName(&quot;com.mysql.jdbc.Driver&quot;);</span>
    <span class="token comment">//2. 获取连接：如果连接的是本机mysql并且端口是默认的 3306 可以简化书写</span>
    <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;jdbc:mysql:///db1?useSSL=false&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">&quot;1234&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//3. 定义sql</span>
    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;drop database db2&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">//4. 获取执行sql的对象 Statement</span>
    <span class="token class-name">Statement</span> stmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//5. 执行sql</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> stmt<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//执行完DDL语句，可能是0</span>
    <span class="token comment">//6. 处理结果</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//7. 释放资源</span>
    stmt<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="resultset" tabindex="-1"><a class="header-anchor" href="#resultset" aria-hidden="true">#</a> ResultSet</h2><ul><li><p>执行DQL语句 （ 查询 ）</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ResultSet</span>  <span class="token function">executeQuery</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span>：执行<span class="token constant">DQL</span> 语句，返回 <span class="token class-name">ResultSet</span> 对象
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>从 <code>ResultSet</code> 对象中获取数据</p><ul><li>boolean next() <ul><li>将光标从当前位置向前移动一行</li><li>判断当前行是否为有效行</li><li>true ： 有效航，当前行有数据</li><li>false ： 无效行，当前行没有数据</li></ul></li><li>xxx getXxx(参数)：获取数据 <ul><li>xxx : 数据类型；如： int getInt(参数) ；String getString(参数)</li><li>参数 <ul><li>int类型的参数：列的编号，从1开始</li><li>String类型的参数： 列的名称</li></ul></li></ul></li></ul></li><li><p>代码实现</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
  * 执行DQL
  * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
  */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testResultSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span>  <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">//1. 注册驱动</span>
    <span class="token comment">//Class.forName(&quot;com.mysql.jdbc.Driver&quot;);</span>
    <span class="token comment">//2. 获取连接：如果连接的是本机mysql并且端口是默认的 3306 可以简化书写</span>
    <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;jdbc:mysql:///db1?useSSL=false&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">&quot;1234&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//3. 定义sql</span>
    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select * from account&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">//4. 获取statement对象</span>
    <span class="token class-name">Statement</span> stmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//5. 执行sql</span>
    <span class="token class-name">ResultSet</span> rs <span class="token operator">=</span> stmt<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//6. 处理结果， 遍历rs中的所有数据</span>
    <span class="token comment">/* // 6.1 光标向下移动一行，并且判断当前行是否有数据
        while (rs.next()){
            //6.2 获取数据  getXxx()
            int id = rs.getInt(1);
            String name = rs.getString(2);
            double money = rs.getDouble(3);

            System.out.println(id);
            System.out.println(name);
            System.out.println(money);

            System.out.println(&quot;--------------&quot;);

        }*/</span>
    <span class="token comment">// 6.1 光标向下移动一行，并且判断当前行是否有数据</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>rs<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//6.2 获取数据  getXxx()</span>
        <span class="token keyword">int</span> id <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">double</span> money <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getDouble</span><span class="token punctuation">(</span><span class="token string">&quot;money&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>money<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//7. 释放资源</span>
    rs<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    stmt<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>存入 ArrayList集合</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
  * 查询account账户表数据，封装为Account对象中，并且存储到ArrayList集合中
  * 1. 定义实体类Account
  * 2. 查询数据，封装到Account对象中
  * 3. 将Account对象存入ArrayList集合中
  */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testResultSet2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span>  <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">//1. 注册驱动</span>
    <span class="token comment">//Class.forName(&quot;com.mysql.jdbc.Driver&quot;);</span>
    <span class="token comment">//2. 获取连接：如果连接的是本机mysql并且端口是默认的 3306 可以简化书写</span>
    <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;jdbc:mysql:///db1?useSSL=false&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">&quot;1234&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//3. 定义sql</span>
    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select * from account&quot;</span><span class="token punctuation">;</span>

    <span class="token comment">//4. 获取statement对象</span>
    <span class="token class-name">Statement</span> stmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//5. 执行sql</span>
    <span class="token class-name">ResultSet</span> rs <span class="token operator">=</span> stmt<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 创建集合</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Account</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   
    <span class="token comment">// 6.1 光标向下移动一行，并且判断当前行是否有数据</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>rs<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Account</span> account <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Account</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//6.2 获取数据  getXxx()</span>
        <span class="token keyword">int</span> id <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">double</span> money <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getDouble</span><span class="token punctuation">(</span><span class="token string">&quot;money&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//赋值</span>
        account<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        account<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        account<span class="token punctuation">.</span><span class="token function">setMoney</span><span class="token punctuation">(</span>money<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 存入集合</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>account<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//7. 释放资源</span>
    rs<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    stmt<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="driud数据库连接池" tabindex="-1"><a class="header-anchor" href="#driud数据库连接池" aria-hidden="true">#</a> Driud数据库连接池</h2><h3 id="driud使用" tabindex="-1"><a class="header-anchor" href="#driud使用" aria-hidden="true">#</a> Driud使用</h3><ul><li><p>导入jar包 druid-1.1.12.jar</p></li><li><p>定义配置文件</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>driverClassName=com.mysql.jdbc.Driver
url=jdbc:mysql:///db1?useSSL=false&amp;useServerPrepStmts=true
username=root
password=1234
# 初始化连接数量
initialSize=5
# 最大连接数
maxActive=10
# 最大等待时间
maxWait=3000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>加载配置文件</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Properties</span> prop <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
prop<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc-demo/src/druid.properties&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>获取数据库连接池对象</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">DataSource</span> dataSource <span class="token operator">=</span> <span class="token class-name">DruidDataSourceFactory</span><span class="token punctuation">.</span><span class="token function">createDataSource</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>获取连接</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Connection</span> connection <span class="token operator">=</span> dataSource<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>connection<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取到了连接后就可以继续做其他操作了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h3><ul><li><p>查询</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token doc-comment comment">/**
   * 查询所有
   * 1. SQL：select * from tb_brand;
   * 2. 参数：不需要
   * 3. 结果：List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Brand</span><span class="token punctuation">&gt;</span></span>
   */</span>

<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSelectAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">//1. 获取Connection</span>
    <span class="token comment">//3. 加载配置文件</span>
    <span class="token class-name">Properties</span> prop <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    prop<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc-demo/src/druid.properties&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//4. 获取连接池对象</span>
    <span class="token class-name">DataSource</span> dataSource <span class="token operator">=</span> <span class="token class-name">DruidDataSourceFactory</span><span class="token punctuation">.</span><span class="token function">createDataSource</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//5. 获取数据库连接 Connection</span>
    <span class="token class-name">Connection</span> conn <span class="token operator">=</span> dataSource<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//2. 定义SQL</span>
    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select * from tb_brand;&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">//3. 获取pstmt对象</span>
    <span class="token class-name">PreparedStatement</span> pstmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//4. 设置参数</span>
    <span class="token comment">//5. 执行SQL</span>
    <span class="token class-name">ResultSet</span> rs <span class="token operator">=</span> pstmt<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//6. 处理结果 List&lt;Brand&gt; 封装Brand对象，装载List集合</span>
    <span class="token class-name">Brand</span> brand <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Brand</span><span class="token punctuation">&gt;</span></span> brands <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>rs<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//获取数据</span>
        <span class="token keyword">int</span> id <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> brandName <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">&quot;brand_name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> companyName <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">&quot;company_name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> ordered <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token string">&quot;ordered&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> description <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">&quot;description&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> status <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token string">&quot;status&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//封装Brand对象</span>
        brand <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Brand</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        brand<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        brand<span class="token punctuation">.</span><span class="token function">setBrandName</span><span class="token punctuation">(</span>brandName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        brand<span class="token punctuation">.</span><span class="token function">setCompanyName</span><span class="token punctuation">(</span>companyName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        brand<span class="token punctuation">.</span><span class="token function">setOrdered</span><span class="token punctuation">(</span>ordered<span class="token punctuation">)</span><span class="token punctuation">;</span>
        brand<span class="token punctuation">.</span><span class="token function">setDescription</span><span class="token punctuation">(</span>description<span class="token punctuation">)</span><span class="token punctuation">;</span>
        brand<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//装载集合</span>
        brands<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>brands<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//7. 释放资源</span>
    rs<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    pstmt<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>添加数据</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
  * 添加
  * 1. SQL：insert into tb_brand(brand_name, company_name, ordered, description, status) values(?,?,?,?,?);
  * 2. 参数：需要，除了id之外的所有参数信息
  * 3. 结果：boolean
  */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">// 接收页面提交的参数</span>
    <span class="token class-name">String</span> brandName <span class="token operator">=</span> <span class="token string">&quot;香飘飘&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> companyName <span class="token operator">=</span> <span class="token string">&quot;香飘飘&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> ordered <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> description <span class="token operator">=</span> <span class="token string">&quot;绕地球一圈&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> status <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token comment">//1. 获取Connection</span>
    <span class="token comment">//3. 加载配置文件</span>
    <span class="token class-name">Properties</span> prop <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    prop<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc-demo/src/druid.properties&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//4. 获取连接池对象</span>
    <span class="token class-name">DataSource</span> dataSource <span class="token operator">=</span> <span class="token class-name">DruidDataSourceFactory</span><span class="token punctuation">.</span><span class="token function">createDataSource</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//5. 获取数据库连接 Connection</span>
    <span class="token class-name">Connection</span> conn <span class="token operator">=</span> dataSource<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//2. 定义SQL</span>
    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;insert into tb_brand(brand_name, company_name, ordered, description, status) values(?,?,?,?,?);&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">//3. 获取pstmt对象</span>
    <span class="token class-name">PreparedStatement</span> pstmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//4. 设置参数</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>brandName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span>companyName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setInt</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span>ordered<span class="token punctuation">)</span><span class="token punctuation">;</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span>description<span class="token punctuation">)</span><span class="token punctuation">;</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setInt</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//5. 执行SQL</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> pstmt<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 影响的行数</span>
    <span class="token comment">//6. 处理结果</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>count <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//7. 释放资源</span>
    pstmt<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改数据</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
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
   */</span>

<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">// 接收页面提交的参数</span>
    <span class="token class-name">String</span> brandName <span class="token operator">=</span> <span class="token string">&quot;香飘飘&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> companyName <span class="token operator">=</span> <span class="token string">&quot;香飘飘&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> ordered <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> description <span class="token operator">=</span> <span class="token string">&quot;绕地球三圈&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> status <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> id <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>

    <span class="token comment">//1. 获取Connection</span>
    <span class="token comment">//3. 加载配置文件</span>
    <span class="token class-name">Properties</span> prop <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    prop<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc-demo/src/druid.properties&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//4. 获取连接池对象</span>
    <span class="token class-name">DataSource</span> dataSource <span class="token operator">=</span> <span class="token class-name">DruidDataSourceFactory</span><span class="token punctuation">.</span><span class="token function">createDataSource</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//5. 获取数据库连接 Connection</span>
    <span class="token class-name">Connection</span> conn <span class="token operator">=</span> dataSource<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//2. 定义SQL</span>
    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot; update tb_brand\\n&quot;</span> <span class="token operator">+</span>
        <span class="token string">&quot;         set brand_name  = ?,\\n&quot;</span> <span class="token operator">+</span>
        <span class="token string">&quot;         company_name= ?,\\n&quot;</span> <span class="token operator">+</span>
        <span class="token string">&quot;         ordered     = ?,\\n&quot;</span> <span class="token operator">+</span>
        <span class="token string">&quot;         description = ?,\\n&quot;</span> <span class="token operator">+</span>
        <span class="token string">&quot;         status      = ?\\n&quot;</span> <span class="token operator">+</span>
        <span class="token string">&quot;     where id = ?&quot;</span><span class="token punctuation">;</span>

    <span class="token comment">//3. 获取pstmt对象</span>
    <span class="token class-name">PreparedStatement</span> pstmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//4. 设置参数</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>brandName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span>companyName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setInt</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span>ordered<span class="token punctuation">)</span><span class="token punctuation">;</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span>description<span class="token punctuation">)</span><span class="token punctuation">;</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setInt</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setInt</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//5. 执行SQL</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> pstmt<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 影响的行数</span>
    <span class="token comment">//6. 处理结果</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>count <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//7. 释放资源</span>
    pstmt<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>删除数据</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
  * 删除
  * 1. SQL：
            delete from tb_brand where id = ?
  * 2. 参数：需要，id
  * 3. 结果：boolean
  */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDeleteById</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">// 接收页面提交的参数</span>
    <span class="token keyword">int</span> id <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
    <span class="token comment">//1. 获取Connection</span>
    <span class="token comment">//3. 加载配置文件</span>
    <span class="token class-name">Properties</span> prop <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    prop<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc-demo/src/druid.properties&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//4. 获取连接池对象</span>
    <span class="token class-name">DataSource</span> dataSource <span class="token operator">=</span> <span class="token class-name">DruidDataSourceFactory</span><span class="token punctuation">.</span><span class="token function">createDataSource</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//5. 获取数据库连接 Connection</span>
    <span class="token class-name">Connection</span> conn <span class="token operator">=</span> dataSource<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//2. 定义SQL</span>
    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot; delete from tb_brand where id = ?&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">//3. 获取pstmt对象</span>
    <span class="token class-name">PreparedStatement</span> pstmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//4. 设置参数</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setInt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//5. 执行SQL</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> pstmt<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 影响的行数</span>
    <span class="token comment">//6. 处理结果</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>count <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//7. 释放资源</span>
    pstmt<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,17),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","JavaWeb-JDBC.html.vue"]]);export{k as default};
