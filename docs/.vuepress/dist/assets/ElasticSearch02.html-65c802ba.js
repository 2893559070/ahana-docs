import{_ as c,r as i,o as l,c as u,b as n,d as t,e as p,w as o,a}from"./app-676abf65.js";const r={},d=a(`<h1 id="elasticsearch02" tabindex="-1"><a class="header-anchor" href="#elasticsearch02" aria-hidden="true">#</a> ElasticSearch02</h1><ol><li><p>ElasticSearch 高级操作</p></li><li><p>ElasticSearch 集群管理</p></li></ol><h2 id="_02-elasticsearch高级操作" tabindex="-1"><a class="header-anchor" href="#_02-elasticsearch高级操作" aria-hidden="true">#</a> <strong>02-ElasticSearch高级操作</strong></h2><h3 id="_2-1-bulk批量操作-脚本" tabindex="-1"><a class="header-anchor" href="#_2-1-bulk批量操作-脚本" aria-hidden="true">#</a> 2.1-bulk批量操作-脚本</h3><p>脚本：</p><p>测试用的5号文档</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /person1/_doc/5
{
  &quot;name&quot;:&quot;张三5号&quot;,
  &quot;age&quot;:18,
  &quot;address&quot;:&quot;北京海淀区&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>批量操作文本</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>#批量操作
#<span class="token number">1</span>.删除<span class="token number">5</span>号
#新增<span class="token number">8</span>号
#更新<span class="token number">2</span>号 name为<span class="token number">2</span>号
POST _bulk
<span class="token punctuation">{</span><span class="token property">&quot;delete&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;_index&quot;</span><span class="token operator">:</span><span class="token string">&quot;person1&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;_id&quot;</span><span class="token operator">:</span><span class="token string">&quot;5&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;create&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;_index&quot;</span><span class="token operator">:</span><span class="token string">&quot;person1&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;_id&quot;</span><span class="token operator">:</span><span class="token string">&quot;8&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;八号&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;age&quot;</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token property">&quot;address&quot;</span><span class="token operator">:</span><span class="token string">&quot;北京&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;update&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;_index&quot;</span><span class="token operator">:</span><span class="token string">&quot;person1&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;_id&quot;</span><span class="token operator">:</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;doc&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;2号&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span> <span class="token operator">:</span> <span class="token number">51</span><span class="token punctuation">,</span>
  <span class="token property">&quot;errors&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;items&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;delete&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;person1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;5&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_version&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;result&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;deleted&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_seq_no&quot;</span> <span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_primary_term&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;status&quot;</span> <span class="token operator">:</span> <span class="token number">200</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;create&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;person1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;8&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_version&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;result&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;created&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_seq_no&quot;</span> <span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_primary_term&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;status&quot;</span> <span class="token operator">:</span> <span class="token number">201</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;update&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;person1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_version&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;result&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;updated&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_seq_no&quot;</span> <span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_primary_term&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;status&quot;</span> <span class="token operator">:</span> <span class="token number">200</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-bulk批量操作-javaapi" tabindex="-1"><a class="header-anchor" href="#_2-2-bulk批量操作-javaapi" aria-hidden="true">#</a> <strong>2.2-bulk批量操作-JavaAPI</strong></h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token doc-comment comment">/**
     *  Bulk 批量操作
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>

        <span class="token comment">//创建bulkrequest对象，整合所有操作</span>
        <span class="token class-name">BulkRequest</span> bulkRequest <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">BulkRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

           <span class="token comment">/*
        # 1. 删除5号记录
        # 2. 添加6号记录
        # 3. 修改3号记录 名称为 “三号”
         */</span>
        <span class="token comment">//添加对应操作</span>
        <span class="token comment">//1. 删除5号记录</span>
        <span class="token class-name">DeleteRequest</span> deleteRequest<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">DeleteRequest</span><span class="token punctuation">(</span><span class="token string">&quot;person1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bulkRequest<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>deleteRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2. 添加6号记录</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;六号&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">IndexRequest</span> indexRequest<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">IndexRequest</span><span class="token punctuation">(</span><span class="token string">&quot;person1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;6&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
        bulkRequest<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>indexRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//3. 修改3号记录 名称为 “三号”</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> mapUpdate<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mapUpdate<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;三号&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">UpdateRequest</span> updateRequest<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">UpdateRequest</span><span class="token punctuation">(</span><span class="token string">&quot;person1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doc</span><span class="token punctuation">(</span>mapUpdate<span class="token punctuation">)</span><span class="token punctuation">;</span>

        bulkRequest<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>updateRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//执行批量操作</span>


        <span class="token class-name">BulkResponse</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">bulk</span><span class="token punctuation">(</span>bulkRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-导入数据-分析-创建索引" tabindex="-1"><a class="header-anchor" href="#_2-3-导入数据-分析-创建索引" aria-hidden="true">#</a> <strong>2.3-导入数据-分析&amp;创建索引</strong></h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT goods
<span class="token punctuation">{</span>
 <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_smart&quot;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;double&quot;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;date&quot;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token property">&quot;brandName&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
 
   <span class="token property">&quot;spec&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;object&quot;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token property">&quot;saleNum&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;integer&quot;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   
   <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;integer&quot;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-导入数据-代码实现" tabindex="-1"><a class="header-anchor" href="#_2-4-导入数据-代码实现" aria-hidden="true">#</a> <strong>2.4-导入数据-代码实现</strong></h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token doc-comment comment">/**
     * 从Mysql 批量导入 elasticSearch
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">//1.查询所有数据，mysql</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Goods</span><span class="token punctuation">&gt;</span></span> goodsList <span class="token operator">=</span> goodsMapper<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2.bulk导入</span>
        <span class="token class-name">BulkRequest</span> bulkRequest<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">BulkRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2.1 循环goodsList，创建IndexRequest添加数据</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Goods</span> goods <span class="token operator">:</span> goodsList<span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token comment">//2.2 设置spec规格信息 Map的数据   specStr:{}</span>
            <span class="token class-name">String</span> specStr <span class="token operator">=</span> goods<span class="token punctuation">.</span><span class="token function">getSpecStr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//将json格式字符串转为Map集合</span>
            <span class="token class-name">Map</span> map <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parseObject</span><span class="token punctuation">(</span>specStr<span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//设置spec map</span>
            goods<span class="token punctuation">.</span><span class="token function">setSpec</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//将goods对象转换为json字符串</span>
            <span class="token class-name">String</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>goods<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">IndexRequest</span> indexRequest<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">IndexRequest</span><span class="token punctuation">(</span><span class="token string">&quot;goods&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span><span class="token class-name">XContentType</span><span class="token punctuation">.</span><span class="token constant">JSON</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            bulkRequest<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>indexRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>


        <span class="token class-name">BulkResponse</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">bulk</span><span class="token punctuation">(</span>bulkRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-导入数据-代码实现-详解-选放" tabindex="-1"><a class="header-anchor" href="#_2-5-导入数据-代码实现-详解-选放" aria-hidden="true">#</a> <strong>2.5-导入数据-代码实现-详解（选放）</strong></h3><p>转换成JSON的原因：</p><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>#spec配置的数据类型是JSON对象，所以当存放字符串的时候报错
   &quot;spec&quot;: {  
    &quot;type&quot;: &quot;object&quot;
   },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>错误信息</p>`,21),k=["src"],v=a(`<h2 id="_3-elasticsearch查询" tabindex="-1"><a class="header-anchor" href="#_3-elasticsearch查询" aria-hidden="true">#</a> <strong>3-ElasticSearch查询</strong></h2><h3 id="_3-1-matchall-脚本" tabindex="-1"><a class="header-anchor" href="#_3-1-matchall-脚本" aria-hidden="true">#</a> 3.1-matchAll-脚本</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code># 默认情况下，es一次展示<span class="token number">10</span>条数据<span class="token punctuation">,</span>通过from和size来控制分页
# 查询结果详解

GET goods/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
<span class="token punctuation">}</span>

GET goods
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-matchall-javaapi" tabindex="-1"><a class="header-anchor" href="#_3-2-matchall-javaapi" aria-hidden="true">#</a> <strong>3.2-matchAll-JavaAPI</strong></h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
     * 查询所有
     *  1. matchAll
     *  2. 将查询结果封装为Goods对象，装载到List中
     *  3. 分页。默认显示10条
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">matchAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>

        <span class="token comment">//2. 构建查询请求对象，指定查询的索引名称</span>
        <span class="token class-name">SearchRequest</span> searchRequest<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">&quot;goods&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//4. 创建查询条件构建器SearchSourceBuilder</span>
        <span class="token class-name">SearchSourceBuilder</span> sourceBuilder<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">SearchSourceBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//6. 查询条件</span>
        <span class="token class-name">QueryBuilder</span> queryBuilder<span class="token operator">=</span> <span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchAllQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//5. 指定查询条件</span>
        sourceBuilder<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>queryBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//3. 添加查询条件构建器 SearchSourceBuilder</span>
        searchRequest<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>sourceBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 8 . 添加分页信息  不设置 默认10条</span>
<span class="token comment">//        sourceBuilder.from(0);</span>
<span class="token comment">//        sourceBuilder.size(100);</span>
        <span class="token comment">//1. 查询,获取查询结果</span>

        <span class="token class-name">SearchResponse</span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>searchRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//7. 获取命中对象 SearchHits</span>
        <span class="token class-name">SearchHits</span> hits <span class="token operator">=</span> searchResponse<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//7.1 获取总记录数</span>
      <span class="token class-name">Long</span> total<span class="token operator">=</span> hits<span class="token punctuation">.</span><span class="token function">getTotalHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;总数：&quot;</span><span class="token operator">+</span>total<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//7.2 获取Hits数据  数组</span>
        <span class="token class-name">SearchHit</span><span class="token punctuation">[</span><span class="token punctuation">]</span> hits1 <span class="token operator">=</span> hits<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//获取json字符串格式的数据</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Goods</span><span class="token punctuation">&gt;</span></span> goodsList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SearchHit</span> searchHit <span class="token operator">:</span> hits1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> sourceAsString <span class="token operator">=</span> searchHit<span class="token punctuation">.</span><span class="token function">getSourceAsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//转为java对象</span>
            <span class="token class-name">Goods</span> goods <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parseObject</span><span class="token punctuation">(</span>sourceAsString<span class="token punctuation">,</span> <span class="token class-name">Goods</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            goodsList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>goods<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Goods</span> goods <span class="token operator">:</span> goodsList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>goods<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置条件的疑问点</p>`,6),m=["src"],b=a(`<h3 id="_3-3-termquery" tabindex="-1"><a class="header-anchor" href="#_3-3-termquery" aria-hidden="true">#</a> <strong>3.3-termQuery</strong></h3><p>term查询和字段类型有关系，首先回顾一下ElasticSearch两个数据类型</p><p>ElasticSearch两个数据类型</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>text：会分词，不支持聚合

keyword：不会分词，将全部内容作为一个词条，支持聚合
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>term查询：不会对查询条件进行分词。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET goods/_search
{
  &quot;query&quot;: {
    &quot;term&quot;: {
      &quot;title&quot;: {
        &quot;value&quot;: &quot;华为&quot;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>term查询，查询text类型字段时，只有其中的单词相匹配都会查到，text字段会对数据进行分词</p><p>例如：查询title 为“华为”的，title type 为text</p>`,8),q=["src"],g=["src"],h=n("p",null,"查询categoryName 字段时，categoryName字段为keyword ,keyword：不会分词，将全部内容作为一个词条,",-1),y=n("p",null,"即完全匹配，才能查询出结果",-1),_=["src"],f=a(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET goods/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为手机&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),x=["src"],S=a(`<h3 id="_3-4-matchquery" tabindex="-1"><a class="header-anchor" href="#_3-4-matchquery" aria-hidden="true">#</a> <strong>3.4-matchQuery</strong></h3><p>match查询：</p><p>•会对查询条件进行分词。</p><p>•然后将分词后的查询条件和词条进行等值匹配</p><p>•默认取并集（OR）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># match查询
GET goods/_search
{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;title&quot;: &quot;华为手机&quot;
    }
  },
  &quot;size&quot;: 500
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>match 的默认搜索（or 并集）</p><p>例如：华为手机，会分词为 “华为”，“手机” 只要出现其中一个词条都会搜索到</p><p>match的 and（交集） 搜索</p><p>例如：例如：华为手机，会分词为 “华为”，“手机” 但要求“华为”，和“手机”同时出现在词条中</p><p><strong>总结：</strong></p><ul><li>term query会去倒排索引中寻找确切的term，它并不知道分词器的存在。这种查询适合<strong>keyword</strong> 、<strong>numeric</strong>、<strong>date</strong></li><li>match query知道分词器的存在。并且理解是如何被分词的</li></ul><h3 id="_3-5-模糊查询-脚本" tabindex="-1"><a class="header-anchor" href="#_3-5-模糊查询-脚本" aria-hidden="true">#</a> <strong>3.5-模糊查询-脚本</strong></h3><h3 id="_3-5-1-wildcard查询" tabindex="-1"><a class="header-anchor" href="#_3-5-1-wildcard查询" aria-hidden="true">#</a> 3.5.1-wildcard查询</h3><p>wildcard查询：会对查询条件进行分词。还可以使用通配符 ?（任意单个字符） 和 * （0个或多个字符）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;*华*&quot;  包含华字的
&quot;华*&quot;   华字后边多个字符
&quot;华?&quot;  华字后边多个字符
&quot;*华&quot;或&quot;?华&quot; 会引发全表（全索引）扫描 注意效率问题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code># wildcard 查询。查询条件分词，模糊查询
GET goods/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;wildcard&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华*&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-2正则查询" tabindex="-1"><a class="header-anchor" href="#_3-5-2正则查询" aria-hidden="true">#</a> 3.5.2正则查询</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\\W：匹配包括下划线的任何单词字符，等价于 [A-Z a-z 0-9_]   开头的反斜杠是转义符

+号多次出现

(.)*为任意字符
正则查询取决于正则表达式的效率
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>
GET goods/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;regexp&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\\\w+(.)*&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-3前缀查询" tabindex="-1"><a class="header-anchor" href="#_3-5-3前缀查询" aria-hidden="true">#</a> 3.5.3前缀查询</h3><p>对keyword类型支持比较好</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code># 前缀查询 对keyword类型支持比较好
GET goods/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;brandName&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;三&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-模糊查询-javaapi" tabindex="-1"><a class="header-anchor" href="#_3-6-模糊查询-javaapi" aria-hidden="true">#</a> <strong>3.6-模糊查询-JavaAPI</strong></h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//模糊查询</span>
<span class="token class-name">WildcardQueryBuilder</span> query <span class="token operator">=</span> <span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">wildcardQuery</span><span class="token punctuation">(</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;华*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//华后多个字符</span>
<span class="token comment">//正则查询</span>
 <span class="token class-name">RegexpQueryBuilder</span> query <span class="token operator">=</span> <span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">regexpQuery</span><span class="token punctuation">(</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\\\\w+(.)*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">//前缀查询</span>
 <span class="token class-name">PrefixQueryBuilder</span> query <span class="token operator">=</span> <span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">prefixQuery</span><span class="token punctuation">(</span><span class="token string">&quot;brandName&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7-范围-排序查询" tabindex="-1"><a class="header-anchor" href="#_3-7-范围-排序查询" aria-hidden="true">#</a> <strong>3.7-范围&amp;排序查询</strong></h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code># 范围查询

GET goods/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;range&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;gte&quot;</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;lte&quot;</span><span class="token operator">:</span> <span class="token number">3000</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;desc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token comment">//范围查询 以price 价格为条件</span>
<span class="token class-name">RangeQueryBuilder</span> query <span class="token operator">=</span> <span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">rangeQuery</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//指定下限</span>
query<span class="token punctuation">.</span><span class="token function">gte</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//指定上限</span>
query<span class="token punctuation">.</span><span class="token function">lte</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

sourceBuilder<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//排序  价格 降序排列</span>
sourceBuilder<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">,</span><span class="token class-name">SortOrder</span><span class="token punctuation">.</span><span class="token constant">DESC</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-8-querystring查询" tabindex="-1"><a class="header-anchor" href="#_3-8-querystring查询" aria-hidden="true">#</a> <strong>3.8-queryString查询</strong></h3><p>queryString 多条件查询</p><p>•会对查询条件进行分词。</p><p>•然后将分词后的查询条件和词条进行等值匹配</p><p>•默认取并集（OR）</p><p>•可以指定多个查询字段</p><p>query_string：识别query中的连接符（or 、and）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># queryString

GET goods/_search
{
  &quot;query&quot;: {
    &quot;query_string&quot;: {
      &quot;fields&quot;: [&quot;title&quot;,&quot;categoryName&quot;,&quot;brandName&quot;], 
      &quot;query&quot;: &quot;华为 AND 手机&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>simple_query_string：不识别query中的连接符（or 、and），查询时会将 “华为”、&quot;and&quot;、“手机”分别进行查询</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET goods/_search
{
  &quot;query&quot;: {
    &quot;simple_query_string&quot;: {
      &quot;fields&quot;: [&quot;title&quot;,&quot;categoryName&quot;,&quot;brandName&quot;], 
      &quot;query&quot;: &quot;华为 AND 手机&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>query_string：有default_operator连接符的脚本</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET goods/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;query_string&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;brandName&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;categoryName&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为手机 &quot;</span>
      <span class="token punctuation">,</span> <span class="token property">&quot;default_operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AND&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>java代码</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">QueryStringQueryBuilder</span> query <span class="token operator">=</span> <span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">queryStringQuery</span><span class="token punctuation">(</span><span class="token string">&quot;华为手机&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;categoryName&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;brandName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">defaultOperator</span><span class="token punctuation">(</span><span class="token class-name">Operator</span><span class="token punctuation">.</span><span class="token constant">AND</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>simple_query_string：有default_operator连接符的脚本</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET goods/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;simple_query_string&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;brandName&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;categoryName&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为手机 &quot;</span>
      <span class="token punctuation">,</span> <span class="token property">&quot;default_operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OR&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：query中的or and 是查询时 匹配条件是否同时出现----or 出现一个即可，and 两个条件同时出现</p><p>default_operator的or and 是对结果进行 并集（or）、交集（and）</p><h3 id="_3-9-布尔查询-脚本" tabindex="-1"><a class="header-anchor" href="#_3-9-布尔查询-脚本" aria-hidden="true">#</a> <strong>3.9-布尔查询-脚本</strong></h3><p>boolQuery：对多个查询条件连接。连接方式：</p><p>•must（and）：条件必须成立</p><p>•must_not（not）：条件必须不成立</p><p>•should（or）：条件可以成立</p><p>•filter：条件必须成立，性能比must高。不会计算得分</p><p>**得分:**即条件匹配度,匹配度越高，得分越高</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code># boolquery
#must和filter配合使用时，max_score（得分）是显示的
#must 默认数组形式
GET goods/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;brandName&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;filter&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span> 
        <span class="token punctuation">{</span>
        <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;手机&quot;</span>
        <span class="token punctuation">}</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token punctuation">{</span>
         <span class="token property">&quot;range&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;gte&quot;</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
            <span class="token property">&quot;lte&quot;</span><span class="token operator">:</span> <span class="token number">3000</span>
         <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
       <span class="token punctuation">}</span>
      
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
#filter 单独使用   filter可以是单个条件，也可多个条件（数组形式）
GET goods/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;brandName&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-10-布尔查询-javaapi" tabindex="-1"><a class="header-anchor" href="#_3-10-布尔查询-javaapi" aria-hidden="true">#</a> <strong>3.10-布尔查询-JavaAPI</strong></h3><p>布尔查询：boolQuery</p><ol><li>查询品牌名称为:华为</li><li>查询标题包含：手机</li><li>查询价格在：2000-3000</li></ol><p>must 、filter为连接方式</p><p>term、match为不同的查询方式</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>       <span class="token comment">//1.构建boolQuery</span>
        <span class="token class-name">BoolQueryBuilder</span> boolQuery <span class="token operator">=</span> <span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">boolQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//2.构建各个查询条件</span>
        <span class="token comment">//2.1 查询品牌名称为:华为</span>
        <span class="token class-name">TermQueryBuilder</span> termQueryBuilder <span class="token operator">=</span> <span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">termQuery</span><span class="token punctuation">(</span><span class="token string">&quot;brandName&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        boolQuery<span class="token punctuation">.</span><span class="token function">must</span><span class="token punctuation">(</span>termQueryBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//2.2. 查询标题包含：手机</span>
        <span class="token class-name">MatchQueryBuilder</span> matchQuery <span class="token operator">=</span> <span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchQuery</span><span class="token punctuation">(</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;手机&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        boolQuery<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>matchQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2.3 查询价格在：2000-3000</span>
        <span class="token class-name">RangeQueryBuilder</span> rangeQuery <span class="token operator">=</span> <span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">rangeQuery</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        rangeQuery<span class="token punctuation">.</span><span class="token function">gte</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        rangeQuery<span class="token punctuation">.</span><span class="token function">lte</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        boolQuery<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>rangeQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>

        sourceBuilder<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>boolQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-11-聚合查询-脚本" tabindex="-1"><a class="header-anchor" href="#_3-11-聚合查询-脚本" aria-hidden="true">#</a> <strong>3.11-聚合查询-脚本</strong></h3><p>•指标聚合：相当于MySQL的聚合函数。max、min、avg、sum等</p><p>•桶聚合：相当于MySQL的 group by 操作。不要对text类型的数据进行分组，会失败。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code># 聚合查询

# 指标聚合 聚合函数

GET goods/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;手机&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;max_price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

# 桶聚合  分组

GET goods/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;手机&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;goods_brands&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;brandName&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-12-聚合查询-javaapi" tabindex="-1"><a class="header-anchor" href="#_3-12-聚合查询-javaapi" aria-hidden="true">#</a> <strong>3.12-聚合查询-JavaAPI</strong></h3><p>聚合查询：桶聚合，分组查询</p><ol><li>查询title包含手机的数据</li><li>查询品牌列表</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
     * 聚合查询：桶聚合，分组查询
     * 1. 查询title包含手机的数据
     * 2. 查询品牌列表
     */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testAggQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>

    <span class="token class-name">SearchRequest</span> searchRequest<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">&quot;goods&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">SearchSourceBuilder</span> sourceBuilder<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">SearchSourceBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//1. 查询title包含手机的数据</span>

    <span class="token class-name">MatchQueryBuilder</span> queryBuilder <span class="token operator">=</span> <span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchQuery</span><span class="token punctuation">(</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;手机&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    sourceBuilder<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>queryBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//2. 查询品牌列表  只展示前100条</span>
    <span class="token class-name">AggregationBuilder</span> aggregation<span class="token operator">=</span><span class="token class-name">AggregationBuilders</span><span class="token punctuation">.</span><span class="token function">terms</span><span class="token punctuation">(</span><span class="token string">&quot;goods_brands&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;brandName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sourceBuilder<span class="token punctuation">.</span><span class="token function">aggregation</span><span class="token punctuation">(</span>aggregation<span class="token punctuation">)</span><span class="token punctuation">;</span>


    searchRequest<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>sourceBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">SearchResponse</span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>searchRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//7. 获取命中对象 SearchHits</span>
    <span class="token class-name">SearchHits</span> hits <span class="token operator">=</span> searchResponse<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//7.1 获取总记录数</span>
    <span class="token class-name">Long</span> total<span class="token operator">=</span> hits<span class="token punctuation">.</span><span class="token function">getTotalHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;总数：&quot;</span><span class="token operator">+</span>total<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// aggregations 对象</span>
    <span class="token class-name">Aggregations</span> aggregations <span class="token operator">=</span> searchResponse<span class="token punctuation">.</span><span class="token function">getAggregations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//将aggregations 转化为map</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Aggregation</span><span class="token punctuation">&gt;</span></span> aggregationMap <span class="token operator">=</span> aggregations<span class="token punctuation">.</span><span class="token function">asMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token comment">//通过key获取goods_brands 对象 使用Aggregation的子类接收  buckets属性在Terms接口中体现</span>

    <span class="token comment">//        Aggregation goods_brands1 = aggregationMap.get(&quot;goods_brands&quot;);</span>
    <span class="token class-name">Terms</span> goods_brands <span class="token operator">=</span><span class="token punctuation">(</span><span class="token class-name">Terms</span><span class="token punctuation">)</span> aggregationMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;goods_brands&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//获取buckets 数组集合</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Terms<span class="token punctuation">.</span>Bucket</span><span class="token punctuation">&gt;</span></span> buckets <span class="token operator">=</span> goods_brands<span class="token punctuation">.</span><span class="token function">getBuckets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span>map<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//遍历buckets   key 属性名，doc_count 统计聚合数</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Terms<span class="token punctuation">.</span>Bucket</span> bucket <span class="token operator">:</span> buckets<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bucket<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>bucket<span class="token punctuation">.</span><span class="token function">getKeyAsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>bucket<span class="token punctuation">.</span><span class="token function">getDocCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-13-高亮查询-脚本" tabindex="-1"><a class="header-anchor" href="#_3-13-高亮查询-脚本" aria-hidden="true">#</a> <strong>3.13-高亮查询-脚本</strong></h3><p>高亮三要素：</p><p>•高亮字段</p><p>•前缀</p><p>•后缀</p><p>默认前后缀 ：em</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">&gt;</span></span>手机<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET goods/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;电视&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;highlight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;pre_tags&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;font color=&#39;red&#39;&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;post_tags&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;/font&gt;&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-14-高亮查询-javaapi" tabindex="-1"><a class="header-anchor" href="#_3-14-高亮查询-javaapi" aria-hidden="true">#</a> <strong>3.14-高亮查询-JavaAPI</strong></h3><p>实施步骤： 高亮查询： 1. 设置高亮 高亮字段 前缀 后缀 2. 将高亮了的字段数据，替换原有数据</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
     *
     * 高亮查询：
     *  1. 设置高亮
     *      * 高亮字段
     *      * 前缀
     *      * 后缀
     *  2. 将高亮了的字段数据，替换原有数据
     */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testHighLightQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>


    <span class="token class-name">SearchRequest</span> searchRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">&quot;goods&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">SearchSourceBuilder</span> sourceBulider <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchSourceBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 1. 查询title包含手机的数据</span>
    <span class="token class-name">MatchQueryBuilder</span> query <span class="token operator">=</span> <span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchQuery</span><span class="token punctuation">(</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;手机&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    sourceBulider<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//设置高亮</span>
    <span class="token class-name">HighlightBuilder</span> highlighter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HighlightBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//设置三要素</span>
    highlighter<span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//设置前后缀标签</span>
    highlighter<span class="token punctuation">.</span><span class="token function">preTags</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;font color=&#39;red&#39;&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    highlighter<span class="token punctuation">.</span><span class="token function">postTags</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;/font&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//加载已经设置好的高亮配置</span>
    sourceBulider<span class="token punctuation">.</span><span class="token function">highlighter</span><span class="token punctuation">(</span>highlighter<span class="token punctuation">)</span><span class="token punctuation">;</span>

    searchRequest<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>sourceBulider<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">SearchResponse</span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>searchRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token class-name">SearchHits</span> searchHits <span class="token operator">=</span> searchResponse<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//获取记录数</span>
    <span class="token keyword">long</span> value <span class="token operator">=</span> searchHits<span class="token punctuation">.</span><span class="token function">getTotalHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;总记录数：&quot;</span><span class="token operator">+</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Goods</span><span class="token punctuation">&gt;</span></span> goodsList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">SearchHit</span><span class="token punctuation">[</span><span class="token punctuation">]</span> hits <span class="token operator">=</span> searchHits<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SearchHit</span> hit <span class="token operator">:</span> hits<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> sourceAsString <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getSourceAsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//转为java</span>
        <span class="token class-name">Goods</span> goods <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parseObject</span><span class="token punctuation">(</span>sourceAsString<span class="token punctuation">,</span> <span class="token class-name">Goods</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取高亮结果，替换goods中的title</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">HighlightField</span><span class="token punctuation">&gt;</span></span> highlightFields <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getHighlightFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">HighlightField</span> <span class="token class-name">HighlightField</span> <span class="token operator">=</span> highlightFields<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Text</span><span class="token punctuation">[</span><span class="token punctuation">]</span> fragments <span class="token operator">=</span> <span class="token class-name">HighlightField</span><span class="token punctuation">.</span><span class="token function">fragments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//highlight title替换 替换goods中的title</span>
        goods<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span>fragments<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        goodsList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>goods<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Goods</span> goods <span class="token operator">:</span> goodsList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>goods<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-15-重建索引-索引别名" tabindex="-1"><a class="header-anchor" href="#_3-15-重建索引-索引别名" aria-hidden="true">#</a> <strong>3.15-重建索引&amp;索引别名</strong></h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>#查询别名 默认别名无法查看，默认别名同索引名
GET goods/_alias/
#结果
<span class="token punctuation">{</span>
  <span class="token property">&quot;goods&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;aliases&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.新建student_index_v1索引</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code># -------重建索引-----------

# 新建student_index_v1。索引名称必须全部小写

PUT student_index_v1
<span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;birthday&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;date&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
#查看 student_index_v1 结构
GET student_index_v1
#添加数据
PUT student_index_v1/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;birthday&quot;</span><span class="token operator">:</span><span class="token string">&quot;1999-11-11&quot;</span>
<span class="token punctuation">}</span>
#查看数据
GET student_index_v1/_search

#添加数据
PUT student_index_v1/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;birthday&quot;</span><span class="token operator">:</span><span class="token string">&quot;1999年11月11日&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.重建索引:将student_index_v1 数据拷贝到 student_index_v2</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code># 业务变更了，需要改变birthday字段的类型为text

# <span class="token number">1</span>. 创建新的索引 student_index_v2
# <span class="token number">2</span>. 将student_index_v1 数据拷贝到 student_index_v2

# 创建新的索引 student_index_v2
PUT student_index_v2
<span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;birthday&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
# 将student_index_v1 数据拷贝到 student_index_v2
# _reindex 拷贝数据
POST _reindex
<span class="token punctuation">{</span>
  <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;student_index_v1&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dest&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;student_index_v2&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET student_index_v2/_search



PUT student_index_v2/_doc/<span class="token number">2</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;birthday&quot;</span><span class="token operator">:</span><span class="token string">&quot;1999年11月11日&quot;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.创建索引库别名：</p><p>注意：DELETE student_index_v1 这一操作将删除student_index_v1索引库，并不是删除别名</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code># 思考： 现在java代码中操作es，还是使用的实student_index_v1老的索引名称。
# <span class="token number">1</span>. 改代码（不推荐）
# <span class="token number">2</span>. 索引别名（推荐）

# 步骤：
# <span class="token number">0</span>. 先删除student_index_v1
# <span class="token number">1</span>. 给student_index_v2起个别名 student_index_v1



# 先删除student_index_v1
#DELETE student_index_v1 这一操作将删除student_index_v1索引库
#索引库默认的别名与索引库同名，无法删除

# 给student_index_v1起个别名 student_index_v11
POST student_index_v2/_alias/student_index_v11
#测试删除命令
POST /_aliases
<span class="token punctuation">{</span>
    <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token property">&quot;remove&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;student_index_v1&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;alias&quot;</span><span class="token operator">:</span> <span class="token string">&quot;student_index_v11&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

# 给student_index_v2起个别名 student_index_v1
POST student_index_v2/_alias/student_index_v1

#查询别名
GET goods/_alias/


GET student_index_v1/_search
GET student_index_v2/_search

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-elasticsearch-集群" tabindex="-1"><a class="header-anchor" href="#_4-elasticsearch-集群" aria-hidden="true">#</a> <strong>4-ElasticSearch 集群</strong></h2><h3 id="_4-1-集群介绍" tabindex="-1"><a class="header-anchor" href="#_4-1-集群介绍" aria-hidden="true">#</a> 4.1-集群介绍</h3><ul><li>集群和分布式：</li></ul><p>​ 集群：多个人做一样的事。</p><p>​ 分布式：多个人做不一样的事</p><ul><li>集群解决的问题：</li></ul><p>​ 让系统高可用</p><p>​ 分担请求压力</p><ul><li>分布式解决的问题：</li></ul><p>​ 分担存储和计算的压力，提速</p><p>​ 解耦</p>`,99),w=n("p",null,"集群和分布式架构往往是并存的",-1),j=["src"],E=a('<h3 id="_4-2-es集群相关概念" tabindex="-1"><a class="header-anchor" href="#_4-2-es集群相关概念" aria-hidden="true">#</a> <strong>4.2-ES集群相关概念</strong></h3><p>es 集群:</p><p>•ElasticSearch 天然支持分布式</p><p>•ElasticSearch 的设计隐藏了分布式本身的复杂性</p><p><strong>ES集群相关概念</strong>:</p><p>•集群（cluster）：一组拥有共同的 cluster name 的 节点。</p><p>•节点（node) ：集群中的一个 Elasticearch 实例</p><p>•索引（index) ：es存储数据的地方。相当于关系数据库中的database概念</p><p>•分片（shard）：索引可以被拆分为不同的部分进行存储，称为分片。在集群环境下，一个索引的不同分片可以拆分到不同的节点中</p><p>•主分片（Primary shard）：相对于副本分片的定义。</p><p>•副本分片（Replica shard）每个主分片可以有一个或者多个副本，数据和主分片一样。</p><h3 id="_4-3-集群搭建" tabindex="-1"><a class="header-anchor" href="#_4-3-集群搭建" aria-hidden="true">#</a> <strong>4.3-集群搭建</strong></h3>',12),B=a(`<h3 id="_4-4-kibina管理集群" tabindex="-1"><a class="header-anchor" href="#_4-4-kibina管理集群" aria-hidden="true">#</a> <strong>4.4-kibina管理集群</strong></h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span>  kibana-7.4.0-linux-x86_64-cluster/config/kibana.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>kibana.yml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#支持中文</span>
<span class="token key atrule">i18n.locale</span><span class="token punctuation">:</span> <span class="token string">&quot;zh-CN&quot;</span>
<span class="token comment">#5602避免与之前的冲突</span>
<span class="token key atrule">server.port</span><span class="token punctuation">:</span> <span class="token number">5602</span>
<span class="token key atrule">server.host</span><span class="token punctuation">:</span> <span class="token string">&quot;0.0.0.0&quot;</span>
<span class="token key atrule">server.name</span><span class="token punctuation">:</span> <span class="token string">&quot;kibana-itcast-cluster&quot;</span>
<span class="token key atrule">elasticsearch.hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;http://localhost:9201&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;http://localhost:9202&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;http://localhost:9203&quot;</span><span class="token punctuation">]</span>
<span class="token key atrule">elasticsearch.requestTimeout</span><span class="token punctuation">:</span> <span class="token number">99999</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-javaapi-访问集群" tabindex="-1"><a class="header-anchor" href="#_4-5-javaapi-访问集群" aria-hidden="true">#</a> <strong>4.5-JavaAPI 访问集群</strong></h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT cluster_test
<span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET cluster_test
GET cluster_test/_search

POST /cluster_test/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;张三&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> 
    <span class="token annotation punctuation">@Resource</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;clusterClient&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">RestHighLevelClient</span> clusterClient<span class="token punctuation">;</span>
 
 <span class="token doc-comment comment">/**
     * 测试集群
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IOException</span></span>
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testCluster</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>


        <span class="token comment">//设置查询的索引、文档</span>
        <span class="token class-name">GetRequest</span> indexRequest<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">GetRequest</span><span class="token punctuation">(</span><span class="token string">&quot;cluster_test&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">GetResponse</span> response <span class="token operator">=</span> clusterClient<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>indexRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">getSourceAsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ElasticSearchConfig</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token class-name">String</span> host1<span class="token punctuation">;</span>

<span class="token keyword">private</span> <span class="token keyword">int</span> port1<span class="token punctuation">;</span>

<span class="token keyword">private</span> <span class="token class-name">String</span> host2<span class="token punctuation">;</span>

<span class="token keyword">private</span> <span class="token keyword">int</span> port2<span class="token punctuation">;</span>

<span class="token keyword">private</span> <span class="token class-name">String</span> host3<span class="token punctuation">;</span>

<span class="token keyword">private</span> <span class="token keyword">int</span> port3<span class="token punctuation">;</span>

<span class="token comment">//get/set ...</span>

<span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">&quot;clusterClient&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">RestHighLevelClient</span> <span class="token function">clusterClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RestHighLevelClient</span><span class="token punctuation">(</span><span class="token class-name">RestClient</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span>
                <span class="token keyword">new</span> <span class="token class-name">HttpHost</span><span class="token punctuation">(</span>host1<span class="token punctuation">,</span>port1<span class="token punctuation">,</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token keyword">new</span> <span class="token class-name">HttpHost</span><span class="token punctuation">(</span>host2<span class="token punctuation">,</span>port2<span class="token punctuation">,</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token keyword">new</span> <span class="token class-name">HttpHost</span><span class="token punctuation">(</span>host3<span class="token punctuation">,</span>port3<span class="token punctuation">,</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>application.yml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">elasticsearch</span><span class="token punctuation">:</span>
   <span class="token key atrule">host</span><span class="token punctuation">:</span> 192.168.140.130
   <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9200</span>
   <span class="token key atrule">host1</span><span class="token punctuation">:</span> 192.168.140.130
   <span class="token key atrule">port1</span><span class="token punctuation">:</span> <span class="token number">9201</span>
   <span class="token key atrule">host2</span><span class="token punctuation">:</span> 192.168.140.130
   <span class="token key atrule">port2</span><span class="token punctuation">:</span> <span class="token number">9202</span>
   <span class="token key atrule">host3</span><span class="token punctuation">:</span> 192.168.140.130
   <span class="token key atrule">port3</span><span class="token punctuation">:</span> <span class="token number">9203</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-6-分片配置" tabindex="-1"><a class="header-anchor" href="#_4-6-分片配置" aria-hidden="true">#</a> <strong>4.6-分片配置</strong></h3><p>•在创建索引时，如果不指定分片配置，则默认主分片1，副本分片1。</p><p>•在创建索引时，可以通过settings设置分片</p>`,15),R=["src"],T=["src"],Q=["src"],A=a(`<p><strong>分片配置</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>
#分片配置
#<span class="token property">&quot;number_of_shards&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> 主分片数量
#<span class="token property">&quot;number_of_replicas&quot;</span><span class="token operator">:</span> <span class="token number">1</span>  主分片备份数量，每一个主分片有一个备份
# <span class="token number">3</span>个主分片+<span class="token number">3</span>个副分片=<span class="token number">6</span>个分片
PUT cluster_test1
<span class="token punctuation">{</span>
  <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;number_of_shards&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;number_of_replicas&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.三个节点正常运行（0、1、2分片标号）</p>`,3),G=["src"],H=n("p",null,"2.itcast-3 挂掉",-1),N=["src"],O=n("p",null,"3.将挂掉节点的分片，自平衡到其他节点",-1),L=["src"],M=n("p",null,"4.itcast-3 恢复正常后，节点分片将自平衡回去（并不一定是原来的分片）",-1),P=["src"],J=a('<p><strong>分片与自平衡</strong></p><p>•当节点挂掉后，挂掉的节点分片会自平衡到其他节点中</p><p>注意：分片数量一旦确定好，不能修改。</p><p><strong>索引分片推荐配置方案：</strong></p><p>1.每个分片推荐大小10-30GB</p><p>2.分片数量推荐 = 节点数量 * 1~3倍</p><p><strong>思考：比如有1000GB数据，应该有多少个分片？多少个节点</strong></p><p>1.每个分片25GB 则可以分为40个分片</p><p>2.分片数量推荐 = 节点数量 * 1~3倍 --&gt; 40/2=20 即20个节点</p><h3 id="_4-7-路由原理" tabindex="-1"><a class="header-anchor" href="#_4-7-路由原理" aria-hidden="true">#</a> <strong>4.7-路由原理</strong></h3><p><strong>路由原理</strong></p><p>•文档存入对应的分片，ES计算分片编号的过程，称为路由。</p><p>•Elasticsearch 是怎么知道一个文档应该存放到哪个分片中呢？</p><p>•查询时，根据文档id查询文档， Elasticsearch 又该去哪个分片中查询数据呢？</p><p>•路由算法 ：shard_index = hash(id) % number_of_primary_shards</p>',15),I=["src"],U=a('<p>查询id为5的文档：假如hash(5)=17 ，根据算法17%3=2</p><h3 id="_4-8-脑裂" tabindex="-1"><a class="header-anchor" href="#_4-8-脑裂" aria-hidden="true">#</a> <strong>4.8-脑裂</strong></h3><p><strong>ElasticSearch 集群正常状态：</strong></p><p>• 一个正常es集群中只有一个主节点（Master），主节点负责管理整个集群。如创建或删除索引，跟踪哪些节点是群集的一部分，并决定哪些分片分配给相关的节点。</p><p>•集群的所有节点都会选择同一个节点作为主节点。</p><p><strong>脑裂现象：</strong></p><p>•脑裂问题的出现就是因为从节点在选择主节点上出现分歧导致一个集群出现多个主节点从而使集群分裂，使得集群处于异常状态。</p>',7),D=["src"],C=n("p",null,[n("strong",null,"脑裂产生的原因：")],-1),$=n("p",null,"1.网络原因：网络延迟",-1),F=n("p",null,"​ •一般es集群会在内网部署，也可能在外网部署，比如阿里云。",-1),z=n("p",null,"​ •内网一般不会出现此问题，外网的网络出现问题的可能性大些。",-1),V=n("p",null,"2.节点负载",-1),X=n("p",null,"​ •主节点的角色既为master又为data。数据访问量较大时，可能会导致Master节点停止响应（假死状态）。",-1),K=["src"],W=a('<ol start="3"><li><p>JVM内存回收</p><p>•当Master节点设置的JVM内存较小时，引发JVM的大规模内存回收，造成ES进程失去响应。</p></li></ol><p><strong>避免脑裂</strong>：</p><p>1.网络原因：discovery.zen.ping.timeout 超时时间配置大一点。默认是3S</p><p>2.节点负载：角色分离策略</p><p>​ •候选主节点配置为</p><p>​ •node.master: true</p><p>​ •node.data: false</p><p>​ •数据节点配置为</p><p>​ •node.master: false</p><p>​ •node.data: true</p><p>3.JVM内存回收：修改 config/jvm.options 文件的 -Xms 和 -Xmx 为服务器的内存一半。</p><h3 id="_30-elasticsearch-集群-集群扩容" tabindex="-1"><a class="header-anchor" href="#_30-elasticsearch-集群-集群扩容" aria-hidden="true">#</a> <strong>30-ElasticSearch 集群-集群扩容</strong></h3>',12);function Z(s,Y){const e=i("RouterLink");return l(),u("div",null,[d,n("img",{src:s.$withBase("/ElasticSearch/img/1581164001550.png"),alt:"foo"},null,8,k),v,n("img",{src:s.$withBase("/ElasticSearch/img/1580909328868.png"),alt:"foo"},null,8,m),b,n("img",{src:s.$withBase("/ElasticSearch/img/1580910336989.png"),alt:"foo"},null,8,q),n("img",{src:s.$withBase("/ElasticSearch/img/1580910384673.png"),alt:"foo"},null,8,g),h,y,n("img",{src:s.$withBase("/ElasticSearch/img/1580910596746.png"),alt:"foo"},null,8,_),f,t(),n("img",{src:s.$withBase("/ElasticSearch/img/1580910648421.png"),alt:"foo"},null,8,x),S,n("ul",null,[n("li",null,[w,n("img",{src:s.$withBase("/ElasticSearch/img/1581042245219.png"),alt:"foo"},null,8,j)])]),E,n("p",null,[p(e,{to:"/views/ElasticSearch/ElasticSearch%E9%9B%86%E7%BE%A4%E6%90%AD%E5%BB%BA.html"},{default:o(()=>[t("ElasticSearch 集群-集群搭建")]),_:1})]),B,n("img",{src:s.$withBase("/ElasticSearch/img/1581043174004.png"),alt:"foo"},null,8,R),n("img",{src:s.$withBase("/ElasticSearch/img/1581043214369.png"),alt:"foo"},null,8,T),n("img",{src:s.$withBase("/ElasticSearch/img/1581043148796.png"),alt:"foo"},null,8,Q),A,n("img",{src:s.$withBase("/ElasticSearch/img/1581044158693.png"),alt:"foo"},null,8,G),H,n("img",{src:s.$withBase("/ElasticSearch/img/1581044220349.png"),alt:"foo"},null,8,N),O,n("img",{src:s.$withBase("/ElasticSearch/img/1581044251012.png"),alt:"foo"},null,8,L),M,n("img",{src:s.$withBase("/ElasticSearch/img/1581044368389.png"),alt:"foo"},null,8,P),J,n("img",{src:s.$withBase("/ElasticSearch/img/1581044026981.png"),alt:"foo"},null,8,I),U,n("img",{src:s.$withBase("/ElasticSearch/img/1581042550583.png"),alt:"foo"},null,8,D),C,$,F,z,V,X,n("p",null,[t("​ "),n("img",{src:s.$withBase("/ElasticSearch/img/1581042578379.png"),alt:"foo"},null,8,K)]),W,n("p",null,[t("按照集群搭建步骤再复制Es节点进行配置，参见 "),p(e,{to:"/views/ElasticSearch/ElasticSearch%E9%9B%86%E7%BE%A4%E6%90%AD%E5%BB%BA.html"},{default:o(()=>[t("ElasticSearch 集群-集群搭建")]),_:1})])])}const sn=c(r,[["render",Z],["__file","ElasticSearch02.html.vue"]]);export{sn as default};
