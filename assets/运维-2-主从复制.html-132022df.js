import{_ as i,p as o,q as l,Q as r,R as s,t as a,a1 as e}from"./framework-5866ffd3.js";const t={},c=s("h1",{id:"运维-2-主从复制",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#运维-2-主从复制","aria-hidden":"true"},"#"),a(" 运维-2-主从复制")],-1),d=s("h2",{id:"概念",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#概念","aria-hidden":"true"},"#"),a(" 概念")],-1),p=["src"],m=s("h2",{id:"原理",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#原理","aria-hidden":"true"},"#"),a(" 原理")],-1),h=["src"],v=s("h2",{id:"搭建",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#搭建","aria-hidden":"true"},"#"),a(" 搭建")],-1),u=s("h3",{id:"准备",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#准备","aria-hidden":"true"},"#"),a(" 准备")],-1),b=["src"],k=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token comment"># 开放指定的3306端口号:</span>
  firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">3306</span>/tcp <span class="token parameter variable">-permanent</span>
  firewall-cmd <span class="token parameter variable">-reload</span>
  <span class="token comment"># 关闭服务器的防火墙:</span>
  systemctl stop firewalld
  systemctl disable firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="主库配置" tabindex="-1"><a class="header-anchor" href="#主库配置" aria-hidden="true">#</a> 主库配置</h3>`,2),_=["src"],g=["src"],f=["src"],w=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#mysql服务ID，保证整个集群环境中唯一，取值范围:1-2^32-1，默认为</span>
server-id<span class="token operator">=</span><span class="token number">1</span>
<span class="token comment">#是否只读,1代表只读,0代表读写</span>
read-only<span class="token operator">=</span><span class="token number">0</span>
<span class="token comment">#忽略的数据,指不需要同步的数据库</span>
<span class="token comment">#binlog-ignore-db=mysql</span>
<span class="token comment">#指定同步的数据库</span>
<span class="token comment">#binlog-do-db=db01</span>

<span class="token comment">#创建itcast用户，并设置密码，该用户可在任意主机连接该MySQL服务</span>
create user <span class="token string">&#39;name&#39;</span>@<span class="token string">&#39;%&#39;</span> identified with mysql_native_password by <span class="token string">&#39;password&#39;</span>
<span class="token comment"># 用户分配主从复制权限</span>
crant replication slave on *.* to <span class="token string">&#39;name&#39;</span>@<span class="token string">&#39;%&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="从库配置" tabindex="-1"><a class="header-anchor" href="#从库配置" aria-hidden="true">#</a> 从库配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#mysql服务ID，保证整个集群环境中唯一，取值范围:1-2^32-1，和主库不一样即可</span>
server-id<span class="token operator">=</span><span class="token number">2</span>
<span class="token comment">#是否只读,1代表只读,0代表读写</span>
read-only<span class="token operator">=</span><span class="token number">1</span>
<span class="token comment"># 设置超级管理员也只能只读</span>
super-read-only<span class="token operator">=</span><span class="token number">1</span>

<span class="token comment">## 设置主库配置</span>
<span class="token comment"># show master status  查看同步的二进制日志文件与位置</span>
change replication <span class="token builtin class-name">source</span> to <span class="token assign-left variable">source_host</span><span class="token operator">=</span><span class="token string">&#39;0.0.0.0&#39;</span>, <span class="token assign-left variable">source_user</span><span class="token operator">=</span><span class="token string">&#39;name&#39;</span>,source_password<span class="token operator">=</span><span class="token string">&#39;password&#39;</span>,source_log_file<span class="token operator">=</span><span class="token string">&#39;binlog.00001&#39;</span>, <span class="token assign-left variable">source_log_pos</span><span class="token operator">=</span><span class="token number">666</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),y=["src"],q=["src"],B=s("h2",{id:"总结",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),a(" 总结")],-1),z=["src"];function $(n,x){return o(),l("div",null,[r(`
 * @Author: 阿涵锅锅 2893559070@qq.com
 * @Date: 2023-05-03 14:57:15
 * @LastEditors: 阿涵锅锅 2893559070@qq.com
 * @LastEditTime: 2023-05-05 19:55:07
 * @FilePath: \\ahana-docs\\docs\\views\\mysql\\运维-2-主从复制.md
 * @Description: 这是默认设置,请设置\`customMade\`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
`),c,d,s("img",{src:n.$withBase("/mysql/devops/rz08.png"),alt:"foo"},null,8,p),m,s("img",{src:n.$withBase("/mysql/devops/rz09.png"),alt:"foo"},null,8,h),v,u,s("img",{src:n.$withBase("/mysql/devops/rz10.png"),alt:"foo"},null,8,b),k,s("img",{src:n.$withBase("/mysql/devops/rz11.png"),alt:"foo"},null,8,_),s("img",{src:n.$withBase("/mysql/devops/rz11-1.png"),alt:"foo"},null,8,g),s("img",{src:n.$withBase("/mysql/devops/rz11-2.png"),alt:"foo"},null,8,f),w,a(),s("img",{src:n.$withBase("/mysql/devops/rz12.png"),alt:"foo"},null,8,y),s("img",{src:n.$withBase("/mysql/devops/rz12-1.png"),alt:"foo"},null,8,q),B,s("img",{src:n.$withBase("/mysql/devops/rz13.png"),alt:"foo"},null,8,z)])}const E=i(t,[["render",$],["__file","运维-2-主从复制.html.vue"]]);export{E as default};
