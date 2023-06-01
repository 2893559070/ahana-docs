import{_ as l,r as i,o as u,c as r,b as n,d as s,e,w as o,a as t}from"./app-676abf65.js";const d={},k=t('<h1 id="elasticsearch01" tabindex="-1"><a class="header-anchor" href="#elasticsearch01" aria-hidden="true">#</a> ElasticSearch01</h1><h2 id="_1-今日内容" tabindex="-1"><a class="header-anchor" href="#_1-今日内容" aria-hidden="true">#</a> <strong>1-今日内容</strong></h2><ol><li><p>初识 ElasticSearch</p></li><li><p>安装 ElasticSearch</p></li><li><p>ElasticSearch 核心概念</p></li><li><p>操作 ElasticSearch</p></li><li><p>ElasticSearch JavaAPI</p></li></ol><h2 id="_2-初识elasticsearch" tabindex="-1"><a class="header-anchor" href="#_2-初识elasticsearch" aria-hidden="true">#</a> <strong>2-初识ElasticSearch</strong></h2><h3 id="_2-1-基于数据库查询的问题" tabindex="-1"><a class="header-anchor" href="#_2-1-基于数据库查询的问题" aria-hidden="true">#</a> 2.1-基于数据库查询的问题</h3>',5),v=["src"],m=t('<h3 id="_2-2-倒排索引" tabindex="-1"><a class="header-anchor" href="#_2-2-倒排索引" aria-hidden="true">#</a> <strong>2.2-倒排索引</strong></h3><p><strong>倒排索引</strong>：将文档进行分词，形成词条和id的对应关系即为反向索引。</p><p>以唐诗为例，所处包含“前”的诗句</p><p>正向索引：由《静夜思》--&gt;窗前明月光---&gt;“前”字</p><p>反向索引：“前”字--&gt;窗前明月光--&gt;《静夜思》</p><p>反向索引的实现就是对诗句进行分词，分成单个的词，由词推据，即为反向索引</p><p>“床前明月光”--&gt; 分词</p><p>将一段文本按照一定的规则，拆分为不同的词条（term）</p>',8),b=["src"],g=["src"],q=t('<h3 id="_2-3-es存储和查询的原理" tabindex="-1"><a class="header-anchor" href="#_2-3-es存储和查询的原理" aria-hidden="true">#</a> <strong>2.3-ES存储和查询的原理</strong></h3><p><strong>index（索引）</strong>：相当于mysql的库</p><p><strong>映射</strong>：相当于mysql 的表结构</p><p><strong>document(文档)</strong>：相当于mysql的表中的数据</p><p><strong>数据库查询存在的问题：</strong></p><ol><li>性能低：使用模糊查询，左边有通配符，不会走索引，会全表扫描，性能低</li><li>功能弱：如果以”华为手机“作为条件，查询不出来数据</li></ol><p>Es使用倒排索引，对title 进行分词</p>',7),h=["src"],y=n("li",null,[n("p",null,"使用“手机”作为关键字查询"),n("p",null,"生成的倒排索引中，词条会排序，形成一颗树形结构，提升词条的查询速度")],-1),_=n("p",null,"使用“华为手机”作为关键字查询",-1),f=n("p",null,"华为：1,3",-1),x=n("p",null,"手机：1,2,3",-1),w=["src"],E=n("h3",{id:"_2-4-es概念详解",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-4-es概念详解","aria-hidden":"true"},"#"),s(),n("strong",null,"2.4-ES概念详解")],-1),S=n("p",null,"•ElasticSearch是一个基于Lucene的搜索服务器",-1),j=["src"],I=n("p",null,"•是一个分布式、高扩展、高实时的搜索与数据分析引擎",-1),R=n("p",null,"•基于RESTful web接口",-1),T=n("p",null,"•Elasticsearch是用Java语言开发的，并作为Apache许可条款下的开放源码发布，是一种流行的企业级搜索引擎",-1),O={href:"https://www.elastic.co/",target:"_blank",rel:"noopener noreferrer"},A=n("p",null,"应用场景",-1),D=n("p",null,"•搜索：海量数据的查询",-1),C=n("p",null,"•日志数据分析",-1),N=n("p",null,"•实时数据分析",-1),P=n("h2",{id:"_3-安装elasticsearch",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-安装elasticsearch","aria-hidden":"true"},"#"),s(),n("strong",null,"3-安装ElasticSearch")],-1),L=n("h3",{id:"_3-1-es安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-1-es安装","aria-hidden":"true"},"#"),s(" 3.1-ES安装")],-1),G=t(`<p>查看elastic是否启动</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ps -ef|grep elastic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-2-es辅助工具安装" tabindex="-1"><a class="header-anchor" href="#_3-2-es辅助工具安装" aria-hidden="true">#</a> <strong>3.2-ES辅助工具安装</strong></h3>`,3),U=t(`<p>后台启动</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nohup ../bin/kibana &amp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-elasticsearch核心概念" tabindex="-1"><a class="header-anchor" href="#_4-elasticsearch核心概念" aria-hidden="true">#</a> <strong>4-ElasticSearch核心概念</strong></h2><p><strong>索引（index）</strong></p><p>ElasticSearch存储数据的地方，可以理解成关系型数据库中的数据库概念。</p><p><strong>映射（mapping）</strong></p><p>mapping定义了每个字段的类型、字段所使用的分词器等。相当于关系型数据库中的表结构。</p><p><strong>文档（document）</strong></p><p>Elasticsearch中的最小数据单元，常以json格式显示。一个document相当于关系型数据库中的一行数据。</p><p><strong>倒排索引</strong></p><p>一个倒排索引由文档中所有不重复词的列表构成，对于其中每个词，对应一个包含它的文档id列表。</p><p><strong>类型（type）</strong></p><p>一种type就像一类表。如用户表、角色表等。在Elasticsearch7.X默认type为_doc</p><pre><code> \\- ES 5.x中一个index可以有多种type。

  \\- ES 6.x中一个index只能有一种type。

  \\- ES 7.x以后，将逐步移除type这个概念，现在的操作已经不再使用，默认_doc
</code></pre><h2 id="_5-脚本操作es" tabindex="-1"><a class="header-anchor" href="#_5-脚本操作es" aria-hidden="true">#</a> <strong>5-脚本操作ES</strong></h2><h3 id="_5-1-restful风格介绍" tabindex="-1"><a class="header-anchor" href="#_5-1-restful风格介绍" aria-hidden="true">#</a> 5.1-RESTful风格介绍</h3><p>1.ST（Representational State Transfer），表述性状态转移，是一组架构约束条件和原则。满足这些约束条件和原则的应用程序或设计就是RESTful。就是一种定义接口的规范。</p><p>2.基于HTTP。</p><p>3.使用XML格式定义或JSON格式定义。</p><p>4.每一个URI代表1种资源。</p><p>5.客户端使用GET、POST、PUT、DELETE 4个表示操作方式的动词对服务端资源进行操作：</p><p>GET：用来获取资源</p><p>POST：用来新建资源（也可以用于更新资源）</p><p>PUT：用来更新资源</p><p>DELETE：用来删除资源</p>`,25),B=["src"],J=t(`<h3 id="_5-2-操作索引" tabindex="-1"><a class="header-anchor" href="#_5-2-操作索引" aria-hidden="true">#</a> <strong>5.2-操作索引</strong></h3><p><strong>PUT</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://ip:端口/索引名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET http://ip:端口/索引名称  # 查询单个索引信息
GET http://ip:端口/索引名称1,索引名称2...  # 查询多个索引信息
GET http://ip:端口/_all  # 查询所有索引信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>•删除索引</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE http://ip:端口/索引名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>•关闭、打开索引</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST http://ip:端口/索引名称/_close  
POST http://ip:端口/索引名称/_open 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-es数据类型" tabindex="-1"><a class="header-anchor" href="#_5-3-es数据类型" aria-hidden="true">#</a> <strong>5.3-ES数据类型</strong></h3><ol><li><strong>简单数据类型</strong></li></ol><ul><li>字符串</li></ul><p>聚合：相当于mysql 中的sum（求和）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>text：会分词，不支持聚合

keyword：不会分词，将全部内容作为一个词条，支持聚合
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),z=["src"],F=n("li",null,"布尔：boolean",-1),H=n("li",null,"二进制：binary",-1),M=n("li",null,"范围类型",-1),$=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>integer_range, float_range, long_range, double_range, date_range 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>日期:date</li></ul><ol start="2"><li><strong>复杂数据类型</strong></li></ol><p>•数组：[ ] Nested: <code>nested</code> (for arrays of JSON objects 数组类型的JSON对象)</p><p>•对象：{ } Object: object(for single JSON objects 单个JSON对象)</p><h3 id="_5-4-使用kibana操作映射" tabindex="-1"><a class="header-anchor" href="#_5-4-使用kibana操作映射" aria-hidden="true">#</a> <strong>5.4-使用kibana操作映射</strong></h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code> PUT person
 
 GET person
 #添加映射
 PUT /person/_mapping
 <span class="token punctuation">{</span>
   <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
     <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
       <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;text&quot;</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token property">&quot;age&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
       <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;integer&quot;</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>


 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#创建索引并添加映射</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code> 
 #创建索引并添加映射
 PUT /person1
<span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;integer&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET person1/_mapping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加字段</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>#添加字段
PUT /person1/_mapping
<span class="token punctuation">{</span>
  <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;integer&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-5-操作文档" tabindex="-1"><a class="header-anchor" href="#_5-5-操作文档" aria-hidden="true">#</a> <strong>5.5-操作文档</strong></h3><p>•添加文档，指定id</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST /person1/_doc/<span class="token number">2</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;age&quot;</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span><span class="token string">&quot;北京&quot;</span>
<span class="token punctuation">}</span>

GET /person1/_doc/<span class="token number">1</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>•添加文档，不指定id</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>#添加文档，不指定id
POST /person1/_doc/
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;age&quot;</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span><span class="token string">&quot;北京&quot;</span>
<span class="token punctuation">}</span>

#查询所有文档
GET /person1/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>#删除指定id文档
DELETE /person1/_doc/<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-分词器" tabindex="-1"><a class="header-anchor" href="#_6-分词器" aria-hidden="true">#</a> 6-分词器</h2><h3 id="_6-1分词器-介绍" tabindex="-1"><a class="header-anchor" href="#_6-1分词器-介绍" aria-hidden="true">#</a> 6.1分词器-介绍</h3><p>•IKAnalyzer是一个开源的，基于java语言开发的轻量级的中文分词工具包</p><p>•是一个基于Maven构建的项目</p><p>•具有60万字/秒的高速处理能力</p><p>•支持用户词典扩展定义</p>`,23),W={href:"https://github.com/medcl/elasticsearch-analysis-ik/archive/v7.4.0.zip",target:"_blank",rel:"noopener noreferrer"},X=n("p",null,"安装包在资料文件夹中提供",-1),V=n("h3",{id:"_6-2-ik分词器安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-2-ik分词器安装","aria-hidden":"true"},"#"),s(),n("strong",null,"6.2-ik分词器安装")],-1),K=t(`<p>执行如下命令时如果出现 打包失败（501码）将maven镜像换成阿里云的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mvn package
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>/opt/apache-maven-3.1.1/conf/setting.xml</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirror</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>alimaven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>aliyun maven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://maven.aliyun.com/nexus/content/groups/public/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>central<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirror</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-ik分词器使用" tabindex="-1"><a class="header-anchor" href="#_6-3-ik分词器使用" aria-hidden="true">#</a> <strong>6.3-ik分词器使用</strong></h3><p>IK分词器有两种分词模式：ik_max_word和ik_smart模式。</p><p>1、<strong>ik_max_word</strong></p><p>会将文本做最细粒度的拆分，比如会将“乒乓球明年总冠军”拆分为“乒乓球、乒乓、球、明年、总冠军、冠军。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>#方式一ik_max_word
GET /_analyze
<span class="token punctuation">{</span>
  <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_max_word&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;乒乓球明年总冠军&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ik_max_word分词器执行如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;tokens&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;乒乓球&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span> <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;CN_WORD&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;乒乓&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;CN_WORD&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span> <span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;球&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span> <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;CN_CHAR&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span> <span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;明年&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span> <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span> <span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;CN_WORD&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span> <span class="token operator">:</span> <span class="token number">3</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;总冠军&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span> <span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span> <span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;CN_WORD&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span> <span class="token operator">:</span> <span class="token number">4</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;冠军&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span> <span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span> <span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;CN_WORD&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span> <span class="token operator">:</span> <span class="token number">5</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、<strong>ik_smart</strong> 会做最粗粒度的拆分，比如会将“乒乓球明年总冠军”拆分为乒乓球、明年、总冠军。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>#方式二ik_smart
GET /_analyze
<span class="token punctuation">{</span>
  <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_smart&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;乒乓球明年总冠军&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ik_smart分词器执行如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;tokens&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;乒乓球&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span> <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;CN_WORD&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;明年&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span> <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span> <span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;CN_WORD&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span> <span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;总冠军&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span> <span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span> <span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;CN_WORD&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span> <span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由此可见 使用ik_smart可以将文本&quot;text&quot;: &quot;乒乓球明年总冠军&quot;分成了【乒乓球】【明年】【总冠军】</p><p>这样看的话，这样的分词效果达到了我们的要求。</p><h3 id="_6-4使用ik分词器-查询文档" tabindex="-1"><a class="header-anchor" href="#_6-4使用ik分词器-查询文档" aria-hidden="true">#</a> <strong>6.4使用IK分词器-查询文档</strong></h3><p>•词条查询：term</p><p>​ 词条查询不会分析查询条件，只有当词条和查询字符串完全匹配时才匹配搜索</p><p>•全文查询：match</p><p>​ 全文查询会分析查询条件，先将查询条件进行分词，然后查询，求并集</p><p>1.创建索引，添加映射，并指定分词器为ik分词器</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT person2
<span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_max_word&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.添加文档</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /person2/_doc/1
{
  &quot;name&quot;:&quot;张三&quot;,
  &quot;age&quot;:18,
  &quot;address&quot;:&quot;北京海淀区&quot;
}

POST /person2/_doc/2
{
  &quot;name&quot;:&quot;李四&quot;,
  &quot;age&quot;:18,
  &quot;address&quot;:&quot;北京朝阳区&quot;
}

POST /person2/_doc/3
{
  &quot;name&quot;:&quot;王五&quot;,
  &quot;age&quot;:18,
  &quot;address&quot;:&quot;北京昌平区&quot;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.查询映射</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET person2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,28),Q=["src"],Y=t(`<p>4.查看分词效果</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET _analyze
<span class="token punctuation">{</span>
  <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_max_word&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;北京海淀&quot;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.词条查询：term</p><p>查询person2中匹配到&quot;北京&quot;两字的词条</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /person2/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;北京&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.全文查询：match</p><p>​ 全文查询会分析查询条件，先将查询条件进行分词，然后查询，求并集</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /person2/_search
{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;address&quot;:&quot;北京昌平&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-elasticsearch-javaapi" tabindex="-1"><a class="header-anchor" href="#_7-elasticsearch-javaapi" aria-hidden="true">#</a> <strong>7-ElasticSearch JavaApi-</strong></h2><h3 id="_7-1springboot整合es" tabindex="-1"><a class="header-anchor" href="#_7-1springboot整合es" aria-hidden="true">#</a> 7.1SpringBoot整合ES</h3><p>①搭建SpringBoot工程</p><p>②引入ElasticSearch相关坐标</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--引入es的坐标--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.elasticsearch.client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>elasticsearch-rest-high-level-client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>7.4.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.elasticsearch.client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>elasticsearch-rest-client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>7.4.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.elasticsearch<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>elasticsearch<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>7.4.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>③测试</p><p>ElasticSearchConfig</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token comment">// 读取yml配置文件 指定读取前缀 prefix=&quot;elasticsearch&quot;</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix<span class="token operator">=</span><span class="token string">&quot;elasticsearch&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ElasticSearchConfig</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> host<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> port<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> host<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setHost</span><span class="token punctuation">(</span><span class="token class-name">String</span> host<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>host <span class="token operator">=</span> host<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getPort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> port<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPort</span><span class="token punctuation">(</span><span class="token keyword">int</span> port<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>port <span class="token operator">=</span> port<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">RestHighLevelClient</span> <span class="token function">client</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RestHighLevelClient</span><span class="token punctuation">(</span><span class="token class-name">RestClient</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span>
                <span class="token keyword">new</span> <span class="token class-name">HttpHost</span><span class="token punctuation">(</span>host<span class="token punctuation">,</span>port<span class="token punctuation">,</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ElasticsearchDay01ApplicationTests</p><p>注意：使用@Autowired注入RestHighLevelClient 如果报红线，则是因为配置类所在的包和测试类所在的包，包名不一致造成的</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">ElasticsearchDay01ApplicationTests</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">RestHighLevelClient</span> client<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 测试
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>client<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-创建索引" tabindex="-1"><a class="header-anchor" href="#_7-2-创建索引" aria-hidden="true">#</a> <strong>7.2-创建索引</strong></h3><p>1.添加索引</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
    * 添加索引
    * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IOException</span></span>
    */</span>
   <span class="token annotation punctuation">@Test</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
      <span class="token comment">//1.使用client获取操作索引对象</span>
       <span class="token class-name">IndicesClient</span> indices <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">indices</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token comment">//2.具体操作获取返回值</span>
       <span class="token comment">//2.1 设置索引名称</span>
       <span class="token class-name">CreateIndexRequest</span> createIndexRequest<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">CreateIndexRequest</span><span class="token punctuation">(</span><span class="token string">&quot;ahana&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

       <span class="token class-name">CreateIndexResponse</span> createIndexResponse <span class="token operator">=</span> indices<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>createIndexRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token comment">//3.根据返回值判断结果</span>
       <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>createIndexResponse<span class="token punctuation">.</span><span class="token function">isAcknowledged</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.添加索引，并添加映射</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token doc-comment comment">/**
     * 添加索引，并添加映射
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addIndexAndMapping</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
       <span class="token comment">//1.使用client获取操作索引对象</span>
        <span class="token class-name">IndicesClient</span> indices <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">indices</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//2.具体操作获取返回值</span>
        <span class="token comment">//2.具体操作，获取返回值</span>
        <span class="token class-name">CreateIndexRequest</span> createIndexRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CreateIndexRequest</span><span class="token punctuation">(</span><span class="token string">&quot;itcast&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//2.1 设置mappings</span>
        <span class="token class-name">String</span> mapping <span class="token operator">=</span> <span class="token string">&quot;{\\n&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;      \\&quot;properties\\&quot; : {\\n&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;        \\&quot;address\\&quot; : {\\n&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;          \\&quot;type\\&quot; : \\&quot;text\\&quot;,\\n&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;          \\&quot;analyzer\\&quot; : \\&quot;ik_max_word\\&quot;\\n&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;        },\\n&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;        \\&quot;age\\&quot; : {\\n&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;          \\&quot;type\\&quot; : \\&quot;long\\&quot;\\n&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;        },\\n&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;        \\&quot;name\\&quot; : {\\n&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;          \\&quot;type\\&quot; : \\&quot;keyword\\&quot;\\n&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;        }\\n&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;      }\\n&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;    }&quot;</span><span class="token punctuation">;</span>
        createIndexRequest<span class="token punctuation">.</span><span class="token function">mapping</span><span class="token punctuation">(</span>mapping<span class="token punctuation">,</span><span class="token class-name">XContentType</span><span class="token punctuation">.</span><span class="token constant">JSON</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">CreateIndexResponse</span> createIndexResponse <span class="token operator">=</span> indices<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>createIndexRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//3.根据返回值判断结果</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>createIndexResponse<span class="token punctuation">.</span><span class="token function">isAcknowledged</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-查询、删除、判断索引" tabindex="-1"><a class="header-anchor" href="#_7-3-查询、删除、判断索引" aria-hidden="true">#</a> <strong>7.3-查询、删除、判断索引</strong></h3><p>查询索引</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
   

    <span class="token doc-comment comment">/**
     * 查询索引
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">queryIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">IndicesClient</span> indices <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">indices</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">GetIndexRequest</span> getRequest<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">GetIndexRequest</span><span class="token punctuation">(</span><span class="token string">&quot;itcast&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">GetIndexResponse</span> response <span class="token operator">=</span> indices<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>getRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">MappingMetaData</span><span class="token punctuation">&gt;</span></span> mappings <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">getMappings</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//iter 提示foreach</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> key <span class="token operator">:</span> mappings<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>key<span class="token operator">+</span><span class="token string">&quot;===&quot;</span><span class="token operator">+</span>mappings<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSourceAsMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

   
   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除索引</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token doc-comment comment">/**
     * 删除索引
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
         <span class="token class-name">IndicesClient</span> indices <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">indices</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">DeleteIndexRequest</span> deleteRequest<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">DeleteIndexRequest</span><span class="token punctuation">(</span><span class="token string">&quot;ahana&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">AcknowledgedResponse</span> delete <span class="token operator">=</span> indices<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>deleteRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>delete<span class="token punctuation">.</span><span class="token function">isAcknowledged</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>索引是否存在</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token doc-comment comment">/**
     * 索引是否存在
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">existIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">IndicesClient</span> indices <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">indices</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">GetIndexRequest</span> getIndexRequest<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">GetIndexRequest</span><span class="token punctuation">(</span><span class="token string">&quot;ahana&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> exists <span class="token operator">=</span> indices<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span>getIndexRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>exists<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-4-添加文档" tabindex="-1"><a class="header-anchor" href="#_7-4-添加文档" aria-hidden="true">#</a> <strong>7.4-添加文档</strong></h3><p>1.添加文档,使用map作为数据</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addDoc1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;18&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;address&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;北京二环&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">IndexRequest</span> request<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">IndexRequest</span><span class="token punctuation">(</span><span class="token string">&quot;itcast&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">IndexResponse</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.添加文档,使用对象作为数据</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addDoc2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token class-name">Person</span> person<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    person<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    person<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    person<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    person<span class="token punctuation">.</span><span class="token function">setAddress</span><span class="token punctuation">(</span><span class="token string">&quot;北京三环&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">IndexRequest</span> request<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">IndexRequest</span><span class="token punctuation">(</span><span class="token string">&quot;itcast&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span><span class="token class-name">XContentType</span><span class="token punctuation">.</span><span class="token constant">JSON</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">IndexResponse</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-5-修改、查询、删除文档" tabindex="-1"><a class="header-anchor" href="#_7-5-修改、查询、删除文档" aria-hidden="true">#</a> <strong>7.5-修改、查询、删除文档</strong></h3><p>1.修改文档：添加文档时，如果id存在则修改，id不存在则添加</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * 修改文档：添加文档时，如果id存在则修改，id不存在则添加
     */</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">UpdateDoc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Person</span> person<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        person<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        person<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        person<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        person<span class="token punctuation">.</span><span class="token function">setAddress</span><span class="token punctuation">(</span><span class="token string">&quot;北京三环车王&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">IndexRequest</span> request<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">IndexRequest</span><span class="token punctuation">(</span><span class="token string">&quot;itcast&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span><span class="token class-name">XContentType</span><span class="token punctuation">.</span><span class="token constant">JSON</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">IndexResponse</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.根据id查询文档</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * 根据id查询文档
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getDoc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>

        <span class="token comment">//设置查询的索引、文档</span>
        <span class="token class-name">GetRequest</span> indexRequest<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">GetRequest</span><span class="token punctuation">(</span><span class="token string">&quot;itcast&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">GetResponse</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>indexRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">getSourceAsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.根据id删除文档</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
     * 根据id删除文档
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">delDoc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>

        <span class="token comment">//设置要删除的索引、文档</span>
        <span class="token class-name">DeleteRequest</span> deleteRequest<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">DeleteRequest</span><span class="token punctuation">(</span><span class="token string">&quot;itcast&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">DeleteResponse</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>deleteRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43);function Z(a,nn){const c=i("ExternalLinkIcon"),p=i("RouterLink");return u(),r("div",null,[k,n("img",{src:a.$withBase("/ElasticSearch/img/1580888245982.png"),alt:"foo"},null,8,v),m,n("img",{src:a.$withBase("/ElasticSearch/img/1580887683510.png"),alt:"foo"},null,8,b),n("img",{src:a.$withBase("/ElasticSearch/img/1580887667417.png"),alt:"foo"},null,8,g),q,n("img",{src:a.$withBase("/ElasticSearch/img/1581143412491.png"),alt:"foo"},null,8,h),n("ol",null,[y,n("li",null,[_,f,x,n("img",{src:a.$withBase("/ElasticSearch/img/1581143489911.png"),alt:"foo"},null,8,w)])]),E,S,n("img",{src:a.$withBase("/ElasticSearch/img/1580887955947.png"),alt:"foo"},null,8,j),I,R,T,n("p",null,[s("•官网："),n("a",O,[s("https://www.elastic.co/"),e(c)])]),A,D,C,N,P,L,n("p",null,[e(p,{to:"/views/ElasticSearch/Elasticsearch%20%E5%AE%89%E8%A3%85.html"},{default:o(()=>[s("参见ElasticSearch-ES安装.md")]),_:1})]),G,n("p",null,[e(p,{to:"/views/ElasticSearch/Elasticsearch%20%E5%AE%89%E8%A3%85.html"},{default:o(()=>[s("参见ElasticSearch-ES安装.md")]),_:1})]),U,n("img",{src:a.$withBase("/ElasticSearch/img/1580888675397.png"),alt:"foo"},null,8,B),J,n("ul",null,[n("li",null,[s("数值 "),n("img",{src:a.$withBase("/ElasticSearch/img/01.png"),alt:"foo"},null,8,z)]),F,H,M]),$,n("p",null,[s("•下载地址："),n("a",W,[s("https://github.com/medcl/elasticsearch-analysis-ik/archive/v7.4.0.zip"),e(c)])]),X,V,n("p",null,[e(p,{to:"/views/ElasticSearch/ik%E5%88%86%E8%AF%8D%E5%99%A8%E5%AE%89%E8%A3%85.html"},{default:o(()=>[s("ik分词器安装")]),_:1})]),K,s(),n("img",{src:a.$withBase("/ElasticSearch/img/1580879388109.png"),alt:"foo"},null,8,Q),Y])}const an=l(d,[["render",Z],["__file","ElasticSearch01.html.vue"]]);export{an as default};
