import{_ as n,o as s,c as a,a as t}from"./app-676abf65.js";const p={},e=t(`<h1 id="springmvc-service-数据交互问题" tabindex="-1"><a class="header-anchor" href="#springmvc-service-数据交互问题" aria-hidden="true">#</a> springMvc Service 数据交互问题</h1><h2 id="org-springframework-web-httpmediatypenotsupportedexception-content-type-application-x-www-form-url" tabindex="-1"><a class="header-anchor" href="#org-springframework-web-httpmediatypenotsupportedexception-content-type-application-x-www-form-url" aria-hidden="true">#</a> org.springframework.web.HttpMediaTypeNotSupportedException: Content type ‘application/x-www-form-url</h2><p>如果想用SpringMVC的@RequestBody注解解析JSON字符串入参实体时POST请求的ContentType的值必须是application/json;charset=UTF-8，否则会抛&quot;not supported&quot;异常。</p><p>导致这个问题的出现是因为缺少缺少jackson-databind 的jar包。添加maven坐标即可。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.fasterxml.jackson.core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jackson-databind<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.8.8.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解决post表单提交报错-content-type-application-x-www-form-urlencoded-charset-utf-8-not-supported" tabindex="-1"><a class="header-anchor" href="#解决post表单提交报错-content-type-application-x-www-form-urlencoded-charset-utf-8-not-supported" aria-hidden="true">#</a> 解决POST表单提交报错 Content type &#39;application/x-www-form-urlencoded;charset=UTF-8&#39; not supported</h2><p>application/x-www-form-urlencoded;charset=UTF-8 是以键值对拼接的形式，如 name=abc&amp;phone=123456</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;save&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">Result</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> params<span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>application/json是以json格式{&quot;name&quot;:&quot;abc&quot;,&quot;phone&quot;:&quot;123456&quot;}</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;save&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">Result</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">User</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="json数据对象-与-路径参数" tabindex="-1"><a class="header-anchor" href="#json数据对象-与-路径参数" aria-hidden="true">#</a> json数据对象 与 路径参数</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token comment">// 前端</span>
 路径参数<span class="token operator">:</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">82</span><span class="token operator">/</span>checkgroup<span class="token operator">/</span>add<span class="token punctuation">.</span><span class="token keyword">do</span><span class="token operator">?</span>checkitemIds<span class="token operator">=</span><span class="token number">33</span><span class="token punctuation">,</span><span class="token number">35</span><span class="token punctuation">,</span><span class="token number">36</span><span class="token punctuation">,</span><span class="token number">37</span><span class="token punctuation">,</span><span class="token number">38</span><span class="token punctuation">,</span><span class="token number">39</span>
 json数据对象<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;helpCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;测试1&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;sex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;remark&quot;</span><span class="token operator">:</span> <span class="token string">&quot;测试2&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;attention&quot;</span><span class="token operator">:</span> <span class="token string">&quot;测试3&quot;</span>
<span class="token punctuation">}</span>
 
 <span class="token comment">// 后端</span>
 <span class="token keyword">public</span> <span class="token class-name">Result</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">CheckGroup</span> checkGroup<span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">[</span><span class="token punctuation">]</span> checkitemIds<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>checkGroup<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>checkitemIds<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>checkitemIds<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>checkitemIds<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","Spring-springMvc Service 数据交互问题.html.vue"]]);export{r as default};
