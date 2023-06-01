import{_ as n,o as s,c as a,a as t}from"./app-676abf65.js";const p={},o=t(`<h1 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h1><h2 id="i-o处理" tabindex="-1"><a class="header-anchor" href="#i-o处理" aria-hidden="true">#</a> I/O处理</h2><h3 id="异步io" tabindex="-1"><a class="header-anchor" href="#异步io" aria-hidden="true">#</a> 异步IO</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> promisify <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;util&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 同步读取机制data</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&quot;../file/1.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">&quot;同步读取机制data&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 异步读取机制data</span>
fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&quot;../file/1.html&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;异步读取机制data&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 使用 promisify 处理异步</span>
<span class="token keyword">const</span> redFile <span class="token operator">=</span> <span class="token function">promisify</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span>readFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">redFile</span><span class="token punctuation">(</span><span class="token string">&quot;../file/1.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">&quot;使用 promisify 处理异步&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="buffer缓冲区" tabindex="-1"><a class="header-anchor" href="#buffer缓冲区" aria-hidden="true">#</a> Buffer缓冲区</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> buf1 <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">alloc</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buf1<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> buf2 <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buf2<span class="token punctuation">,</span> <span class="token string">&quot;buf2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> buf3 <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;中文&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buf3<span class="token punctuation">,</span> buf3<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;buf3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> buf4 <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span>buf2<span class="token punctuation">,</span> buf3<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buf4<span class="token punctuation">,</span> buf4<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;buf4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="steam" tabindex="-1"><a class="header-anchor" href="#steam" aria-hidden="true">#</a> steam</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> rs <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">&quot;../file/1.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 读取</span>
<span class="token keyword">const</span> ws <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span><span class="token string">&quot;../file/2.text&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建</span>

rs<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>ws<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 写入</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),c=[o];function e(u,i){return s(),a("div",null,c)}const k=n(p,[["render",e],["__file","基础.html.vue"]]);export{k as default};
