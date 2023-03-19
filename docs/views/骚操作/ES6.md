# ES6

## reduce 骚操作

`arr.reduce(callback,[initialValue])`

- callback （执行数组中每个值的函数，包含四个参数）

  1. previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
  2. currentValue （数组中当前被处理的元素）
  3. index （当前元素在数组中的索引）
  4. array （调用 reduce 的数组）
- initialValue （作为第一次调用 callback 的第一个参数。）
  - 如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。如果提供initialValue，从索引0开始。

```js
function f1(arg) {
 console.log("f1", arg);
 return arg; }
function f2(arg) {
 console.log("f2", arg);
 return arg; }
function f3(arg) {
 console.log("f3", arg);
 return arg; }

function compose(...funcs) {
 if (funcs.length === 0) {
 return arg => arg
 }
 if (funcs.length === 1) {
 return funcs[0]
 }
 return funcs.reduce((a, b) => (...args) =>
a(b(...args)))
}
console.log(compose(f1, f2, f3)("omg"));
```

## 多个函数组合：中间件的数⽬是不固定的，我们可以⽤数组来模拟

```js
const compose = (...[first,...other]) => (...args) => {
 let ret = first(...args)
 other.forEach(fn => {
 ret = fn(ret)
 })
 return ret
}
const fn = compose(add,square)
console.log(fn(1, 2))
```

### 异步中间件：上⾯的函数都是同步的，挨个遍历执⾏即可，如果是异步的函数呢，是⼀个promise，我们要⽀持async + await的中间件，所以我们要等异步结束后，再执⾏下⼀个中间件

- koa 洋葱模型原理

```js
function compose(middlewares) {
  return function() {
  return dispatch(0);
  // 执⾏第0个
    function dispatch(i) {
      let fn = middlewares[i];
      if (!fn) {
        return Promise.resolve();
      }
      return Promise.resolve(
        fn(function next() {
          // promise完成后，再执⾏下⼀个
          return dispatch(i + 1);
        })
      );
    }
  };
}
async function fn1(next) {
 console.log("fn1");
 await next();
 console.log("end fn1");
}
async function fn2(next) {
 console.log("fn2");
 await delay();
 await next();
 console.log("end fn2");
}
function fn3(next) {
 console.log("fn3");
}
function delay() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove();
    }, 2000);
  });
 }
const middlewares = [fn1, fn2, fn3];
const finalFn = compose(middlewares);
finalFn();
```
