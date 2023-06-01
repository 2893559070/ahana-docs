import{_ as n,o as i,c as s,a as l}from"./app-676abf65.js";const e={},a=l(`<h1 id="linux指令" tabindex="-1"><a class="header-anchor" href="#linux指令" aria-hidden="true">#</a> Linux指令</h1><h2 id="目录解释" tabindex="-1"><a class="header-anchor" href="#目录解释" aria-hidden="true">#</a> 目录解释</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/bin：bin是Binary的缩写, 这个目录存放着最经常使用的命令。

/boot： 这里存放的是启动Linux时使用的一些核心文件，包括一些连接文件以及镜像文件。

/dev ： dev是Device<span class="token punctuation">(</span>设备<span class="token punctuation">)</span>的缩写, 存放的是Linux的外部设备，在Linux中访问设备的方式和访问文件的方式是相同的。

/etc： 这个目录用来存放所有的系统管理所需要的配置文件和子目录。

/home：用户的主目录，在Linux中，每个用户都有一个自己的目录，一般该目录名是以用户的账号命名的。

/lib：这个目录里存放着系统最基本的动态连接共享库，其作用类似于Windows里的DLL文件。

/lost+found：这个目录一般情况下是空的，当系统非法关机后，这里就存放了一些文件。

/media：linux系统会自动识别一些设备，例如U盘、光驱等等，当识别后，linux会把识别的设备挂载到这个目录下。

/mnt：系统提供该目录是为了让用户临时挂载别的文件系统的，我们可以将光驱挂载在/mnt/上，然后进入该目录就可以查看光驱里的内容了。

/opt：这是给主机额外安装软件所摆放的目录。比如你安装一个ORACLE数据库则就可以放到这个目录下。默认是空的。

/proc：这个目录是一个虚拟的目录，它是系统内存的映射，我们可以通过直接访问这个目录来获取系统信息。

/root：该目录为系统管理员，也称作超级权限者的用户主目录。

/sbin：s就是Super User的意思，这里存放的是系统管理员使用的系统管理程序。

/srv：该目录存放一些服务启动之后需要提取的数据。

/sys：这是linux2.6内核的一个很大的变化。该目录下安装了2.6内核中新出现的一个文件系统 sysfs 。

/tmp：这个目录是用来存放一些临时文件的。

/usr：这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似于windows下的program files目录。

/usr/bin： 系统用户使用的应用程序。

/usr/sbin： 超级用户使用的比较高级的管理程序和系统守护程序。

/usr/src： 内核源代码默认的放置目录。

/var：这个目录中存放着在不断扩充着的东西，我们习惯将那些经常被修改的目录放在这个目录下。包括各种日志文件。

/run：是一个临时文件系统，存储系统启动以来的信息。当系统重启时，这个目录下的文件应该被删掉或清除。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令" aria-hidden="true">#</a> 指令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sync</span> <span class="token comment"># 将数据由内存同步到硬盘中。</span>

<span class="token function">shutdown</span> <span class="token comment"># 关机指令，你可以man shutdown 来看一下帮助文档。例如你可以运行如下命令关机：</span>

<span class="token function">shutdown</span> –h <span class="token number">10</span> <span class="token comment"># 这个命令告诉大家，计算机将在10分钟后关机</span>

<span class="token function">shutdown</span> –h now <span class="token comment"># 立马关机</span>

<span class="token function">shutdown</span> –h <span class="token number">20</span>:25 <span class="token comment"># 系统会在今天20:25关机</span>

<span class="token function">shutdown</span> –h +10 <span class="token comment"># 十分钟后关机</span>

<span class="token function">shutdown</span> –r now <span class="token comment"># 系统立马重启</span>

<span class="token function">shutdown</span> –r +10 <span class="token comment"># 系统十分钟后重启</span>

<span class="token function">reboot</span> <span class="token comment"># 就是重启，等同于 shutdown –r now</span>

<span class="token function">halt</span> <span class="token comment"># 关闭系统，等同于shutdown –h now 和 poweroff</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不管是重启系统还是关闭系统，首先要运行 <strong>sync</strong> 命令，把内存中的数据写到磁盘中。</p><h2 id="目录管理" tabindex="-1"><a class="header-anchor" href="#目录管理" aria-hidden="true">#</a> 目录管理</h2><h3 id="绝对路径和相对路径" tabindex="-1"><a class="header-anchor" href="#绝对路径和相对路径" aria-hidden="true">#</a> 绝对路径和相对路径</h3><p>**绝对路径：**路径的写法，由根目录 / 写起，例如：/usr/share/doc 这个目录。</p><p>**相对路径：**路径的写法，不是由 / 写起，例如由 /usr/share/doc 要到 /usr/share/man 底下时，可以写成：cd ../man 这就是相对路径的写法。</p><h3 id="处理目录的命令" tabindex="-1"><a class="header-anchor" href="#处理目录的命令" aria-hidden="true">#</a> 处理目录的命令</h3><ul><li>ls: 列出目录</li><li>cd：切换目录</li><li>pwd：显示目前的目录</li><li>mkdir：创建一个新的目录</li><li>rmdir：删除一个空的目录</li><li>cp: 复制文件或目录</li><li>rm: 移除文件或目录</li><li>mv: 移动文件与目录，或修改文件与目录的名称</li></ul><p>可以使用 <em>man [命令]</em> 来查看各个命令的使用文档，如 ：man cp。</p><blockquote><p>ls（列出目录）</p></blockquote><ul><li>-a ：全部的文件，连同隐藏文件( 开头为 . 的文件) 一起列出来(常用)</li><li>-l ：长数据串列出，包含文件的属性与权限等等数据；(常用)</li></ul><blockquote><p>pwd ( 显示目前所在的目录 )</p></blockquote><p>选项与参数：<strong>-P</strong> ：显示出确实的路径，而非使用连接(link) 路径。</p><blockquote><p>mkdir （创建新目录）</p></blockquote><ul><li>-m ：配置文件的权限喔！直接配置，不需要看默认权限 (umask) 的脸色～</li><li>-p ：帮助你直接将所需要的目录(包含上一级目录)递归创建起来！</li></ul><blockquote><p>rmdir ( 删除空的目录 )</p></blockquote><p>选项与参数：**-p ：**连同上一级『空的』目录也一起删除</p><blockquote><p>cp ( 复制文件或目录 )</p></blockquote><ul><li>**-a：**相当於 -pdr 的意思，至於 pdr 请参考下列说明；(常用)</li><li>**-p：**连同文件的属性一起复制过去，而非使用默认属性(备份常用)；</li><li>**-d：**若来源档为连结档的属性(link file)，则复制连结档属性而非文件本身；</li><li>**-r：**递归持续复制，用於目录的复制行为；(常用)</li><li>**-f：**为强制(force)的意思，若目标文件已经存在且无法开启，则移除后再尝试一次；</li><li>**-i：**若目标档(destination)已经存在时，在覆盖时会先询问动作的进行(常用)</li><li>**-l：**进行硬式连结(hard link)的连结档创建，而非复制文件本身。</li><li>**-s：**复制成为符号连结档 (symbolic link)，亦即『捷径』文件；</li><li>**-u：**若 destination 比 source 旧才升级 destination ！</li></ul><blockquote><p>rm ( 移除文件或目录 )</p></blockquote><ul><li>-f ：就是 force 的意思，忽略不存在的文件，不会出现警告信息；</li><li>-i ：互动模式，在删除前会询问使用者是否动作</li><li>-r ：递归删除啊！最常用在目录的删除了！这是非常危险的选项！！！</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将刚刚在 cp 的实例中创建的 install.sh删除掉！</span>
<span class="token punctuation">[</span>root@kuangshen home<span class="token punctuation">]</span><span class="token comment"># rm -i install.sh</span>
rm: remove regular <span class="token function">file</span> ‘install.sh’? y
<span class="token comment"># 如果加上 -i 的选项就会主动询问喔，避免你删除到错误的档名！</span>

<span class="token comment"># 尽量不要在服务器上使用 rm -rf /</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>mv ( 移动文件与目录，或修改名称 )</p></blockquote><ul><li>-f ：force 强制的意思，如果目标文件已经存在，不会询问而直接覆盖；</li><li>-i ：若目标文件 (destination) 已经存在时，就会询问是否覆盖！</li><li>-u ：若目标文件已经存在，且 source 比较新，才会升级 (update)</li></ul><h2 id="文件内容查看" tabindex="-1"><a class="header-anchor" href="#文件内容查看" aria-hidden="true">#</a> 文件内容查看</h2><ul><li>cat 由第一行开始显示文件内容</li><li>tac 从最后一行开始显示，可以看出 tac 是 cat 的倒着写！</li><li>nl 显示的时候，顺道输出行号！</li><li>more 一页一页的显示文件内容</li><li>less 与 more 类似，但是比 more 更好的是，他可以往前翻页！</li><li>head 只看头几行</li><li>tail 只看尾巴几行</li></ul><blockquote><p>cat 由第一行开始显示文件内容</p></blockquote><ul><li>-A ：相当於 -vET 的整合选项，可列出一些特殊字符而不是空白而已；</li><li>-b ：列出行号，仅针对非空白行做行号显示，空白行不标行号！</li><li>-E ：将结尾的断行字节 $ 显示出来；</li><li>-n ：列印出行号，连同空白行也会有行号，与 -b 的选项不同；</li><li>-T ：将 [tab] 按键以 ^I 显示出来；</li><li>-v ：列出一些看不出来的特殊字符</li></ul><blockquote><p>tac</p></blockquote><p>tac与cat命令刚好相反，文件内容从最后一行开始显示</p><blockquote><p>nl 显示行号</p></blockquote><ul><li>-b ：指定行号指定的方式，主要有两种：-b a ：表示不论是否为空行，也同样列出行号(类似 cat -n)；-b t ：如果有空行，空的那一行不要列出行号(默认值)；</li><li>-n ：列出行号表示的方法，主要有三种：-n ln ：行号在荧幕的最左方显示；-n rn ：行号在自己栏位的最右方显示，且不加 0 ；-n rz ：行号在自己栏位的最右方显示，且加 0 ；</li><li>-w ：行号栏位的占用的位数。</li></ul><blockquote><p>more 一页一页翻动</p></blockquote><ul><li>空白键 (space)：代表向下翻一页；</li><li>Enter ：代表向下翻『一行』；</li><li>/字串 ：代表在这个显示的内容当中，向下搜寻『字串』这个关键字；</li><li>:f ：立刻显示出档名以及目前显示的行数；</li><li>q ：代表立刻离开 more ，不再显示该文件内容。</li><li>b 或 [ctrl]-b ：代表往回翻页，不过这动作只对文件有用，对管线无用。</li></ul><blockquote><p>less 一页一页翻动，以下实例输出/etc/man.config文件的内容：</p></blockquote><ul><li>空白键 ：向下翻动一页；</li><li>[pagedown]：向下翻动一页；</li><li>[pageup] ：向上翻动一页；</li><li>/字串 ：向下搜寻『字串』的功能；</li><li>?字串 ：向上搜寻『字串』的功能；</li><li>n ：重复前一个搜寻 (与 / 或 ? 有关！)</li><li>N ：反向的重复前一个搜寻 (与 / 或 ? 有关！)</li><li>q ：离开 less 这个程序；</li></ul><blockquote><p>head 取出文件前面几行</p></blockquote><p>选项与参数：<strong>-n</strong> 后面接数字，代表显示几行的意思！</p><blockquote><p>tail 取出文件后面几行</p></blockquote><ul><li>n ：后面接数字，代表显示几行的意思</li></ul><h2 id="vim使用" tabindex="-1"><a class="header-anchor" href="#vim使用" aria-hidden="true">#</a> Vim使用</h2><h3 id="命令模式" tabindex="-1"><a class="header-anchor" href="#命令模式" aria-hidden="true">#</a> <strong>命令模式：</strong></h3><ul><li><strong>i</strong> 切换到输入模式，以输入字符。</li><li><strong>x</strong> 删除当前光标所在处的字符。</li><li><strong>:</strong> 切换到底线命令模式，以在最底一行输入命令。</li></ul><h3 id="输入模式" tabindex="-1"><a class="header-anchor" href="#输入模式" aria-hidden="true">#</a> <strong>输入模式：</strong></h3><ul><li><strong>字符按键以及Shift组合</strong>，输入字符</li><li><strong>ENTER</strong>，回车键，换行</li><li><strong>BACK SPACE</strong>，退格键，删除光标前一个字符</li><li><strong>DEL</strong>，删除键，删除光标后一个字符</li><li><strong>方向键</strong>，在文本中移动光标</li><li><strong>HOME</strong>/<strong>END</strong>，移动光标到行首/行尾</li><li><strong>Page Up</strong>/<strong>Page Down</strong>，上/下翻页</li><li><strong>Insert</strong>，切换光标为输入/替换模式，光标将变成竖线/下划线</li><li><strong>ESC</strong>，退出输入模式，切换到命令模式</li></ul><h3 id="底线命令模式" tabindex="-1"><a class="header-anchor" href="#底线命令模式" aria-hidden="true">#</a> <strong>底线命令模式</strong></h3><ul><li>q 退出程序</li><li>w 保存文件</li></ul><p>按ESC键可随时退出底线命令模式。</p><h2 id="账号用户管理" tabindex="-1"><a class="header-anchor" href="#账号用户管理" aria-hidden="true">#</a> 账号用户管理</h2><blockquote><p>添加账号 useradd</p></blockquote><ul><li><ul><li>-c comment 指定一段注释性描述。</li></ul></li><li><p>-d 目录 指定用户主目录，如果此目录不存在，则同时使用-m选项，可以创建主目录。</p></li><li><p>-g 用户组 指定用户所属的用户组。</p></li><li><p>-G 用户组，用户组 指定用户所属的附加组。</p></li><li><p>-m　使用者目录如不存在则自动建立。</p></li><li><p>-s Shell文件 指定用户的登录Shell。</p></li><li><p>-u 用户号 指定用户的用户号，如果同时有-o选项，则可以重复使用其他用户的标识号。</p></li><li><p>用户名 :</p><ul><li><ul><li>指定新账号的登录名。</li></ul></li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 此命令创建了一个用户kuangshen，其中-m选项用来为登录名kuangshen产生一个主目录 /home/kuangshen</span>
<span class="token punctuation">[</span>root@kuangshen home<span class="token punctuation">]</span><span class="token comment"># useradd -m kuangshen</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Linux下如何切换用户</p></blockquote><p>1.切换用户的命令为：su username 【username是你的用户名哦】</p><p>2.从普通用户切换到root用户，还可以使用命令：sudo su</p><p>3.在终端输入exit或logout或使用快捷方式ctrl+d，可以退回到原来用户，其实ctrl+d也是执行的exit命令</p><p>4.在切换用户时，如果想在切换用户之后使用新用户的工作环境，可以在su和username之间加-，例如：【su - root】</p><p>$表示普通用户</p><p>#表示超级用户，也就是root用户</p><blockquote><p>删除帐号</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">userdel</span> 选项 用户名

<span class="token punctuation">[</span>root@kuangshen home<span class="token punctuation">]</span><span class="token comment"># userdel -r kuangshen</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用的选项是 <strong>-r</strong>，它的作用是把用户的主目录一起删除。</p><blockquote><p>修改帐号</p></blockquote><p>常用的选项包括-c, -d, -m, -g, -G, -s, -u以及-o等，这些选项的意义与useradd命令中的选项一样，可以为用户指定新的资源值。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">usermod</span> 选项 用户名

<span class="token comment"># usermod -s /bin/ksh -d /home/z –g developer kuangshen</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>用户口令的管理</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">passwd</span> 选项 用户名

指定和修改用户口令的Shell命令是passwd。超级用户可以为自己和其他用户指定口令，普通用户只能用它修改自己的口令。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>-l 锁定口令，即禁用账号。</li><li>-u 口令解锁。</li><li>-d 使账号无口令。</li><li>-f 强迫用户下次登录时修改口令。</li></ul>`,72),d=[a];function o(r,c){return i(),s("div",null,d)}const t=n(e,[["render",o],["__file","Linux指令.html.vue"]]);export{t as default};
