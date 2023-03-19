import{_ as t,M as p,p as l,q as i,R as n,t as a,N as e,a1 as o}from"./framework-5866ffd3.js";const c={},r=n("h1",{id:"微信小程序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#微信小程序","aria-hidden":"true"},"#"),a(" 微信小程序")],-1),u={href:"https://mp.weixin.qq.com/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%AE%80%E4%BB%8B",target:"_blank",rel:"noopener noreferrer"},k=o(`<h2 id="wxss" tabindex="-1"><a class="header-anchor" href="#wxss" aria-hidden="true">#</a> wxss</h2><ul><li>rpx 将设备拆分为750份 每份为 1rpx ui设置以iPhone6为基础375px （ 1px === 2rpx ）</li><li>样式引入 @import &#39;/path&#39;</li></ul><h2 id="js事件" tabindex="-1"><a class="header-anchor" href="#js事件" aria-hidden="true">#</a> js事件</h2><ul><li>tap类型 <ul><li>bindtap 或者 bind:tap ( click 点击事件 )</li></ul></li><li>input类型 <ul><li>bindinput 或者 bind:input ( 文本输入事件 )</li></ul></li><li>change <ul><li>bindchange 或者 bind:change ( 状态改变时触发 )</li></ul></li><li>事件传参与赋值</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token comment">// 赋值</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 传参</span>
    <span class="token operator">&lt;</span>button bindtap<span class="token operator">=</span><span class="token string">&quot;getDate&quot;</span> data<span class="token operator">-</span>info<span class="token operator">=</span><span class="token string">&quot;{{ 1 }}&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token function">getDate</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>info
    <span class="token punctuation">}</span>

    <span class="token comment">// bindinput传参</span>
    <span class="token operator">&lt;</span>input bindinput<span class="token operator">=</span><span class="token string">&quot;getDate&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token function">inputDate</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="条件渲染" tabindex="-1"><a class="header-anchor" href="#条件渲染" aria-hidden="true">#</a> 条件渲染</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>view wx<span class="token operator">:</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;{{ true }}&quot;</span><span class="token operator">&gt;</span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>view wx<span class="token operator">:</span>elif<span class="token operator">=</span><span class="token string">&quot;{{ false }}&quot;</span><span class="token operator">&gt;</span><span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>view wx<span class="token operator">:</span><span class="token keyword">else</span><span class="token operator">&gt;</span><span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>view hidden<span class="token operator">=</span><span class="token string">&quot;{{ true }}&quot;</span><span class="token operator">&gt;</span><span class="token number">4</span><span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="列表渲染" tabindex="-1"><a class="header-anchor" href="#列表渲染" aria-hidden="true">#</a> 列表渲染</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>view wx<span class="token operator">:</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;{{ arr }}&quot;</span><span class="token operator">&gt;</span>
<span class="token punctuation">{</span><span class="token punctuation">{</span> item <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> index <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>

<span class="token comment">// key 有id用id 无id用index</span>
<span class="token operator">&lt;</span>view wx<span class="token operator">:</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;{{ arr }}&quot;</span>
<span class="token literal-property property">wx</span><span class="token operator">:</span><span class="token keyword">for</span><span class="token operator">-</span>index<span class="token operator">=</span><span class="token string">&quot;ind&quot;</span>
<span class="token literal-property property">wx</span><span class="token operator">:</span><span class="token keyword">for</span><span class="token operator">-</span>item<span class="token operator">=</span><span class="token string">&quot;itemName&quot;</span>
<span class="token literal-property property">wx</span><span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;ind&quot;</span>
<span class="token operator">&gt;</span>
<span class="token punctuation">{</span><span class="token punctuation">{</span> itemName <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> ind <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置" aria-hidden="true">#</a> 全局配置</h2><ol><li><p>pages</p><ul><li>页面存放路径</li></ul></li><li><p>window</p><ul><li>窗口外观 <ul><li>navigationTitleText （ 修改导航栏标题 ）</li><li>navigationBarBackgroundColor （ 修改导航栏背景色 仅支持16进制的颜色 ）</li><li>navigationBarTextStyle （ 修改导航栏标题文字颜色 可选值black 或者 white ）</li></ul></li><li>下拉刷新 <ul><li>enablePullDownRefresh ( true 开启下拉刷新 建议在页面中配置 )</li><li>backgroundColor ( 设置下拉刷新背景色 仅支持16进制的颜色 )</li><li>backgroundTextStyle ( 设置下拉刷新loading效果 可选值 dark 或者 light )</li><li>onReachBottomDistance ( 设置上拉触底 默认为50px px单位默认不加 )</li></ul></li></ul></li><li><p>tabBar</p><ul><li>底部tabBar效果 <ul><li>顶部tabBar 或者 顶部 tabBar</li><li>列表最少2个 最多5个 渲染顶部tabBar时不显示icon</li><li>配置 <ul><li>position ( 位置 )</li><li>borderStyle ( 上边框颜色 仅支持black、white )</li><li>color ( 文字未选中的颜色 )</li><li>selectedColor ( 文字选中时的颜色 )</li><li>backgroundColor ( 背景色 )</li><li>list ( 数组类型 标签列表 ) [{}, {}, ...] <ul><li>pagePath （ 页面路径 ）</li><li>text （ 显示文本标题 ）</li><li>iconPath （ 未选中时图片背景路径 ）</li><li>selectediconPath （ 选中时图片背景路径 ）</li></ul></li></ul></li></ul></li></ul></li><li><p>style</p><ul><li>是否启用新版的组件样式</li></ul></li></ol><h2 id="页面配置" tabindex="-1"><a class="header-anchor" href="#页面配置" aria-hidden="true">#</a> 页面配置</h2><p>页面与全局冲突时采用就近原则 以页面配置为准</p><ul><li>窗口外观 <ul><li>navigationTitleText （ 修改导航栏标题 ）</li><li>navigationBarBackgroundColor （ 修改导航栏背景色 仅支持16进制的颜色 ）</li><li>navigationBarTextStyle （ 修改导航栏标题文字颜色 可选值black 或者 white ）</li></ul></li><li>下拉刷新 <ul><li>enablePullDownRefresh ( true 开启下拉刷新 )</li><li>backgroundColor ( 设置下拉刷新背景色 仅支持16进制的颜色 )</li><li>backgroundTextStyle ( 设置下拉刷新loading效果 可选值 dark 或者 light )</li><li>onReachBottomDistance ( 设置上拉触底 默认为50px px单位默认不加 )</li></ul></li></ul><h2 id="网络请求" tabindex="-1"><a class="header-anchor" href="#网络请求" aria-hidden="true">#</a> 网络请求</h2><ul><li><p>数据请求限制</p><ul><li>接口必须是https类型</li><li>将接口域名添加信任类型</li><li>微信小程序管理后台 =&gt; 开发 =&gt; 开发设置 =&gt; 服务器域名 =&gt; request合法域名</li><li>注意事项</li></ul><ol><li>域名只支持https协议</li><li>域名不能使用ip地址或者localhost</li><li>域名必须经过icp备案</li><li>域名一个月修改5次</li></ol></li><li><p>跳过request合法域名校验 详情 =&gt; 本地设置 =&gt; 不校验... ( 仅在开发与调试时使用 )</p></li><li><p>wx.request 请求</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>跨域 小程序不存在跨域 因为小程序的宿主环境不是浏览器而是微信客户端 ( 嘿嘿 美滋滋 )</li></ul><h2 id="页面导航" tabindex="-1"><a class="header-anchor" href="#页面导航" aria-hidden="true">#</a> 页面导航</h2><ul><li>申明式导航 <ul><li>url 路径</li><li>open-type 跳转方式 <ul><li>tabBar页面 参数 switchTab</li><li>非tabBar页面 参数 navigate</li><li>后退 <ul><li>参数 navigateBack</li><li>delta 值为数字</li></ul></li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token operator">&lt;</span>navigator 
    url<span class="token operator">=</span><span class="token string">&#39;/path&#39;</span>
    open<span class="token operator">-</span>type<span class="token operator">=</span><span class="token string">&#39;switchTab&#39;</span>
    <span class="token operator">&gt;</span> 导航至页面 <span class="token operator">&lt;</span><span class="token operator">/</span>navigator<span class="token operator">&gt;</span>

    <span class="token operator">&lt;</span>navigator 
    open<span class="token operator">-</span>type<span class="token operator">=</span><span class="token string">&#39;navigateBack&#39;</span>
    delta<span class="token operator">=</span><span class="token string">&#39;1&#39;</span>
    <span class="token operator">&gt;</span> 导航至页面 <span class="token operator">&lt;</span><span class="token operator">/</span>navigator<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>编程式导航 <ul><li>导航tabBar页面 <ul><li>wx.switchTab <ul><li>url 路径</li><li>success 成功</li><li>fail 失败</li><li>complete 成功或者失败</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    wx<span class="token punctuation">.</span><span class="token function">switchTab</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/path&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li>导航非tabBar页面 <ul><li>wx.navigateTo <ul><li>url 路径</li><li>success 成功</li><li>fail 失败</li><li>complete 成功或者失败</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    wx<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/path&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li>后退导航 <ul><li>wx.navigateBack <ul><li>delta</li><li>success 成功</li><li>fail 失败</li><li>complete 成功或者失败</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    wx<span class="token punctuation">.</span><span class="token function">navigateBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 默认后退一层</span>
    wx<span class="token punctuation">.</span><span class="token function">navigateBack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">delta</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul></li><li>导航传参与接收参数 <ul><li>传参<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token comment">// 申明式导航传参</span>
    <span class="token operator">&lt;</span>navigator 
    url<span class="token operator">=</span><span class="token string">&#39;/path?name=zs&amp;age=19&#39;</span>
    open<span class="token operator">-</span>type<span class="token operator">=</span><span class="token string">&#39;switchTab&#39;</span>
    <span class="token operator">&gt;</span> 导航至页面 <span class="token operator">&lt;</span><span class="token operator">/</span>navigator<span class="token operator">&gt;</span>

    <span class="token comment">// 编程式导航传参</span>
    wx<span class="token punctuation">.</span><span class="token function">switchTab</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/path?name=zs&amp;age=19&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>接收参数</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">query</span><span class="token operator">:</span> option
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="页面事件" tabindex="-1"><a class="header-anchor" href="#页面事件" aria-hidden="true">#</a> 页面事件</h2><ul><li><p>下拉刷新事件</p><ul><li>onPullDownRefresh() 下拉时被触发</li><li>wx.stopPullDownRefresh() 停止下拉刷新</li></ul></li><li><p>上拉触底</p><ul><li>onReachBottom() 上拉触底时被触发</li></ul></li></ul><h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2><ul><li><p>应用生命周期 （ 运行环境 App.js ）</p><ul><li>小程序的启动 运行 销毁</li><li>onLaunch 小程序初始化完成执行此函数，全局只触发一次</li><li>onShow 小程序启动，或者从后台切换至前台显示时触发</li><li>onHide 小程序从前台进入后台时触发</li></ul></li><li><p>页面生命周期</p><ul><li>页面加载 渲染 销毁</li><li>onLoad 页面刚加载时 一个页面只调用一次</li><li>onShow 监听页面显示</li><li>onReady 监听页面初次渲染完成，一个页面只调用一次</li><li>onHide 监听页面隐藏</li><li>onUnload 监听页面卸载，一个页面只调用一次</li></ul></li></ul><h2 id="wxs脚本" tabindex="-1"><a class="header-anchor" href="#wxs脚本" aria-hidden="true">#</a> WXS脚本</h2><ol><li>支持的数据类型 number string function object boolean array data regexp</li><li>不支持es6语法</li><li>wxs遵循Commonjs规范</li><li>基本语法 <ul><li>内连<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token operator">&lt;</span>view<span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> m1<span class="token punctuation">.</span><span class="token function">a</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>

    <span class="token operator">&lt;</span>wxs module<span class="token operator">=</span><span class="token string">&#39;m1&#39;</span><span class="token operator">&gt;</span>
        module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span><span class="token function-variable function">a</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> num <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>wxs<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>外连 根目录/utils<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token comment">// 创建脚本</span>
    <span class="token keyword">function</span> <span class="token function">a</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> num <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">a</span><span class="token operator">:</span> a
    <span class="token punctuation">}</span>
    <span class="token comment">// 引入脚本</span>
    <span class="token operator">&lt;</span>view<span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> m2<span class="token punctuation">.</span><span class="token function">a</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>wxs src<span class="token operator">=</span><span class="token string">&#39;/***.wxs&#39;</span> module<span class="token operator">=</span><span class="token string">&#39;m2&#39;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>wxs<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li>注意事项 <ol><li>与js语言是不同的</li><li>不能作为组件的回调，只能配置差值表达式使用 类似过滤器</li><li>隔离性 与js运行环境是隔离的 <ol><li>wxs不能调用js中定义的函数</li><li>wxs不能调用小程序提供的api</li></ol></li><li>在ios设备上 wxs比js性能好2-20倍 在android上无差别</li></ol></li></ol>`,26);function v(m,b){const s=p("ExternalLinkIcon");return l(),i("div",null,[r,n("p",null,[n("a",u,[a("微信公众号平台"),e(s)]),n("a",d,[a("微信小程序官方文档"),e(s)])]),k])}const h=t(c,[["render",v],["__file","小程序基础.html.vue"]]);export{h as default};
