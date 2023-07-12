import{_ as a,o as n,c as s,a as t}from"./app-fdb0ca41.js";const e={},i=t(`<h1 id="h5-中的方法" tabindex="-1"><a class="header-anchor" href="#h5-中的方法" aria-hidden="true">#</a> H5 中的方法</h1><h2 id="地理位置" tabindex="-1"><a class="header-anchor" href="#地理位置" aria-hidden="true">#</a> 地理位置</h2><ul><li>navigator.geolocation <ul><li>getCurrentPosition</li><li>获取到的地理位置跟GPS、ip地址、WIFI和蓝牙的MAC地址、GSM/CDMS的ID有关</li><li>需要配置 第三方服务 使用 例如 百度地图、高德地图</li><li>谷歌浏览器里navigator.geolocation的使用，只能使用https协议，普通的http协议是无法执行</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">.</span><span class="token function">getCurrentPosition</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// position 位置信息</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,3),o=[i];function c(l,p){return n(),s("div",null,o)}const u=a(e,[["render",c],["__file","H5方法.html.vue"]]);export{u as default};
