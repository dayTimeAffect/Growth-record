![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e649f333173c4e35aacc514e41f78996~tplv-k3u1fbpfcp-zoom-1.image)
> 泛型就是在编译期间不确定方法的类型(广泛之意思)，在方法调用时，由程序员指定泛型具体指向什么类型

### 泛型

```typescript
function echo<T>(arg: T): T {
    return arg
}
const result = echo(123)
```

上面代码尖括号中的T就定义了一个泛型，这个表示传入的类型要与返回的类型一至

```typescript
function swap<T, U>(tuple: [T, U]): [U, T]{
    return [tuple[1], tuple[0]]
}
```

这同样表示泛型

#### 约束泛型

```typescript
function echoWithArr<T>(arg: T): T {
    console.log(arg.length)  //error  传入的类型不一定包含length属性
    return arg
}
```

当我们传入一个未知的值，因为值是未知的，就不能随意使用属性方法，那么我们就需要定义某些属性方法来约束传入的值

```typescript
interface IWithLength {
    length: number
}
function echoWithLength<T extends IWithLength>(arg: T): T{
    console.log(arg.length)
    return arg
}
const str = echoWithLength('str')
const obj = echoWithLength({length: 0})
const arr = echoWithLength([])
```

#### 泛型类

```typescript
class Queue<T> {
    private data = [];
    push(item: T){
        return this.data.push(item)
    }
    pop(): T{
        return this.data.shift()
    }
}
const queue1 = new Queue<number>()
const queue2 = new Queue<string>()

queue1.push(1)
queue1.pop().toFixed()

queue2.push('string')
queue2.pop().length
```

用泛型来描述了一个类

#### 泛型接口

```typescript
interface KeyPair<T, U> {
    key: T;
    value: U;
}
let kp1: KeyPair<number, string> = {key: 1, value: '1'}
let kp2: KeyPair<string, boolean> = {key: 'is', value: true}
```
### 其他
#### 类型别名

type (可以给一个类型定义一个名字)

```typescript
// 类型别名
type PlusType = (x: number, y: number) => number
type NameResolver = () => string
type name = string | NameResolver

function sum(x: number, y: number): number {
    return x + y
}
const sum2: PlusType = sum

const name2 = 'dayTimeAffect'
const name3 = () => 'dayTimeAffect'
```

#### 类型断言

类型断言用于手动指定一个值的类型。

```typescript
function getLength(input: number | string): number {
    // const str = input as String
    // if (str.length){
    //     return str.length
    // }else{
    //     const number = input as Number
    //     return number.toString.length
    // }

    if((<string>input).length){
        return (<string>input).length
    }else{
        return (<number>input).toString().length
    }
    
}
```
TypeScript的基础学习就到这里，剩下的内容就需要在项目中实际应用啦，生命不止，进步不止。
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/02cae8ea743b480cbb4839fd21415320~tplv-k3u1fbpfcp-zoom-1.image)

