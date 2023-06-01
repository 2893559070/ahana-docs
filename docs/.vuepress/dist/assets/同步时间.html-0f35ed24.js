import{_ as n,o as s,c as a,a as e}from"./app-676abf65.js";const i={},l=e(`<h1 id="同步时间" tabindex="-1"><a class="header-anchor" href="#同步时间" aria-hidden="true">#</a> 同步时间</h1><p>设备集群需要有一个统一的时间，来确保所执行的操作的时序正确。</p><h2 id="时间服务器的作用" tabindex="-1"><a class="header-anchor" href="#时间服务器的作用" aria-hidden="true">#</a> 时间服务器的作用</h2><p>设备集群需要有一个统一的时间，来确保所执行的操作的时序正确。 NTP 是网络时间协议（Network Time Protocol）的简称，就是通过网络协议使计算机之间的时间同步化。 例如服务器集群进行文件创建、数据库处理等操作的时间。</p><h2 id="时区管理" tabindex="-1"><a class="header-anchor" href="#时区管理" aria-hidden="true">#</a> 时区管理</h2><ul><li><p>查看当前时区 timedatectl</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># timedatectl</span>
  Local time: Sat <span class="token number">2019</span>-02-16 <span class="token number">23</span>:07:46 CST
  Universal time: Sat <span class="token number">2019</span>-02-16 <span class="token number">15</span>:07:46 UTC
  RTC time: Sat <span class="token number">2019</span>-02-16 <span class="token number">15</span>:07:45
  Time zone: Asia/Shanghai <span class="token punctuation">(</span>CST, +0800<span class="token punctuation">)</span>
  NTP enabled: <span class="token function">yes</span>
  NTP synchronized: <span class="token function">yes</span>
  RTC <span class="token keyword">in</span> <span class="token builtin class-name">local</span> TZ: no
  DST active: n/a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看当前可用时区 timedatectl list-timezones</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  Africa/Abidjan
  Africa/Accra
  Africa/Addis_Ababa
  Africa/Algiers
  Africa/Asmara
  Africa/Bamako
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>设置时区 timedatectl set-timezone Asia/Shanghai</p></li></ul><h2 id="进行时间同步方法" tabindex="-1"><a class="header-anchor" href="#进行时间同步方法" aria-hidden="true">#</a> 进行时间同步方法</h2><p>最简单的方法,让所有集群(这里默认集群中有三台服务器:master,slave1,slave2)中的主机跟某个时间服务器的时间同步,执行 ntpdate 时间服务器 例如:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># ntpdate ntp1.aliyun.com</span>
  <span class="token punctuation">[</span>root@slave1 ~<span class="token punctuation">]</span><span class="token comment"># ntpdate ntp1.aliyun.com</span>
  <span class="token punctuation">[</span>root@slave2 ~<span class="token punctuation">]</span><span class="token comment"># ntpdate ntp1.aliyun.com</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过,这种方法不好.ntpdate同步时间是跳跃的,这将导致文件时间标记,监控数据的紊乱.而且ntpdate只运行一次就结束,即只同步一次.所以即使我们要写这样写</p><p>vi /etc/crontab</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>* * * * root /usr/sbin/ntpdate ntp1.aliyun.com <span class="token operator">&amp;&amp;</span> /sbin/hwclock <span class="token parameter variable">-w</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>配置远程的时间服务器,再让所有的主机跟他同步</li><li>配置本地的时间服务器,再让所有的主机跟他同步</li><li>下面的 四 配置ntp服务中就是同时配置了远程和本地的时间服务器,配置目的是先使用远程时间服务器同步,如果外网发生了问题,再使用本地时间服务器=</li></ul><h2 id="配置ntp服务" tabindex="-1"><a class="header-anchor" href="#配置ntp服务" aria-hidden="true">#</a> 配置ntp服务</h2><p>最终目的：将我们的一台主机配置成ntp服务器，同网段的其他主机可以通过ntpdate -u host-addr命令以ntp服务器的时间来进行客户端的时间同步。</p><ul><li>工具安装 我们需要先安装ntp服务和ntpdate工具：yum -y install ntp ntpdate 即使是作为服务端的主机，在必要时刻也是需要向公用的ntp服务器进行时间同步的(一般不用)。</li><li>进行ntp服务文件配置</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/ntp.conf</span>

<span class="token comment"># 注意:</span>
<span class="token comment"># 1.大家自己在配置时,只需要把我的内容替换你的内容即可</span>

<span class="token comment"># 2.#授权下述网段上所有的机器允许从ntp服务器上查询和同步时间</span>
<span class="token comment"># restrict 192.168.10.0 mask 255.255.255.0 nomodify notrap</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保证这里的网段是你集群的网段即可</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>driftfile /var/lib/ntp/drift
<span class="token comment"># 默认情况下,NTP服务器的日志保存在 /var/log/messages.当然我们也可以自己指定</span>
<span class="token comment"># 自己指定日志目录</span>
<span class="token comment"># 我们要确保他的属性和SELinux环境(这两项一般不用改)</span>
<span class="token comment"># chown ntp:ntp /var/log/ntpd.log</span>
<span class="token comment"># chcon -t ntpd_log_t /var/log/ntpd.log</span>
logfile /var/log/ntpd.log 

restrict default nomodify notrap nopeer noquery
<span class="token comment"># 给与本机所有权限</span>
restrict <span class="token number">127.0</span>.0.1
restrict ::1

<span class="token comment">#授权下述网段上所有的机器允许从ntp服务器上查询和同步时间</span>
restrict <span class="token number">192.168</span>.10.0 mask <span class="token number">255.255</span>.255.0 nomodify notrap 

<span class="token comment">#增加下述几个时间服务器列表,除了0.asia.pool.ntp.org还会有很多时间服务器.比如0.cn.pool.ntp.org或者time.nist.gov或者</span>
server <span class="token number">0</span>.asia.pool.ntp.org iburst 
server <span class="token number">1</span>.asia.pool.ntp.org iburst
server <span class="token number">2</span>.asia.pool.ntp.org iburst
server <span class="token number">3</span>.asia.pool.ntp.org iburst

<span class="token comment">#这两行内容表示当外部时间不可用时，使用本地时间</span>
server <span class="token number">127.127</span>.1.0 iburst 
fudge <span class="token number">127.127</span>.1.0 stratum <span class="token number">10</span>

<span class="token comment">#下述四行表示允许上层服务器修改本机时间</span>

restrict <span class="token number">0</span>.asia.pool.ntp.org nomodify notrap noquery 
restrict <span class="token number">1</span>.asia.pool.ntp.org nomodify notrap noquery
restrict <span class="token number">2</span>.asia.pool.ntp.org nomodify notrap noquery
restrict <span class="token number">3</span>.asia.pool.ntp.org nomodify notrap noquery

includefile /etc/ntp/crypto/pw
keys /etc/ntp/keys
disable monitor

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>设置开机自启动服务(初始化) 使服务端服务ntp的守护进程ntpd生效</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span> systemctl <span class="token builtin class-name">enable</span> ntpd

<span class="token comment"># Created symlink from /etc/systemd/system/multi-user.target.wants/ntpd.service to /usr/lib/systemd/system/ntpd.service.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使客户端工具ntpdate工具生效(选做)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span> systemctl <span class="token builtin class-name">enable</span> ntpdate

<span class="token comment"># Created symlink from /etc/systemd/system/multi-user.target.wants/ntpdate.service to /usr/lib/systemd/system/ntpdate.service.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span> systemctl is-enabled ntpd

<span class="token comment"># 显示: enabled</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),t=[l];function d(c,r){return s(),a("div",null,t)}const o=n(i,[["render",d],["__file","同步时间.html.vue"]]);export{o as default};
