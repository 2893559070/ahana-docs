import{_ as o,r as l,o as c,c as r,b as n,d as a,e as i,a as e}from"./app-9d6e6088.js";const d={},h=n("h1",{id:"maven基础",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#maven基础","aria-hidden":"true"},"#"),a(" Maven基础")],-1),p=n("h2",{id:"maven简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#maven简介","aria-hidden":"true"},"#"),a(" Maven简介")],-1),u=["src"],m=n("h3",{id:"是什么",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#是什么","aria-hidden":"true"},"#"),a(" 是什么")],-1),g=["src"],v=n("h3",{id:"作用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#作用","aria-hidden":"true"},"#"),a(" 作用")],-1),_=["src"],f=n("h2",{id:"下载与安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#下载与安装","aria-hidden":"true"},"#"),a(" 下载与安装")],-1),b={href:"http://maven.apache.org/",target:"_blank",rel:"noopener noreferrer"},k={href:"http://maven.apache.org/download.cgi",target:"_blank",rel:"noopener noreferrer"},w=["src"],B=["src"],$=["src"],j=["src"],M=["src"],N=n("h3",{id:"环境变量配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#环境变量配置","aria-hidden":"true"},"#"),a(" 环境变量配置")],-1),D=["src"],E=["src"],V=["src"],y=["src"],I=["src"],J=n("h2",{id:"maven基础概念",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#maven基础概念","aria-hidden":"true"},"#"),a(" Maven基础概念")],-1),L=n("h3",{id:"仓库",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#仓库","aria-hidden":"true"},"#"),a(" 仓库")],-1),O=["src"],T=["src"],A=n("h3",{id:"坐标",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#坐标","aria-hidden":"true"},"#"),a(" 坐标")],-1),C=["src"],S=["src"],W=["src"],q=n("h3",{id:"本地仓库配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#本地仓库配置","aria-hidden":"true"},"#"),a(" 本地仓库配置")],-1),z=["src"],F=["src"],G=n("h3",{id:"远程仓库的配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#远程仓库的配置","aria-hidden":"true"},"#"),a(" 远程仓库的配置")],-1),H=["src"],K=["src"],P=e(`<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirror</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>nexus-aliyun<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>central<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>Nexus aliyun<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://maven.aliyun.com/nexus/content/groups/public<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirror</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Q=["src"],R=n("h2",{id:"手工制作maven项目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#手工制作maven项目","aria-hidden":"true"},"#"),a(" 手工制作Maven项目")],-1),U=n("h3",{id:"maven工程目录结构",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#maven工程目录结构","aria-hidden":"true"},"#"),a(" Maven工程目录结构")],-1),X=["src"],Y=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  - mavenDir
    - src
      - main
        - <span class="token function">java</span>
          - com
            - base
              Demo.java
        - resources
      - <span class="token builtin class-name">test</span>
        - <span class="token function">java</span>
          - com
            - base
              DemoTest.java
        - resources
    - pom.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="构建命令" tabindex="-1"><a class="header-anchor" href="#构建命令" aria-hidden="true">#</a> 构建命令</h3>`,2),Z=["src"],x=["src"],nn=n("h3",{id:"插件创建工程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#插件创建工程","aria-hidden":"true"},"#"),a(" 插件创建工程")],-1),sn=["src"],an=["src"],en=["src"],tn=n("h2",{id:"idea生成maven项目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#idea生成maven项目","aria-hidden":"true"},"#"),a(" IDEA生成Maven项目")],-1),on=["src"],ln=n("h3",{id:"配置maven",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置maven","aria-hidden":"true"},"#"),a(" 配置Maven")],-1),cn=["src"],rn=["src"],dn=n("h3",{id:"手工创建java项目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#手工创建java项目","aria-hidden":"true"},"#"),a(" 手工创建Java项目")],-1),hn=["src"],pn=["src"],un=["src"],mn=["src"],gn=["src"],vn=["src"],_n=["src"],fn=["src"],bn=["src"],kn=["src"],wn=n("h3",{id:"原型创建java项目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#原型创建java项目","aria-hidden":"true"},"#"),a(" 原型创建Java项目")],-1),Bn=["src"],$n=["src"],jn=["src"],Mn=["src"],Nn=n("h3",{id:"原型创建web项目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#原型创建web项目","aria-hidden":"true"},"#"),a(" 原型创建Web项目")],-1),Dn=["src"],En=n("h3",{id:"插件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#插件","aria-hidden":"true"},"#"),a(" 插件")],-1),Vn=["src"],yn=e(`<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token comment">&lt;!-- 构建 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 设置插件 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- 具体的插件配置 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- 插件坐标 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),In=["src"],Jn=["src"],Ln=["src"],On=n("h2",{id:"依赖管理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#依赖管理","aria-hidden":"true"},"#"),a(" 依赖管理")],-1),Tn=n("h3",{id:"依赖配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#依赖配置","aria-hidden":"true"},"#"),a(" 依赖配置")],-1),An=["src"],Cn=["src"],Sn=n("h3",{id:"依赖传递",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#依赖传递","aria-hidden":"true"},"#"),a(" 依赖传递")],-1),Wn=["src"],qn=["src"],zn=["src"],Fn=["src"],Gn=n("h3",{id:"可选依赖",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#可选依赖","aria-hidden":"true"},"#"),a(" 可选依赖")],-1),Hn=n("p",null,"排除不要的直接依赖",-1),Kn=["src"],Pn=n("h3",{id:"排除依赖",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#排除依赖","aria-hidden":"true"},"#"),a(" 排除依赖")],-1),Qn=n("p",null,"排除不要的间接依赖",-1),Rn=["src"],Un=n("h3",{id:"依赖范围",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#依赖范围","aria-hidden":"true"},"#"),a(" 依赖范围")],-1),Xn=["src"],Yn=n("h4",{id:"依赖范围传递性",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#依赖范围传递性","aria-hidden":"true"},"#"),a(" 依赖范围传递性")],-1),Zn=["src"],xn=n("h2",{id:"生命周期与插件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#生命周期与插件","aria-hidden":"true"},"#"),a(" 生命周期与插件")],-1),ns=n("h3",{id:"构建生命周期",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#构建生命周期","aria-hidden":"true"},"#"),a(" 构建生命周期")],-1),ss=["src"],as=["src"],es=["src"],ts=["src"],is=["src"],os=n("h3",{id:"插件-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#插件-1","aria-hidden":"true"},"#"),a(" 插件")],-1),ls=["src"],cs=["src"];function rs(s,ds){const t=l("ExternalLinkIcon");return c(),r("div",null,[h,p,n("img",{src:s.$withBase("/maven/1.png"),alt:"foo"},null,8,u),m,n("img",{src:s.$withBase("/maven/2.png"),alt:"foo"},null,8,g),v,n("img",{src:s.$withBase("/maven/3.png"),alt:"foo"},null,8,_),f,n("ul",null,[n("li",null,[n("p",null,[n("a",b,[a("官网"),i(t)])])]),n("li",null,[n("p",null,[n("a",k,[a("下载地址"),i(t)])]),n("img",{src:s.$withBase("/maven/4.png"),alt:"foo"},null,8,w),n("img",{src:s.$withBase("/maven/4-1.png"),alt:"foo"},null,8,B),n("img",{src:s.$withBase("/maven/4-2.png"),alt:"foo"},null,8,$),n("img",{src:s.$withBase("/maven/4-3.png"),alt:"foo"},null,8,j),n("img",{src:s.$withBase("/maven/4-4.png"),alt:"foo"},null,8,M)])]),N,n("img",{src:s.$withBase("/maven/5.png"),alt:"foo"},null,8,D),n("img",{src:s.$withBase("/maven/5-1.png"),alt:"foo"},null,8,E),n("img",{src:s.$withBase("/maven/5-2.png"),alt:"foo"},null,8,V),n("img",{src:s.$withBase("/maven/5-3.png"),alt:"foo"},null,8,y),n("img",{src:s.$withBase("/maven/5-4.png"),alt:"foo"},null,8,I),J,L,n("img",{src:s.$withBase("/maven/6.png"),alt:"foo"},null,8,O),n("img",{src:s.$withBase("/maven/6-1.png"),alt:"foo"},null,8,T),A,n("img",{src:s.$withBase("/maven/7.png"),alt:"foo"},null,8,C),n("img",{src:s.$withBase("/maven/7-1.png"),alt:"foo"},null,8,S),n("img",{src:s.$withBase("/maven/7-2.png"),alt:"foo"},null,8,W),q,n("img",{src:s.$withBase("/maven/8.png"),alt:"foo"},null,8,z),n("img",{src:s.$withBase("/maven/8-1.png"),alt:"foo"},null,8,F),G,n("img",{src:s.$withBase("/maven/9.png"),alt:"foo"},null,8,H),n("img",{src:s.$withBase("/maven/9-1.png"),alt:"foo"},null,8,K),P,a(),n("img",{src:s.$withBase("/maven/10.png"),alt:"foo"},null,8,Q),R,U,n("img",{src:s.$withBase("/maven/11.png"),alt:"foo"},null,8,X),Y,n("img",{src:s.$withBase("/maven/12.png"),alt:"foo"},null,8,Z),n("img",{src:s.$withBase("/maven/12-1.png"),alt:"foo"},null,8,x),nn,n("img",{src:s.$withBase("/maven/13.png"),alt:"foo"},null,8,sn),n("img",{src:s.$withBase("/maven/13-1.png"),alt:"foo"},null,8,an),n("img",{src:s.$withBase("/maven/13-2.png"),alt:"foo"},null,8,en),tn,n("img",{src:s.$withBase("/maven/14.png"),alt:"foo"},null,8,on),ln,n("img",{src:s.$withBase("/maven/15.png"),alt:"foo"},null,8,cn),n("img",{src:s.$withBase("/maven/15-1.png"),alt:"foo"},null,8,rn),dn,n("img",{src:s.$withBase("/maven/15-2.png"),alt:"foo"},null,8,hn),n("img",{src:s.$withBase("/maven/15-3.png"),alt:"foo"},null,8,pn),n("img",{src:s.$withBase("/maven/15-4.png"),alt:"foo"},null,8,un),n("img",{src:s.$withBase("/maven/15-5.png"),alt:"foo"},null,8,mn),n("img",{src:s.$withBase("/maven/15-6.png"),alt:"foo"},null,8,gn),n("img",{src:s.$withBase("/maven/15-7.png"),alt:"foo"},null,8,vn),n("img",{src:s.$withBase("/maven/15-8.png"),alt:"foo"},null,8,_n),n("ul",null,[n("li",null,[a("创建maven构建命令 "),n("ul",null,[n("li",null,[n("img",{src:s.$withBase("/maven/15-9-1.png"),alt:"foo"},null,8,fn)]),n("li",null,[n("img",{src:s.$withBase("/maven/15-9.png"),alt:"foo"},null,8,bn)]),n("li",null,[n("img",{src:s.$withBase("/maven/15-9-2.png"),alt:"foo"},null,8,kn)])])])]),wn,n("img",{src:s.$withBase("/maven/16.png"),alt:"foo"},null,8,Bn),n("img",{src:s.$withBase("/maven/16-1.png"),alt:"foo"},null,8,$n),n("img",{src:s.$withBase("/maven/16-2.png"),alt:"foo"},null,8,jn),n("img",{src:s.$withBase("/maven/16-3.png"),alt:"foo"},null,8,Mn),Nn,n("img",{src:s.$withBase("/maven/17.png"),alt:"foo"},null,8,Dn),En,n("img",{src:s.$withBase("/maven/18-3.png"),alt:"foo"},null,8,Vn),yn,a(),n("img",{src:s.$withBase("/maven/18.png"),alt:"foo"},null,8,In),n("img",{src:s.$withBase("/maven/18-1.png"),alt:"foo"},null,8,Jn),n("img",{src:s.$withBase("/maven/18-2.png"),alt:"foo"},null,8,Ln),On,Tn,n("img",{src:s.$withBase("/maven/19-1.png"),alt:"foo"},null,8,An),n("img",{src:s.$withBase("/maven/19.png"),alt:"foo"},null,8,Cn),Sn,n("img",{src:s.$withBase("/maven/20.png"),alt:"foo"},null,8,Wn),n("img",{src:s.$withBase("/maven/20-2.png"),alt:"foo"},null,8,qn),n("img",{src:s.$withBase("/maven/20-1.png"),alt:"foo"},null,8,zn),n("img",{src:s.$withBase("/maven/20-3.png"),alt:"foo"},null,8,Fn),Gn,Hn,n("img",{src:s.$withBase("/maven/21.png"),alt:"foo"},null,8,Kn),Pn,Qn,n("img",{src:s.$withBase("/maven/22.png"),alt:"foo"},null,8,Rn),Un,n("img",{src:s.$withBase("/maven/23.png"),alt:"foo"},null,8,Xn),Yn,n("img",{src:s.$withBase("/maven/23-1.png"),alt:"foo"},null,8,Zn),xn,ns,n("img",{src:s.$withBase("/maven/24.png"),alt:"foo"},null,8,ss),n("img",{src:s.$withBase("/maven/24-1.png"),alt:"foo"},null,8,as),n("img",{src:s.$withBase("/maven/24-2.png"),alt:"foo"},null,8,es),n("img",{src:s.$withBase("/maven/24-3.png"),alt:"foo"},null,8,ts),n("img",{src:s.$withBase("/maven/24-4.png"),alt:"foo"},null,8,is),os,n("img",{src:s.$withBase("/maven/25.png"),alt:"foo"},null,8,ls),n("img",{src:s.$withBase("/maven/25-1.png"),alt:"foo"},null,8,cs)])}const ps=o(d,[["render",rs],["__file","base.html.vue"]]);export{ps as default};