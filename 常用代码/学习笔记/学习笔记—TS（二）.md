![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9d79c98292854d6d960ab1b315c7bf02~tplv-k3u1fbpfcp-zoom-1.image)

> 一门语言当然要从类型开始


### JS数据类型

+ 7种原始类型
  + Boolean
  + Null
  + Undefined
  + BigInt
  + String
  + Symbos
+ 引用类型
### 在TS中使用

```typescript
let isDone: boolean = false

let age: number = 123
let binaryNumber: number = 0b1111

let myName: string = 'dayTimeAffect'
let mes: string = `hell0 ${myName}`

let u: undefined = undefined

let n: null = null

age = undefined
age = null

mes = undefined
mes = null
```

可以看到，当正确赋值时，这种ts定义的语法，没有任何作用，就只是单纯增加代码量而已
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/653ff4f0f761421985d674dfb05200a1~tplv-k3u1fbpfcp-zoom-1.image)

```typescript
let isDone: boolean = false
isDone = 1
```
但是如果当赋值不符合定义时，就会提示报错  
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8a19427879cc4574aa3f08af20987a19~tplv-k3u1fbpfcp-zoom-1.image)
  
#### any类型
但是上面这样定义的确很舒服，不过有时候就是不知道哪些神奇的api或者后端会给我们什么样的数据类型，那么有一个神奇的类型就出现了

```typescript
let notSure: any = 1
notSure = true
notSure = 'haha'
```

any类型可以赋值任何类型，也就是相当于没有类型校验，当万物都是any时，也就是没有ts，所以慎用呀

#### 联合类型
既然any慎用，但是的确我们又不是很清楚这个变量到底是什么类型，或者只知道可能是那些类型，那么我们就可以选择使用联合类型

```typescript
let numberOrString: number | string
numberOrString = 1
numberOrString = '1'
```
联合类型可以赋值定义的所有类型，在满足类型校验的同时又保证了一定程度的动态性，可以说是很优美了
#### 数组
除了这些基本类型，我们还有好多好多的类型，比如数组

```typescript
let arrOfNumbers: number[] = [1, 2, 3]
arrOfNumbers.push(4)
// arrOfNumbers.push('5')

let arrOfStrings: string[] = ['1',`2`,"3"]
arrOfStrings.push('4')
// arrOfStrings.push(5)
```

数组将相同类型的数据聚合在一起
#### 元组

```typescript
let user: [string, number] = ['string', 0]
```

1、元组中的数据类型必须和规定的类型顺序对应起来

2、直接赋值不能越界

3、如果需要添加，可以通过 push等数组的操作方法进行操作或者直接越界赋值，被增加的数据 ，数据类型必须是在元组中声明过的数据类型。
#### 函数

```typescript
//函数声明
function add(x: number, y: number, z?: number, m: number = 10, n?: number): number{
    if(typeof z === 'number'){
        return x + y + z
    }else{
        return x + y
    }
}
//函数表达式
const add_new: (x: number, y: number) => number = function add(x: number, y: number): number{
    return x + y
}
```

1、可选参数只能放在后面，ES6的默认赋值相当于可选参数

**还有其他的呢？ 其他的还没看，下篇文章继续学习**  
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/684560c94ac4434292a0bc5d6264b9b1~tplv-k3u1fbpfcp-zoom-1.image)