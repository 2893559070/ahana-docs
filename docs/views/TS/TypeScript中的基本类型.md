# TypeScript中的基本类型

### 安装TypeScript
```js
  npm install -g typescript
```
## 类型声明
- 类型声明
    - 类型声明是TS非常重要的一个特点；
    - 通过类型声明可以指定TS中变量（参数、形参）的类型；
    - 指定类型后，当为变量赋值时，TS编译器会自动检查值是否符合类型声明，符合则赋值，否则报错；
    - 简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值；
    - 语法：
     ```js
      let 变量: 类型;
      let 变量: 类型 = 值;
      function fn(参数: 类型, 参数: 类型): 类型{
          ...
      }
     ```
## 类型
类型 | 例子 | 描述
- | :-: | -:
number | 1, -33, 2.5 | 任意数字
string | 'hi', "hi" | 任意字符串
boolean	 | true、false | 布尔值true或false
字面量 | 其本身 | 限制变量的值就是该字面量的值
any | * | 任意类型
unknown | * | 类型安全的any
void | 空值（undefined） | 没有值（或undefined）
never | 没有值 | 不能是任何值
object | {name:'孙悟空'} | 任意的JS对象
array | [1,2,3] | 元素，TS新增类型，固定长度数组
tuple | [4,5] | 不能是任何值
enum | enum{A, B} | 枚举，TS中新增类型

- number
    ```js
      let decimal: number = 6;
      let hex: number = 0xf00d;
      let binary: number = 0b1010;
      let octal: number = 0o744;
      let big: bigint = 100n;
    ```

- boolean
    ```js
      let isDone: boolean = false;
    ```

- string
    ```js
      let color: string = "blue";
      color = 'red';

      let fullName: string = `Bob Bobbington`;
    ```

- 字面量
    - 也可以使用字面量去指定变量的类型，通过字面量可以确定变量的取值范围
    ```js
      let color: 'red' | 'blue' | 'black';
      let num: 1 | 2 | 3 | 4 | 5;
    ```

- any
    ```js
      let d: any = 4;
      d = 'hello';
      d = true;
    ```

- unknown
    ```js
      let notSure: unknown = 4;
      notSure = 'hello';
    ```

- void
    ```js
      let unusable: void = undefined;
    ```

- never
    ```js
      function error(message: string): never {
        throw new Error(message);
      }
    ```

- object
    ```js
      let obj: object = {};
    ```

- array
    ```js
      let list: number[] = [1, 2, 3];
      let list: Array<number> = [1, 2, 3];
    ```

- tuple
    ```js
      let x: [string, number];
      x = ["hello", 10]; 
    ```

- enum
    ```js
      enum Color {
        Red,
        Green,
        Blue,
      }
      let c: Color = Color.Green;

      enum Color {
        Red = 1,
        Green,
        Blue,
      }
      let c: Color = Color.Green;

      enum Color {
        Red = 1,
        Green = 2,
        Blue = 4,
      }
      let c: Color = Color.Green;
    ```

- 类型断言
    - 有些情况下，变量的类型对于我们来说是很明确，但是TS编译器却并不清楚，此时，可以通过类型断言来告诉编译器变量的类型，断言有两种形式：
        - 第一种
        ```js
          let someValue: unknown = "this is a string";
          let strLength: number = (someValue as string).length;
        ```
        - 第二种
        ```js
          let someValue: unknown = "this is a string";
          let strLength: number = (<string>someValue).length;
        ```