import{_ as e,o as i,c as l,b as s,d as t,a}from"./app-9d6e6088.js";const p={},o=a(`<h1 id="linux设置静态ip" tabindex="-1"><a class="header-anchor" href="#linux设置静态ip" aria-hidden="true">#</a> Linux设置静态IP</h1><h2 id="_1-设置步骤" tabindex="-1"><a class="header-anchor" href="#_1-设置步骤" aria-hidden="true">#</a> 1.设置步骤</h2><p>/etc/sysconfig/network-scripts 目录下 有一个 “ifcfg- ” 开头的几个配置文件。</p><ul><li>ifcfg-ens33：网卡ens33的配置文件</li><li>ifcfg-lo：网卡lo的配置文件</li></ul><p>设置静态ip，我们就需要修改 /etc/sysconfig/network-scripts/ifcfg-ens33 配置文件。</p><p>输入命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cd /etc/sysconfig/network-scripts/</span>
<span class="token punctuation">[</span>root@localhost network-scripts<span class="token punctuation">]</span><span class="token comment"># ls</span>
<span class="token punctuation">[</span>root@localhost network-scripts<span class="token punctuation">]</span><span class="token comment"># vi ifcfg-ens33 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(1) 将 BOOTPROTO = dhcp 改成 BOOTPROTO = static，也就是将动态ip，改成静态ip</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token comment"># 静态IP地址(这里要确定前三个字段是不动的但是每个人的都不一样这里要先进行查询,改最后一位字段，也就是把100改为别的)</span>
 
<span class="token assign-left variable">IPADDR</span><span class="token operator">=</span><span class="token string">&quot;192.168.138.100&quot;</span>      
<span class="token assign-left variable">NETMASK</span><span class="token operator">=</span><span class="token string">&quot;255.255.255.0&quot;</span>         <span class="token comment"># 子网掩码</span>
<span class="token assign-left variable">GATEWAY</span><span class="token operator">=</span><span class="token string">&quot;192.168.138.2&quot;</span>         <span class="token comment"># 网关地址</span>
<span class="token assign-left variable">DNS1</span><span class="token operator">=</span><span class="token string">&quot;192.168.138.2&quot;</span>            <span class="token comment"># DNS服务器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(这是修改完的内容，修改的把dhcp改成static)内容如下（这里加注释便于理解）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#类型</span>
​​​​​​​TYPE<span class="token operator">=</span>Ethernet
<span class="token assign-left variable">PROXY_METHOD</span><span class="token operator">=</span>none
<span class="token assign-left variable">BROWSER_ONLY</span><span class="token operator">=</span>no
<span class="token comment">#是否启动DPCH：none为禁止使用；static是使用静态ip；DPCH为使用DPCH服务​​​​​​</span>
​​​​​​​<span class="token comment">#如果要设定多网口绑定bond，必须为none</span>
<span class="token assign-left variable">BOOTPROTO</span><span class="token operator">=</span>static
<span class="token comment"># 设置的静态IP地址</span>
<span class="token assign-left variable">IPADDR</span><span class="token operator">=</span><span class="token string">&quot;192.168.138.100&quot;</span>        
<span class="token comment"># 子网掩码</span>
<span class="token assign-left variable">NETMASK</span><span class="token operator">=</span><span class="token string">&quot;255.255.255.0&quot;</span>      
 <span class="token comment"># 网关地址   </span>
<span class="token assign-left variable">GATEWAY</span><span class="token operator">=</span><span class="token string">&quot;192.168.138.2&quot;</span>      
<span class="token comment"># DNS服务器  </span>
<span class="token assign-left variable">DNS1</span><span class="token operator">=</span><span class="token string">&quot;192.168.138.2&quot;</span> 
<span class="token comment">#default route  是否把这个网卡设置为ipv4默认路由         </span>
<span class="token assign-left variable">DEFROUTE</span><span class="token operator">=</span>yes
<span class="token comment">#如果ipv4设置失败则禁用设备</span>
<span class="token assign-left variable">IPV4_FAILURE_FATAL</span><span class="token operator">=</span>no
<span class="token comment">#是否使用ipv6</span>
<span class="token assign-left variable">IPV6INIT</span><span class="token operator">=</span>yes
<span class="token comment">#ipv6自动配置</span>
<span class="token assign-left variable">IPV6_AUTOCONF</span><span class="token operator">=</span>yes
<span class="token comment">#是否把这个网卡设置为ipv6默认路由</span>
<span class="token assign-left variable">IPV6_DEFROUTE</span><span class="token operator">=</span>yes
<span class="token comment">#如果ipv6设置失败则禁用设备</span>
<span class="token assign-left variable">IPV6_FAILURE_FATAL</span><span class="token operator">=</span>no
<span class="token assign-left variable">IPV6_ADDR_GEN_MODE</span><span class="token operator">=</span>stable-privacy
<span class="token comment">#网络连接的名字</span>
<span class="token assign-left variable">NAME</span><span class="token operator">=</span>ens33
<span class="token comment">#随机的唯一标识</span>
<span class="token assign-left variable">UUID</span><span class="token operator">=</span>afd0baa3-8bf4-4e26-8d20-5bc426b75fd6
<span class="token comment">#网卡名称</span>
<span class="token assign-left variable">DEVICE</span><span class="token operator">=</span>ens33
<span class="token comment">#启动或重启是否启动该设备</span>
<span class="token assign-left variable">ONBOOT</span><span class="token operator">=</span>yes
<span class="token assign-left variable">ZONE</span><span class="token operator">=</span>public
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-如何查看自己的ip格式-子网掩码-网关地址与dns服务" tabindex="-1"><a class="header-anchor" href="#_2-如何查看自己的ip格式-子网掩码-网关地址与dns服务" aria-hidden="true">#</a> 2.如何查看自己的IP格式，子网掩码，网关地址与DNS服务</h2><h3 id="_1-获取ip地址和-子网掩码与网关" tabindex="-1"><a class="header-anchor" href="#_1-获取ip地址和-子网掩码与网关" aria-hidden="true">#</a> (1).获取ip地址和 子网掩码与网关</h3>`,13),c=["src"],r=["src"],d=["src"],v=["src"],u=a(`<h3 id="_2-重启网络服务" tabindex="-1"><a class="header-anchor" href="#_2-重启网络服务" aria-hidden="true">#</a> (2). 重启网络服务</h3><p>ip地址修改完毕之后，需要重启网络服务，执行如下指令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart network
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注：重启完网络服务后ip地址已经发生了改变，此时FinalShell已经连接不上Linux系统，需要创建一个新连接才能连接到Linux。如果你没有使用远程连接，直接重启然后输入查看ip即可。</p><p>再次连接上Linux之后，我们再次查看IP地址，就可以看到我们所设置的静态IP：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ip</span> addr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),m=["src"],b=a(`<p>解决</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ip</span> addr flush dev ens33

<span class="token function">ifdown</span> ens33
<span class="token function">ifup</span> ens33
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function k(n,h){return i(),l("div",null,[o,s("img",{src:n.$withBase("/linux/assets/1.png"),alt:"foo"},null,8,c),s("img",{src:n.$withBase("/linux/assets/2.png"),alt:"foo"},null,8,r),s("img",{src:n.$withBase("/linux/assets/3.png"),alt:"foo"},null,8,d),s("img",{src:n.$withBase("/linux/assets/4.png"),alt:"foo"},null,8,v),u,s("p",null,[t("问题：ip ad s 查看网络以前的旧ip还存在，新的ip虽然可以使用但会出现丢失的情况 "),s("img",{src:n.$withBase("/linux/assets/5.png"),alt:"foo"},null,8,m)]),b])}const f=e(p,[["render",k],["__file","liunx-设置静态ip.html.vue"]]);export{f as default};
