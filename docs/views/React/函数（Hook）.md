# 函数组件 (Hook)

```jsx
import React, { useState } from 'react';

function Example() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## 声明 state 变量

你可以在一个组件中多次使用 State Hook:

```jsx
function ExampleWithManyStates() {
  // 声明多个 state 变量！
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...

  addBtn = () => {
    // 第一种写法
    setTodos({text: text + 'setTodos'})
    // 第二种写法
    setTodos((text) => { return text + 'setTodos' })
  }
}
```

## useEffect

- 🤔 如何用useEffect模拟componentDidMount生命周期？
    - 虽然可以使用useEffect(fn, [])，但它们并不完全相等。和componentDidMount不一样，useEffect会捕获 props和state。所以即便在回调函数里，你拿到的还是初始的props和state。如果你想得到“最新”的值，你可以使用ref。不过，通常会有更简单的实现方式，所以你并不一定要用ref。记住，effects的心智模型和componentDidMount以及其他生命周期是不同的，试图找到它们之间完全一致的表达反而更容易使你混淆。想要更有效，你需要“think in effects”，它的心智模型更接近于实现状态同步，而不是响应生命周期事件。

- 🤔 如何正确地在useEffect里请求数据？[]又是什么？
    - [这篇文章](https://www.robinwieruch.de/react-hooks-fetch-data/) 是很好的入门，介绍了如何在useEffect里做数据请求。请务必读完它！它没有我的这篇这么长。[]表示effect没有使用任何React数据流里的值，因此该effect仅被调用一次是安全的。[]同样也是一类常见问题的来源，也即你以为没使用数据流里的值但其实使用了。你需要学习一些策略（主要是useReducer 和 useCallback）来移除这些effect依赖，而不是错误地忽略它们。

- 🤔 我应该把函数当做effect的依赖吗？
    - 一般建议把不依赖props和state的函数提到你的组件外面，并且把那些仅被effect使用的函数放到effect里面。如果这样做了以后，你的effect还是需要用到组件内的函数（包括通过props传进来的函数），可以在定义它们的地方用useCallback包一层。为什么要这样做呢？因为这些函数可以访问到props和state，因此它们会参与到数据流中。我们官网的FAQ有[更详细的答案](https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies)。

- 🤔 为什么有时候会出现无限重复请求的问题？
    - 这个通常发生于你在effect里做数据请求并且没有设置effect依赖参数的情况。没有设置依赖，effect会在每次渲染后执行一次，然后在effect中更新了状态引起渲染并再次触发effect。无限循环的发生也可能是因为你设置的依赖总是会改变。你可以通过一个一个移除的方式排查出哪个依赖导致了问题。但是，移除你使用的依赖（或者盲目地使用[]）通常是一种错误的解决方式。你应该做的是解决问题的根源。举个例子，函数可能会导致这个问题，你可以把它们放到effect里，或者提到组件外面，或者用useCallback包一层。useMemo 可以做类似的事情以避免重复生成对象。

- 🤔 为什么有时候在effect里拿到的是旧的state或prop？
    - Effect拿到的总是定义它的那次渲染中的props和state。这能够避免一些[bugs](https://chojaehun.github.io/how-are-function-components-different-from-classes/)，但在一些场景中又会有些讨人嫌。对于这些场景，你可以明确地使用可变的ref保存一些值（上面文章的末尾解释了这一点）。如果你觉得在渲染中拿到了一些旧的props和state，且不是你想要的，你很可能遗漏了一些依赖。可以尝试使用这个[lint 规则](https://github.com/facebook/react/issues/14920)来训练你发现这些依赖。可能没过几天，这种能力会变得像是你的第二天性。同样可以看我们官网FAQ中的[这个回答](https://reactjs.org/docs/hooks-faq.html#why-am-i-seeing-stale-props-or-state-inside-my-function)。

```jsx
/*
 effect中用到的所有组件内的值都要包含在依赖中。这包括props，state，函数 — 组件内的任何东西。
 可能会引起一个问题。比如，你可能会遇到无限请求的问题，或者socket被频繁创建的问题。解决问题的方法不是移除依赖项。

 如果依赖项包含了所有effect中使用到的值，React就能知道何时需要运行它：
*/ 

 useEffect(() => {
    document.title = 'Hello, ' + name;
  }, [name]);
// (依赖发生了变更，所以会重新运行effect。)

  useEffect(() => {
    document.title = 'Hello, ' + name;
  }, []); // Wrong: name is missing in deps
// 但是如果我们将[]设为effect的依赖，新的effect函数不会运行： (依赖没有变，所以不会再次运行effect。)
```

## useRef
- 绑定 ref 获取实例
```jsx
  const myref = useRef()

  show = () => {
    console.log(myref.current.value)
  }

  return (
    <div>
      <input type='text' ref={myref}></input>
      <button onClick={show}>显示input</button>
    <div>
  )
```

## Fragment
- 空标签 编译时 将其丢失
```jsx
  const myref = useRef()

  show = () => {
    console.log(myref.current.value)
  }

  return (
    <Fragment>
      <input type='text' ref={myref}></input>
      <button onClick={show}>显示input</button>
    </Fragment>
  )
```