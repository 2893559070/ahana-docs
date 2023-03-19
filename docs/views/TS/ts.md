# ts 学习

`--------------------------------------------------------------TS------------------------------------------------------------------------`
`--------------------------------------------------------------TS------------------------------------------------------------------------`
`--------------------------------------------------------------TS------------------------------------------------------------------------`

## ts配置文件

`tsc --init` 生成tsconfig.json 配置文件

```json
{
  "compilerOptions": {
      "outDir": "./js" // ts编译成js存放的路径
  }
}
// 终端 -> 运行任务 -> tsscript -> tsc:监视 开启自动编译
```
<!-- <img :src="$withBase('/ts+vue3/ts-tec-by.png')" alt="foo"> -->

## 数据类型

- 布尔类型
  `const a:boolean = true`
- 数字类型
  `const b:number = 1`
- 数组类型
  `const c1:number[] = [1, 2]`
  `const c2:Array<number> = [1, 2]`
- 元组类型
  `const d:[string, number, boolean] = ["1", 1, false]`
- 枚举类型
  `enum Flag { success = 1, error = 0 }`
- 任意类型
  `const e:any = 1` 可以设置任意类型
  - 用处
    解决无法确定类型的数据报错问题
- null 和 undefined
  `const f1:undefined` 只定义不赋值
  `const f2:null` 空值 没有值
  `const f3:null | undefined | number` 手动any类型
- void类型

  ```js
    const run() : void {
      // 方法无返回值
    }
  ```

- never
  其他类型 （包括null和undefined），代表从不会出现的值，声明never的变量只能被never类型所赋值
  使用场景较少

  ```js
    const a: never = (() => {
      throw new Error('错误')
    })()
  ```

## 函数

- 参数
  - ? 参数可传 可不传 （配置到形参最后面）
  - 默认参数: es5中没法设置，es6 与 ts 中可以设置
  - 剩余参数 （a: number, ...b: number[]）

```ts
function getinfo(name: string, age?: number = 22): string {
  if(age) return `${name} --- ${age}`
  else return `${name} --- 年龄未知`
}

getinfo("张三", 22);
getinfo("张三");

```

- 函数重载
  - es5不支持重载

```ts
  // 相当于接口
  function getInfo(name: string): string
  function getInfo(age: number): number

  // 相当于继承上面接口 实现重载（方法重写）
  function getInfo(str: any): any {
    if( typeof str === 'string') {
      return 'name' + str;
    }else {
      return 'age' + str
    }
  }

  getInfo("张三")
  getInfo(20)
```

## 类

- es5 类知识点
  - 原型链
    - 原型链上的属性会被多个实例共享， 构造函数不会
    - 可以继承构造函数、原型链 里面的属性和方法
  - 对象冒充
    - 对象冒充可以继承构造函数里面的属性和方法 但是没法继承原型链上面的属性和方法

  ```js
    function Person(name) {
      this.name = name;
      run() {
        alert(this.name, "构造函数里面的方法")
      }
    }
    Person.prototype.work = function () {
        alert("原型链里面的方法")
    }

    function Web() {
      Person.call(this) /* 对象冒充实现继承 */
    }

    const w = Web();

    w.run() // true
    w.work() // false

    Web.prototype = new Person(); /* 原型链继承 */
    w.work() // true

    function Web1(name) {
      Person.call(this, name) /* 对象冒充 + 原型链继承 */
    }
    Web1.prototype = new Person(); /* 原型链继承 */
    const w1 = Web1();
    w1.run() // true
    w1.work() // true
  ```

- ts类的定义

```ts
  class Person {
    public name: string // 属性 省略public非关键字

    constructor(n: string) { // 构造函数 实例化的时候触发
      this.name = n
    }

    getName(): string {
      return this.name
    }

    setName(name: string): void {
      this.name = name
    }
  }
```

- ts中实现继承
  - extends、super

```ts
  class Person {
    public name: string // 属性 省略public非关键字

    constructor(n: string) { // 构造函数 实例化的时候触发
      this.name = n
    }

    run(): string {
      return `${this.name}在运动`
    }
  }

  // 继承
  class Web extends Person {
      constructor(name: string) {
        super(name); // super调用Person 初始化父类的构造函数
      }

      run() {
        alert(`${this.name}在运动`)
      }

      work() {
        alert(`${this.name}在工作`)
      }
  }

  const w = new Web();
  w.run() // 子类有用自己，没有则调用父类的方法
  w.work() // 调用自己的方法
```

- 类里的修饰符
  - public : 公有 再类里面、子类、类外面 都可以访问 （默认修饰符）
  - protected : 保护类型 在类里面、子类里面可以访问，在类外部没法访问
  - private : 私有 在类里面可以访问，子类、类外面没法访问
  - static : 静态 只能类直接调用， 静态方法无法直接调用类中的属性（静态方法只能调用静态属性）

- 类 多态

```ts
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  eat() {
    console.log("吃的方法")
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name)
  }

  eat() {
    return this.name + "吃肉"
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name)
  }

  eat() {
    return this.name + "吃鱼"
  }
}

```

- 类 抽象
  - typescript中的抽象类，它是提供其他类继承的基类，不能直接被实例化
  - 用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
  - abstract抽象方法只能放在抽象类里面

```ts
  // （抽象类）基类 不能被直接实例化
  abstract class Animal {
    public name: string
    constructor(name: string) {
      this.name = name
    }

    abstract eat() : any
  }

  class Dog extends Animal {

    constructor(name: string) {
      super(name)
    }

    // 实现抽象类里面的抽象方法
    eat() {
      console.log(this.name + "吃粮食")
    }
  }

  class Cat extends Animal {

    constructor(name: string) {
      super(name)
    }

    // 实现抽象类里面的抽象方法
    eat() {
      console.log(this.name + "吃鱼")
    }
  }
```

## 接口

接口是一种规范的定义，它定义了行为和动作的规范

- 属性类接口
- 函数类型接口
- 可索引接口
- 类类型接口
- 接口扩展

1. 属性类接口
对 json 的约束

  ```ts

    // 接口定义 注意以 ; 结束
    interface FullName {
      firstName: string;
      secondName?: string; // ? 接口的 可选属性
    }

    function printName(name: FullName) {
      console.log(name.firstName + '--' + name.secondName)
    }

    const obj = {
      firstName: "张",
      secondName: "三"
    }

    printName(obj)
  ```

2. 函数类型接口

  ```ts
    // 加密的函数类型接口
    interface encrypt {
      (key: string, value: string): string;
    }

    const md5: encrypt = (key: string, value: string): string => {
      return key + value
    }

    md5("name", "zhangsan")
  ```

3. 可索引接口
  不常用

  ```ts
    // 对数组的约束
    interface UserArr {
      // 索引为number 值为string
      [index: number]: string
    }

    const arr: UserArr = ["123", "1234", "12345"];

    // 对对象的约束
    interface UserObj {
      // 索引为number 值为string
      [index: string]: string
    }

    const arr: UserArr = {name: '张三'};
  ```

4. 类类型接口
对类的约束

```ts
  // 定义接口
  interface Animal {
    name: string;
    eat(str: string) : void
  }

  // 实现接口
  class Dog implements Animal {
    name: string
    constructor(name: string) {
      this.name = name
    }

    eat() {
      console.log(this.name + "吃粮食")
    }
  }
```

5. 接口扩展

- 接口继承

```ts
  interface Animal {
    eat(): void;
  }

  interface Person extends Animal {
    work(): void;
  }

  class Programmer {
    public name : string
    constructor(name : string) {
      this.name = name
    }

    coding(code : string) {
      console.log(this.name + code)
    }
  }

  class Web extends Programmer implements Person {
    // public name : string
    constructor(name : string) {
      // this.name = name
      super(name)
    }

    eat() {
      console.log(this.name + "喜欢吃馒头")
    }

    work() {
      console.log(this.name + "写代码")
    }
  }
```

## 泛型

泛型还就是解决 类 接口 方法的复用性、以及对不特定数据类型的支持

```ts
  // T 表示泛型，具体什么类型是调用这个方法的时候决定的
  function getData<T>(value: T) : T {
    return value;
  }

  getData<number>(123)
```

- 泛型类

```ts
  // 接收 数字 与 字符串 类型
  class MinClass<T>{
    public list : T [] = [];

    add(num : T) : void {
      this.list.push(num)
    }

    // 查询最小的值
    min() : T {
      const minNum = this.list[0];
      for(var i = 0; i < this.list.length; i++) {
        if (minNum > this.list[i]) {
          minNum = this.list[i]
        }
      }
      return minNum;
    }
  }

  const m1 = new MinClass<number>(); /* 实例化类，并且指定了类的T代表的类型是number */
  const m2 = new MinClass<string>(); /* 实例化类，并且指定了类的T代表的类型是string */
```

- 泛型接口

```ts
  // 方式1
  interface Configfn{
    <T>(value : T) : T;
  }

  const setData : Configfn = <T>(value : T) : T => {
    return value;
  }

  setData<string>("name");

  // 方式2
  interface Configfn2<T>{
    (value : T) : T;
  }

  const setData2 : Configfn2<string> = <T>(value : T) : T => {
    return value;
  }

  setData2("name");
```

- 参数类型

```ts
  // 定义类类型
  interface userParams {
    username: string | undefined,
    password: string | undefined,
    code?: number | undefined;
  }

  class User {
    // 定义类属性
    username: string | undefined;
    password: string | undefined;
    code?: number | undefined;

    constructor(params : userParams) {
      this.username = params.username;
      this.password = params.password;
      this.code = params.code;
    }
  }

  class MysqlDb<T> {
    add(user : T) : void {
      console.log(user)
    }
  }

  const userObj = {
    username: "张三",
    password: '123456',
    code: 200
  }
  const user = new User(userObj);

  const sql = new MysqlDb<User>();

  sql.add(user);
```

- 泛型类继承泛型接口

```ts
  interface DB<T> {
    add(info : T) : boolean;
    update(info : T, id : number) : boolean;
    delete(id : number) : boolean;
    get(id : number) : any[];
  }

  class MysqlDb<T> implements DB<T> {
    add(info: T): boolean {
      console.log(info);
      return true;
      // throw new Error("Method not implemented.");
    }
    update(info: T, id: number): boolean {
      throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
      throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
      throw new Error("Method not implemented.");
    }
  }

  class User {
    // 定义类属性
    username: string | undefined;
    password: string | undefined;
    code?: number | undefined;
  }

  const mysql = new MysqlDb<User>();

  const userObj = {
    username: "张三",
    password: '123456',
    code: 200
  }

  mysql.add(userObj)
```

## 命名空间

组织代码，避免命名冲突

```ts
// modules 模块
export namespace A {
  interface Animal {
    name: string;
    eat() : void;
  }

  export class Dog implements Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    eat() : void {
      console.log(`A${this.name}吃狗粮`)
    }
  }
}

export namespace B {
  interface Animal {
    name: string;
    eat() : void;
  }

  export class Dog implements Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    eat() : void {
      console.log(`B${this.name}吃狗粮`)
    }
  }
}

// 引入命名空间模块
const {A, B} = require('./modules')

const aDog = new A.Dog("哮天犬");
const bDog = new B.Dog("哮天犬");

aDog.eat();
bDog.eat();
```

## 装饰器

装饰器就是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为
装饰器在类声明之前被声明（紧靠着类声明）。类装饰器应用于类构造函数，可以用来监视，修改或者替换类定义。传入一个参数

- 无参装饰（普通装饰器）

```ts
  // 装饰器
  function logClass(params: any) {
    // params 就是当前类
    params.prototype.apiUrl = "xxx";
    params.prototype.run = () => {
      console.log("我是run方法")
    }
  }

  @logClass
  class HttpClient {
    constructor() {

    }

    getData() {}
  }

  const http : any = new HttpClient();

  console.log(http)
  http.run()
```

- 有参装饰（装饰器工厂）

```ts
  // 装饰器
  function logClass(params : string) {
    // params 就是形参
    // target 就是当前类
    return function (target : any) {
      console.log(params)
      console.log(target)

      target.prototype.apiUrl = params;
    }
  }

  @logClass("hello")
  class HttpClient {
    constructor() {

    }

    getData() {}
  }

  const http : any = new HttpClient();

  console.log(http)
```

- 类装饰器
类装饰器表达式会在运行时当做函数被调用，类的构造函数作为其唯一的参数。
如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。

```ts
  // 类装饰器 实现重载
  function logClass(params : any) {
    // params 当前类
    return class extends params {
      apiUrl : any = "我是被装饰器修改后的数据";

      getData() {
        this.apiUrl = this.apiUrl + "---"
        console.log(this.apiUrl)
      }
    }
  }

  @logClass
  class HttpClient {
    public apiUrl : string | undefined;
    constructor() {
      this.apiUrl = "我是构造函数里面的apiUrl"
    }
    getData() {
      console.log(this.apiUrl)
    }
  }
  const http : any = new HttpClient();
  console.log(http)
  http.getData()
```

- 属性装饰器
属性装饰器表达式会在运行时当做函数被调用传入下列2个参数：
  1、 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
  2、 成员的名字。

```ts
  // 类装饰器
  function logClass(params : any) {
    // params 就是形参
    // target 就是当前类
    return function (target : any) {
      // console.log(params)
      // console.log(target)
      target.prototype.apiUrl = params;
    }
  }

  // 属性装饰器
  function logProperty(params : any) {
      // params 获取的参数值
      return function(target : any, attr : any) {
          // target 类的原型对象
          // attr 所装饰的属性
          console.log(target)
          console.log(attr)
          target[attr] = params;
      }
  }

  @logClass("xxx")
  class HttpClient {

    @logProperty("http://xxx")
    public url : string | undefined;
    constructor() {
      
    }
    getData() {
      console.log(this.url);
    }
  }
  const http : any = new HttpClient();
  http.getData()
```

- 方法装饰器
应用到方法的属性描述符上，可以用来监视，修改或者替换方法定义。
方法装饰会在运行时传入下列3个参数：
  1、 对于静态成员来说的构造函数，对于实例成员是类的原型对象
  2、 成员的名字
  3、 成员的属性描述符

```ts
  function get(params : any) {
    return function(target : any, methodName : any, desc : any) {
      /**
       *  target 对于静态成员来说的构造函数，对于实例成员是类的原型对象
       *  methodName 成员的名字
       *  desc 成员的属性描述符
      */
      console.log(target)
      console.log(methodName)
      console.log(desc)

      target.apiUrl = "xxx.com";
      target.run = () => {
        console.log("run");
      }

      // 替换 getData 方法
      console.log(desc.value)
      // 保存当前的方法
      const oMethod = desc.value;

      // 接收参数 将参数变成字符串类型
      desc.value = function(...args : any[]) {
        args = args.map(value => (String(value)))

        console.log(args);
        // 使用对象冒充实现 修改 getData 方法
        oMethod.apply(this, args)
      }
    }
  }

  class HttpClient {
    public url : string | undefined;
    constructor() {
      
    }

    @get("http://xxx.com")
    getData() {
      console.log("我是getdata里面的方法");
    }
  }

  const http : any = new HttpClient();
  console.log(http.apiUrl);
  http.run()
  http.getData(111, "222")
```

- 方法参数装饰器
用到的不多

参数装饰器表达式会在运行时当做函数被调用，可以使用参数装饰器为类的原型增加一些元素数据，传入下列3个参数；
  1、 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
  2、 参数的名字
  3、 参数在函数参数列表中的索引。

```ts
  function logParams(params : any) {
    return function(target : any, paramsName : any, paramsIndex : any) {
      console.log(params);
      console.log(target);
      console.log(paramsName);
      console.log(paramsIndex);

      target.apiUrl = "xxx";
    }
  }

  class HttpClient {
    public url : string | undefined;
    constructor() {
      
    }

    getData(@logParams("uuid") uuid : any) {
      console.log(uuid);
    }
  }

  const http : any = new HttpClient();
  http.getData(123456);
  console.log(http.apiUrl);
```
