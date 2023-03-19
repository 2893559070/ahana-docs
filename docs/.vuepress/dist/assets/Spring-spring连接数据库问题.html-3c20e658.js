import{_ as a,p as n,q as e,a1 as r}from"./framework-5866ffd3.js";const o={},t=r('<h1 id="spring连接数据库问题" tabindex="-1"><a class="header-anchor" href="#spring连接数据库问题" aria-hidden="true">#</a> spring连接数据库问题</h1><h2 id="data-truncation-data-too-long-for-column-xxx-at-row-1" tabindex="-1"><a class="header-anchor" href="#data-truncation-data-too-long-for-column-xxx-at-row-1" aria-hidden="true">#</a> Data truncation: Data too long for column &#39;xxx&#39; at row 1</h2><p>错误的原因就是 &#39;xxx&#39; 字段设置的长度太小了，或者说你给这个字段赋值的内容太长了。在数据库中把把段的长度或类型改一下；</p><h2 id="create-connection-holder-errorjava-sql-sqlexception-unknown-system-variable-tx-isolation" tabindex="-1"><a class="header-anchor" href="#create-connection-holder-errorjava-sql-sqlexception-unknown-system-variable-tx-isolation" aria-hidden="true">#</a> create connection holder errorjava.sql.SQLException: Unknown system variable ‘tx_isolation‘</h2><p>Druid版本问题 切换成 Druid1.1.16</p><h2 id="unknown-system-variable-tx-read-only" tabindex="-1"><a class="header-anchor" href="#unknown-system-variable-tx-read-only" aria-hidden="true">#</a> Unknown system variable &#39;tx_read_only&#39;</h2><p>Unknown system variable &#39;tx_read_only&#39;出现了问题是驱动版本的问题。mysql版本和驱动版本不匹配，使用驱动mysql-connector-java-5.0.8-bin.jar版本，就会避免这种异常出现。使用mysql-connector-java-5.1.38-bin.jar版本时，会出现上述异常与警告。</p>',7),i=[t];function s(c,l){return n(),e("div",null,i)}const h=a(o,[["render",s],["__file","Spring-spring连接数据库问题.html.vue"]]);export{h as default};
