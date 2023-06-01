import{_ as e,r as o,o as a,c as i,b as t,d as l,e as r,a as c}from"./app-676abf65.js";const d={},h=c('<h1 id="rabbitmq-windows-安装" tabindex="-1"><a class="header-anchor" href="#rabbitmq-windows-安装" aria-hidden="true">#</a> RabbitMQ Windows 安装</h1><h2 id="一、安装erlang" tabindex="-1"><a class="header-anchor" href="#一、安装erlang" aria-hidden="true">#</a> 一、安装Erlang</h2><ol><li><p>双击资料中提供的 <strong>otp_win64_22.1.exe</strong> ，选择对应安装目录，一路下一步，完成安装。</p></li><li><p>设置Erlang环境变量</p><p>（1）新建ERLANG_HOME</p></li></ol>',3),_=["src"],b=t("p",null,"​ （2）修改环境变量path，增加Erlang变量至path，%ERLANG_HOME%\\bin;",-1),p=["src"],u=t("p",null,"​ （3）打开cmd命令框，输入erl，如果能看到版本号，则Erlang安装完成。",-1),g=["src"],m=t("h2",{id:"二、安装rabbitmq",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#二、安装rabbitmq","aria-hidden":"true"},"#"),l(" 二、安装RabbitMQ")],-1),f=t("ol",null,[t("li",null,[t("p",null,[l("双击资料中提供的 "),t("strong",null,"rabbitmq-server-3.7.7.exe"),l(" ，选择对应安装目录，一路下一步，完成安装。")])]),t("li",null,[t("p",null,"设置环境变量"),t("p",null,"(1) 新建RABBITMQ_HOME")])],-1),w=["src"],q=t("p",null,"​ （2）修改环境变量path，增加rabbitmq变量至path，%RABBITMQ_HOME%\\sbin",-1),B=["src"],M=t("ol",{start:"3"},[t("li",null,"查看信息。打开cmd命令框，切换至D:\\Program Files\\rabbitmq_server-3.7.7\\sbin目录下，输入rabbitmqctl status")],-1),E=["src"],R=t("ol",{start:"4"},[t("li",null,"安装插件，命令：rabbitmq-plugins.bat enable rabbitmq_management。出现下面信息表示插件安装成功。")],-1),Q=["src"],$=t("h2",{id:"三、启动rabbitmq",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#三、启动rabbitmq","aria-hidden":"true"},"#"),l(" 三、启动RabbitMQ")],-1),v=t("li",null,[t("p",null,"启动RabbitMQ：rabbitmq-server -detached 后台启动")],-1),N=t("li",null,[t("p",null,"停止RabbitMQ：rabbitmqctl stop")],-1),k={href:"http://localhost:15672/",target:"_blank",rel:"noopener noreferrer"},x=["src"],A=t("p",null,"至此，rabbitMQ安装部署完成。",-1);function H(n,I){const s=o("ExternalLinkIcon");return a(),i("div",null,[h,t("img",{src:n.$withBase("/springcloud/1585755246863.png"),alt:"foo"},null,8,_),b,t("img",{src:n.$withBase("/springcloud/1585755661841.png"),alt:"foo"},null,8,p),u,t("img",{src:n.$withBase("/springcloud/1585755758154.png"),alt:"foo"},null,8,g),m,f,t("img",{src:n.$withBase("/springcloud/1585756035623.png"),alt:"foo"},null,8,w),q,t("img",{src:n.$withBase("/springcloud/1585756139616.png"),alt:"foo"},null,8,B),M,t("img",{src:n.$withBase("/springcloud/1585756373625.png"),alt:"foo"},null,8,E),R,t("img",{src:n.$withBase("/springcloud/1585756546472.png"),alt:"foo"},null,8,Q),$,t("ol",null,[v,N,t("li",null,[t("p",null,[l("rabbitmq启动成功，浏览器中"),t("a",k,[l("http://localhost:15672"),r(s)]),l(",默认用户名和密码 都是 guest")])])]),t("img",{src:n.$withBase("/springcloud/1585756891269.png"),alt:"foo"},null,8,x),A])}const O=e(d,[["render",H],["__file","RabbitMQ Windows 安装.html.vue"]]);export{O as default};
