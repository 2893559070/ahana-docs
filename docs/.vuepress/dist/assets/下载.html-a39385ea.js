import{_ as p,M as e,p as o,q as c,R as s,t as n,N as l,a1 as a}from"./framework-5866ffd3.js";const i={},u=a(`<h1 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h1><h2 id="下载普通文件-window-open-url" tabindex="-1"><a class="header-anchor" href="#下载普通文件-window-open-url" aria-hidden="true">#</a> 下载普通文件 window.open(url)</h2><ul><li>仅支持普通文件下载，不支持文件流下载</li><li>word、excel会直接下载，图片、pdf则会跳转到预览页（需用户手动下载）</li></ul><h2 id="下载文件流-使用new-blob" tabindex="-1"><a class="header-anchor" href="#下载文件流-使用new-blob" aria-hidden="true">#</a> 下载文件流，使用new Blob()</h2><ul><li>仅支持文件流下载</li><li>须在axios请求配中添加responseType: &#39;blob&#39;，接受后台返回的blob值</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;XXXX&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token literal-property property">responseType</span><span class="token operator">:</span> <span class="token string">&#39;blob&#39;</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>res<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// type值如后台设置，前端可省略，具体type值可参考https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;application/octet-stream&#39;</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> downloadElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token comment">//创建a标签</span>
<span class="token keyword">const</span> href <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span> <span class="token comment">//创建DOMString</span>
<span class="token keyword">const</span> filename <span class="token operator">=</span> <span class="token string">&quot;测试下载&quot;</span> <span class="token comment">//设置文件名字</span>
downloadElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span> <span class="token comment">//隐藏a标签</span>
downloadElement<span class="token punctuation">.</span>href <span class="token operator">=</span> href <span class="token comment">//赋值a标签的href</span>
downloadElement<span class="token punctuation">.</span>download <span class="token operator">=</span> filename <span class="token comment">//下载后文件名</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>downloadElement<span class="token punctuation">)</span> <span class="token comment">//插入a标签</span>
downloadElement<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//点击下载</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>downloadElement<span class="token punctuation">)</span> <span class="token comment">//下载完成移除元素</span>
window<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">revokeObjectURL</span><span class="token punctuation">(</span>href<span class="token punctuation">)</span> <span class="token comment">//释放掉blob对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),r={id:"使用filesaver-js-推荐",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#使用filesaver-js-推荐","aria-hidden":"true"},"#",-1),d={href:"https://github.com/eligrey/FileSaver.js",target:"_blank",rel:"noopener noreferrer"},m=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// npm安装</span>
npm install file<span class="token operator">-</span>saver <span class="token operator">--</span>save

<span class="token comment">// 文件引用</span>
<span class="token keyword">import</span> FileSaver <span class="token keyword">from</span> <span class="token string">&#39;file-saver&#39;</span>

<span class="token comment">// 业务使用</span>
<span class="token comment">// file为文件（文件地址或后台返回的二进制blob文件）</span>
<span class="token comment">// fileName为文件名称</span>
FileSaver<span class="token punctuation">.</span><span class="token function">saveAs</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> fileName<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="blob" tabindex="-1"><a class="header-anchor" href="#blob" aria-hidden="true">#</a> Blob</h2><p>Blob 由一个可选的字符串 type（通常是 MIME 类型）和 blobParts 组成</p><h3 id="blob-构造函数的语法" tabindex="-1"><a class="header-anchor" href="#blob-构造函数的语法" aria-hidden="true">#</a> Blob 构造函数的语法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Blob 构造函数的语法为：</span>
<span class="token keyword">var</span> aBlob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span>blobParts<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span>blobParts<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">type</span> <span class="token operator">:</span> <span class="token string">&#39;text/html&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">endings</span><span class="token operator">:</span> <span class="token string">&quot;transparent&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// the blob</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p><ul><li>blobParts：它是一个由 ArrayBuffer，ArrayBufferView，Blob，DOMString 等对象构成的数组。DOMStrings 会被编码为 UTF-8。</li><li>options：一个可选的对象，包含以下两个属性： <ul><li>type —— 默认值为 &quot;&quot;，它代表了将会被放入到 blob 中的数组内容的 MIME 类型。</li><li>endings —— 默认值为 &quot;transparent&quot;，用于指定包含行结束符 \\n 的字符串如何被写入。 它是以下两个值中的一个： &quot;native&quot;，代表行结束符会被更改为适合宿主操作系统文件系统的换行符，或者 &quot;transparent&quot;，代表会保持 blob 中保存的结束符不变。</li></ul></li></ul><h3 id="blob-类的属性和方法" tabindex="-1"><a class="header-anchor" href="#blob-类的属性和方法" aria-hidden="true">#</a> Blob 类的属性和方法</h3><ul><li><p>属性</p><ul><li>size（只读）：表示 Blob 对象中所包含数据的大小（以字节为单位）。</li><li>type（只读）：一个字符串，表明该 Blob 对象所包含数据的 MIME 类型。如果类型未知，则该值为空字符串。</li></ul></li><li><p>方法</p><ul><li>slice([start[, end[, contentType]]])：返回一个新的 Blob 对象，包含了源 Blob 对象中指定范围内的数据。</li><li>stream()：返回一个能读取 blob 内容的 ReadableStream。</li><li>text()：返回一个 Promise 对象且包含 blob 所有内容的 UTF-8 格式的 USVString。</li><li>arrayBuffer()：返回一个 Promise 对象且包含 blob 所有内容的二进制格式的 ArrayBuffer。</li></ul></li></ul><h3 id="blob-使用场景" tabindex="-1"><a class="header-anchor" href="#blob-使用场景" aria-hidden="true">#</a> Blob 使用场景</h3><h3 id="blob-转换为-base64" tabindex="-1"><a class="header-anchor" href="#blob-转换为-base64" aria-hidden="true">#</a> Blob 转换为 Base64</h3><p>URL.createObjectURL 的一个替代方法是，将 Blob 转换为 base64 编码的字符串。Base64 是一种基于 64 个可打印字符来表示二进制数据的表示方法，它常用于在处理文本数据的场合，表示、传输、存储一些二进制数据，包括 MIME 的电子邮件及 XML 的一些复杂数据。</p><p>绝大多数现代浏览器都支持一种名为 Data URLs 的特性，允许使用 base64 对图片或其他文件的二进制数据进行编码，将其作为文本字符串嵌入网页中。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>data:[<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mediatype</span><span class="token punctuation">&gt;</span></span>][;base64],<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>data</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data:image/png;base64,iVBORw0KGgoAAAANSUhEUg...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>图片较大 转 base64 推荐使用 FileReader API</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span> <span class="token attr-name">accept</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image/*<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">onchange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">loadFile</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>output<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// 调用 FileReader 对象的 readAsDataURL() 方法，把本地图片对应的 File 对象转换为 Data URL。 </span>
  <span class="token keyword">const</span> <span class="token function-variable function">loadFile</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">const</span> output <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;output&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      output<span class="token punctuation">.</span>src <span class="token operator">=</span> reader<span class="token punctuation">.</span>result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    reader<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Data URLs 数据提交到服务器 服务端需要做一些相关处理，才能正常保存上传的图片 ( node.js )</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/upload&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> imgData <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>imgData<span class="token punctuation">;</span> <span class="token comment">// 获取POST请求中的base64图片数据</span>
    <span class="token keyword">let</span> base64Data <span class="token operator">=</span> imgData<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^data:image\\/\\w+;base64,</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> dataBuffer <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>base64Data<span class="token punctuation">,</span> <span class="token string">&#39;base64&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">&quot;image.png&quot;</span><span class="token punctuation">,</span> dataBuffer<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
          res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
          res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;图片上传成功！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="图片压缩" tabindex="-1"><a class="header-anchor" href="#图片压缩" aria-hidden="true">#</a> 图片压缩</h2><p>利用 Canvas 对象提供的 toDataURL() 方法，该方法接收 type 和 encoderOptions 两个可选参数。 其中 type 表示图片格式，默认为 image/png。而 encoderOptions 用于表示图片的质量，在指定图片格式为 image/jpeg 或 image/webp 的情况下，可以从 0 到 1 的区间内选择图片的质量。如果超出取值范围，将会使用默认值 0.92，其他参数会被忽略。</p><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// compress.js</span>
<span class="token keyword">const</span> <span class="token constant">MAX_WIDTH</span> <span class="token operator">=</span> <span class="token number">800</span><span class="token punctuation">;</span> <span class="token comment">// 图片最大宽度</span>

<span class="token keyword">function</span> <span class="token function">compress</span><span class="token punctuation">(</span><span class="token parameter">base64<span class="token punctuation">,</span> quality<span class="token punctuation">,</span> mimeType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;canvas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;img&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  img<span class="token punctuation">.</span>crossOrigin <span class="token operator">=</span> <span class="token string">&quot;anonymous&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    img<span class="token punctuation">.</span>src <span class="token operator">=</span> base64<span class="token punctuation">;</span>
    img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> targetWidth<span class="token punctuation">,</span> targetHeight<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>img<span class="token punctuation">.</span>width <span class="token operator">&gt;</span> <span class="token constant">MAX_WIDTH</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        targetWidth <span class="token operator">=</span> <span class="token constant">MAX_WIDTH</span><span class="token punctuation">;</span>
        targetHeight <span class="token operator">=</span> <span class="token punctuation">(</span>img<span class="token punctuation">.</span>height <span class="token operator">*</span> <span class="token constant">MAX_WIDTH</span><span class="token punctuation">)</span> <span class="token operator">/</span> img<span class="token punctuation">.</span>width<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        targetWidth <span class="token operator">=</span> img<span class="token punctuation">.</span>width<span class="token punctuation">;</span>
        targetHeight <span class="token operator">=</span> img<span class="token punctuation">.</span>height<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> targetWidth<span class="token punctuation">;</span>
      canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> targetHeight<span class="token punctuation">;</span>
      <span class="token keyword">let</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      ctx<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> targetWidth<span class="token punctuation">,</span> targetHeight<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 清除画布</span>
      ctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> imageData <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span>mimeType<span class="token punctuation">,</span> quality <span class="token operator">/</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>imageData<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function v(b,g){const t=e("ExternalLinkIcon");return o(),c("div",null,[u,s("h2",r,[k,n(" 使用"),s("a",d,[n("FileSaver.js"),l(t)]),n("（推荐）")]),m])}const f=p(i,[["render",v],["__file","下载.html.vue"]]);export{f as default};
