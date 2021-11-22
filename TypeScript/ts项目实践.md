<!--
 * @Author: guokai05
 * @Date: 2021-11-22 17:38:49
 * @LastEditors: guokai05
 * @LastEditTime: 2021-11-22 17:38:49
-->
## vscode配置了ts校验，如果有js代码不想进行校验可以设置关闭

![Xnip2021-11-21_00-08-35.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/84d70eef9c134da4a74bfe04f723a6be~tplv-k3u1fbpfcp-watermark.image?)

## tsc 是啥
```ts
tsc: TypeScript Compile 编译ts
```
## 如果想自动运行ts
- 监听某个文件tsc xx.ts  （-w: watch 监听）
```
tsc xxx.ts -w 
```
- 监听某个文件夹，进入到文件下
```
tsc5 -w 
```

## 定义类型
### 定义数组

```ts
let abc: string[] = ['haha']
// 组合类型
let abc:(string | number | boolean)[] = [0, 'haha', 123, true]
let abc: Array<string | number | boolean| object> = [0, 'haha', {}, 123, true]
// any类型
let abc：any[] = [0, 'haha', {}, 123, true, class {}, underfined， null]
let abc：Array<any> = [0, 'haha', {}, 123, true, class {}, underfined， null]
```
### 定义对象

```ts
let abc:object = [] 
let abc:object = {}
```

```ts
let abc:{ name:string,age:number } = { name:'juejin',age:18 }
```
### void 定义unll 跟 undefined

```ts
let abc: void = undefined
abc = null
```
```
let abc: null = null
let def: undefined = undefined
```
- 函数中使用 voild就是义unll或者undefined

```ts
const abc = testFn(): voild | string => {
    return xxx
}
const abc = testFn(): null | string => {
    return null
}
```
- 要是什么都不返回请使用never（voild就是义unll或者undefined）

```ts
const abc = testFn(): never => {
    throw new Error('error')
}
```

### any unknown 跟 as 类型断言

```ts
let abc: any = 'juejin'
let d: string = abc // ok 没问题， any可以是任意类型，此时any就可以当string赋值给string类型
```
```ts
let abc: unknown = 'juejin'
let d: string = abc // 报错  abc不知道是什么类型，所以不能赋值给string类型
let d: string = abc as string // ok 没问题，as告诉abc是string, 就可以赋值给string类型
```
### as类型断言, `利用unknown增加一个中间层`定义成另外的类型

```ts
let abc: string = '123'
let d: number = abc as number // 报错 string不可以直接转number
let d: number = abc as unknown as number // OK 没问题  string => unknown => number 这个可以
```
### 定义函数

- 设置默认值

```ts
const abc = testFn(a:number, b:number, c:number = 99) => {
    ...
}
```


## React 组件定义

```ts
import React, {FC} from 'react';

type ListProps = {
    data: string;
};

const RoomList: FC<ListProps> = (props) => {
    return(
        ...
    )
}
```

## 后端返回接口定义
```ts
export interface ObjectAny {
    [key: string]: any;
}

export interface roomListType {
    code: number;
    data: ObjectAny;
    queryId: string;
    status: number;
}

```