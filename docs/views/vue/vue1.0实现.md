# vue1.0实现

## Object.defineProperty 响应式

```js
function defineReactive(obj, key, val) {
  // 递归
  observe(val)
  
  // 对传入obj进行访问拦截
  Object.defineProperty(obj, key, {
    get() {
      console.log('get ' + key);
      return val
    },
    set(newVal) {
      if (newVal !== val) {
        console.log('set ' + key + ':' + newVal);
        // 如果传入的newVal依然是obj，需要做响应化处理
        observe(newVal)
        val = newVal
      }
    }
  })
}

function observe(obj) {
  if (typeof obj !== 'object' || obj == null) {
    // 希望传入的是obj
    return
  }

  Object.keys(obj).forEach(key => {
    defineReactive(obj, key, obj[key])
  })
}

function set(obj,key,val) {
  defineReactive(obj,key,val)
}

// defineReactive(obj, 'foo', 'foo')
// obj.foo
// obj.foo = 'fooooooooooooooooo'

const obj = { foo: 'foo', bar: 'bar', baz: { a: 1 }, arr: [1,2,3] }

// 遍历做响应化处理
observe(obj)

obj.foo
obj.foo = 'fooooooooooooooo'
obj.bar
obj.bar = 'barrrrrrrrrrrrrr'

// obj.baz.a = 10 // no ok
obj.baz = {a:100}
obj.baz.a = 100000

// obj.dong = 'dong'
set(obj, 'dong', 'dong')
obj.dong

// Object.defineProperty()对数组无效
// 分析：改变数组方法只有7个
// 解决方案：替换数组实例的原型方法，让他们在修改数组同时还可以通知更新
obj.arr.push(4)
```

## Vue中的数据响应化

### 原理分析

- new Vue() 首先执行初始化，对data执行响应化处理，这个过程发生在Observer中
- 同时对模板执行编译，找到其中动态绑定的数据，从data中获取并初始化视图，这个过程发生在
Compile中
- 同时定义一个更新函数和Watcher，将来对应数据变化时Watcher会调用更新函数
- 由于data的某个key在一个视图中可能出现多次，所以每个key都需要一个管家Dep来管理多个
Watcher
- 将来data中数据一旦发生变化，会首先找到对应的Dep，通知所有Watcher执行更新函数

<img :src="$withBase('/vue/MVVM.png')" alt="foo">

### 涉及类型介绍

- KVue：框架构造函数
- Observer：执行数据响应化（分辨数据是对象还是数组）
- Compile：编译模板，初始化视图，收集依赖（更新函数、watcher创建）
- Watcher：执行更新函数（更新dom）
- Dep：管理多个Watcher，批量更新

### kvue.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div id="app">
    <!-- 插值 -->
    <p>{{counter}}</p>
    <p>{{counter}}</p>
    <p>{{counter}}</p>
    <!-- 指令 -->
    <p k-text="counter"></p>
    <p k-html="desc"></p>
  </div>

  <script src="compile.js"></script>
  <script src="kvue.js"></script>
  <script>

    const app = new KVue({
      el:'#app',
      data: {
        counter: 1,
        desc:'<span style="color:red">kvue可还行？</span>'
      },
    })
    setInterval(() => {
      app.counter++
      // app.$data.counter++
    }, 1000);
    
  </script>
</body>
</html>
```

### kvue.js

- 执行初始化，对data执行响应化处理，kvue.js

```js
function defineReactive(obj, key, val) {
  // 递归
  observe(val)

  // 创建一个Dep和当前key一一对应
  const dep = new Dep()
  
  // 对传入obj进行访问拦截
  Object.defineProperty(obj, key, {
    get() {
      console.log('get ' + key);
      // 依赖收集在这里
      Dep.target && dep.addDep(Dep.target)
      return val
    },
    set(newVal) {
      if (newVal !== val) {
        console.log('set ' + key + ':' + newVal);
        // 如果传入的newVal依然是obj，需要做响应化处理
        observe(newVal)
        val = newVal

        // 通知更新
        // watchers.forEach(w => w.update())
        dep.notify()
      }
    }
  })
}

function observe(obj) {
  if (typeof obj !== 'object' || obj == null) {
    // 希望传入的是obj
    return
  }

  // 创建Observer实例
  new Observer(obj)
}

// 代理函数，方便用户直接访问$data中的数据
function proxy(vm, sourceKey) {
  // vm[sourceKey]就是vm[$data]
  Object.keys(vm[sourceKey]).forEach(key => {
    // 将$data中的key代理到vm属性中
    Object.defineProperty(vm, key, {
      get() {
        return vm[sourceKey][key]
      },
      set(newVal) {
        vm[sourceKey][key] = newVal
      }
    })
  })
}

// 创建KVue构造函数
class KVue {
  constructor(options) {
    // 保存选项
    this.$options = options;
    this.$data = options.data;

    // 响应化处理
    observe(this.$data)

    // 代理
    proxy(this, '$data')

    // 创建编译器
    new Compiler(options.el, this)
  }
}

// 根据对象类型决定如何做响应化
class Observer {
  constructor(value) {
    this.value = value

    // 判断其类型
    if (typeof value === 'object') {
      this.walk(value)
    }
  }

  // 对象数据响应化
  walk(obj) {
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key])
    })
  }

  // 数组数据响应化，待补充
}

// 观察者:保存更新函数，值发生变化调用更新函数
// const watchers = []
class Watcher {
  constructor(vm, key, updateFn) {
    this.vm = vm

    this.key = key

    this.updateFn = updateFn

    // watchers.push(this)

    // Dep.target静态属性上设置为当前watcher实例
    Dep.target = this
    this.vm[this.key] // 读取触发了getter
    Dep.target = null // 收集完就置空
  }

  update() {
    this.updateFn.call(this.vm, this.vm[this.key])
  }
}

// Dep：依赖，管理某个key相关所有Watcher实例
class Dep {
  constructor(){
    this.deps = []
  }

  addDep(dep) {
    this.deps.push(dep)
  }

  notify() {
    this.deps.forEach(dep => dep.update())
  }
}
```

### compile.js

- 编译 - Compile

<img :src="$withBase('/vue/Compile.png')" alt="foo" >

- 初始化视图 根据节点类型编译，compile.js

```js
// 编译器
// 递归遍历dom树
// 判断节点类型，如果是文本，则判断是否是插值绑定
// 如果是元素，则遍历其属性判断是否是指令或事件，然后递归子元素
class Compiler {
  // el是宿主元素
  // vm是KVue实例
  constructor(el, vm) {
    // 保存kVue实例
    this.$vm = vm
    this.$el = document.querySelector(el)

    if (this.$el) {
      // 执行编译
      this.compile(this.$el)
    }
  }

  compile(el) {
    // 遍历el树
    const childNodes = el.childNodes;
    Array.from(childNodes).forEach(node => {
      // 判断是否是元素
      if (this.isElement(node)) {
        // console.log('编译元素'+node.nodeName);
        this.compileElement(node)
      } else if (this.isInter(node)) {
        // console.log('编译插值绑定'+node.textContent);
        this.compileText(node)

      }

      // 递归子节点
      if (node.childNodes && node.childNodes.length > 0) {
        this.compile(node)
      }
    })
  }


  isElement(node) {
    return node.nodeType === 1
  }

  isInter(node) {
    // 首先是文本标签，其次内容是{{xxx}}
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
  }

  compileText(node) {

    this.update(node, RegExp.$1, 'text')
  }

  // 元素编译
  compileElement(node) {
    // 节点是元素
    // 遍历其属性列表
    const nodeAttrs = node.attributes
    Array.from(nodeAttrs).forEach(attr => {
      // 规定：指令以k-xx="oo"定义 k-text="counter"
      const attrName = attr.name // k-xx k-text
      const exp = attr.value // oo counter
      if (this.isDirective(attrName)) {
        const dir = attrName.substring(2) // xx text
        // 执行指令
        this[dir] && this[dir](node, exp)
      }
    })
  }

  isDirective(attr) {
    return attr.indexOf('k-') === 0
  }

  // 更新函数作用：
  // 1.初始化
  // 2.创建Watcher实例
  update(node, exp, dir) {
    // 初始化
    // 指令对应更新函数xxUpdater
    const fn = this[dir + 'Updater']
    fn && fn(node, this.$vm[exp])

    // 更新处理，封装一个更新函数，可以更新对应dom元素
    new Watcher(this.$vm, exp, function (val) {
      fn && fn(node, val)
    })
  }

  textUpdater(node, value) {
    node.textContent = value
  }

  // k-text
  text(node, exp) {
    this.update(node, exp, 'text')
  }

  // k-html
  html(node, exp) {
    this.update(node, exp, 'html')
  }

  htmlUpdater(node, value) {
    node.innerHTML = value
  }
}
```
