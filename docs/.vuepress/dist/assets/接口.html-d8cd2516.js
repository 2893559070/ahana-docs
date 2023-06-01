import{_ as n,o as s,c as a,a as t}from"./app-676abf65.js";const e={},p=t(`<h1 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h1><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//源码  </span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token keyword">implements</span> <span class="token class-name">Move</span> <span class="token punctuation">{</span>
	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Animal move&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Human</span> <span class="token keyword">implements</span> <span class="token class-name">Move</span><span class="token punctuation">{</span>
	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Human move&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token keyword">implements</span> <span class="token class-name">Move</span> <span class="token punctuation">{</span>
	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Car move&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MoveTest</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Move</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> move <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Human</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Move</span> m <span class="token operator">:</span> move<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			m<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token comment">//执行结果</span>
<span class="token comment">//Animal move</span>
<span class="token comment">//Human move</span>
<span class="token comment">//Car move</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="存在的意义" tabindex="-1"><a class="header-anchor" href="#存在的意义" aria-hidden="true">#</a> 存在的意义</h2><ul><li><p>有时必须从几个类中派生出一个子类，继承它们所有的属性和方法。但是，Java不支持多重继承。有了接口，就可以得到多重继承的效果。</p></li><li><p>接口是一种特殊的抽象类，这种抽象类中只包含常量和方法的定义，而没有变量和方法的实现。<code>ps：</code>禁止直接为其实例化对象</p></li><li><p>示例</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/* 禁止直接为其实例化对象 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Move</span> <span class="token punctuation">{</span>
	<span class="token comment">/*相比于抽象类，Java 对接口的限制更加严格了，因为接口连构造方法都没有，所以，根本不      可能为其实例化对象。*/</span>
	<span class="token comment">//此时编译器会提示 Interfaces cannot have constructors 错误信息</span>
	<span class="token comment">//public Move(){}</span>
	
	<span class="token keyword">void</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/* 实现伪多重继承 由于 Java 中允许多实现，所以，一个类在实现了多个接口之后，就可以上转型为多个接口，即打破单继承局限。 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Fly</span> <span class="token punctuation">{</span>
	<span class="token keyword">void</span> <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Fight</span> <span class="token punctuation">{</span>
	<span class="token keyword">void</span> <span class="token function">fight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SuperMan</span> <span class="token keyword">implements</span> <span class="token class-name">Fly</span><span class="token punctuation">,</span><span class="token class-name">Fight</span><span class="token punctuation">{</span>
	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;SuperMan fight&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;SuperMan fly&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MultiImplementsTest</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">SuperMan</span> sm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SuperMan</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">fly</span><span class="token punctuation">(</span>sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">fight</span><span class="token punctuation">(</span>sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">fly</span><span class="token punctuation">(</span><span class="token class-name">Fly</span> f<span class="token punctuation">)</span><span class="token punctuation">{</span>
		f<span class="token punctuation">.</span><span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">fight</span><span class="token punctuation">(</span><span class="token class-name">Fight</span> f<span class="token punctuation">)</span><span class="token punctuation">{</span>
		f<span class="token punctuation">.</span><span class="token function">fight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//执行结果</span>
<span class="token class-name">SuperMan</span> fly
<span class="token class-name">SuperMan</span> fight
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="接口中易混淆的概念" tabindex="-1"><a class="header-anchor" href="#接口中易混淆的概念" aria-hidden="true">#</a> 接口中易混淆的概念</h2><ol><li><p><strong>接口中有构造方法吗？</strong> 接口中没有构造方法。</p></li><li><p><strong>接口可以继承普通类吗？接口可以继承抽象类吗？</strong> 接口不可以继承普通类。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">//此时开发工具会提示 The type Animal cannot be a superinterface of Fly; a superinterface must be an interface 错误信息</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Fly</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
	<span class="token keyword">void</span> <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接口不可以继承抽象类。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Airplane</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">//此时开发工具会提示 The type Airplane cannot be a superinterface of Fly; a superinterface must be an interface 错误信息</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Fly</span> <span class="token keyword">extends</span> <span class="token class-name">Airplane</span><span class="token punctuation">{</span>
	<span class="token keyword">void</span> <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：接口中<strong>只能</strong>定义静态常量和抽象方法，无论普通类还是抽象类都没有如此严格的要求，因此接口既不能继承普通类也不能继承抽象类。</p></li><li><p><strong>当实现类的父类中的方法和接口中的方法一样时，会出现什么情况？</strong> 其实通常情况下这种事是不会发生的，除非某个程序员想自找麻烦。</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>I generally find that once you know about a feature, you often discover places where it is useful</p></div><p>结论：当实现类的父类中的方法的签名和返回值跟接口中的方法的签名和返回值完全一样时，此时子类可以不同显式实现接口中的方法。如果此时，实现类没有显式实现接口中的，那么将调用父类中的方法。</p></li></ol><h2 id="接口实际应用" tabindex="-1"><a class="header-anchor" href="#接口实际应用" aria-hidden="true">#</a> 接口实际应用</h2><ol><li><code>Product</code>（抽象产品类） 抽象产品类是定义产品的接口，是工厂方法模式创建的产品对象的“父类”。</li><li><code>ConcreteProduct</code>（具体产品类） 具体产品类是抽象产品类的实现类，它实现了抽象产品类，与具体工厂类一一对应。</li><li><code>Factory</code>（抽象工厂类） 抽象工厂类是定义创建产品类的接口。</li><li><code>ConcreteFactory</code>（具体工厂类） 具体工厂类是抽象工厂类的实现类，它实现了抽象工厂类，用于生产具体的产品，与具体产品类一一对应。</li></ol>`,9),c=[p];function o(l,i){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","接口.html.vue"]]);export{d as default};
