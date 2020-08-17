![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d12e97dbb5244a25b22975b5cf61e1a8~tplv-k3u1fbpfcp-zoom-1.image)
感觉越来越难了呢，但是还是得继续学习，看看还有那些需要让我们记住的吧
#### TS中类与类的修饰符

+ public （公有的 在类里面、子类、类外面都可以访问）
+ protected （保护类型 在类里面、子类里面可以访问，类外部没法访问）
+ private （私有的 在类里面可以访问， 子类、外部都没法访问）
+ readonly （只读属性，不可修改）

> 不加修饰符默认 public

#### 枚举

```typescript
// enum Direction {
//     Up = 10,
//     Down,
//     Left,
//     Right
// }
// console.log(Direction.Up)
// console.log(Direction[0])

// enum Direction {
//     //可以赋值
//     Up = 'UP',
//     Down = 'DOWN',
//     Left = 'LEFT',
//     Right = 'RIGHT'
// }v

//常量枚举
const enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}
```

1.成员不初始化的话,默认是从0开始自增  

2.数字型的枚举可以映射,字符串类型的枚举是不可以映射的

3.第一个成员初始化赋值为10的话,后面的成员从10开始增长

4.如果第n个成员初始化赋值为string类型,则n后面的成员要给初始值

5.常量枚举成员在编译阶段会被计算出结果,计算类枚举成员的值会被保留,只有到运行时才会被计算

#### Interface 接口

可以用来约束一个函数，对象，以及类的结构和类型

+ 对对象的形状（shape）进行描述
+ 对类（class）进行抽象
+ Duck Typing

**1.对象类型的接口**

```typescript
interface Person {
    readonly id: number; //只读属性，只能在创建时赋值
    name: string;
    age: number;
    sex?: string;// ? 可选属性
}
let user: Person = {
    id: 0,
    name: 'dayTimeAffect',
    age: 0,
    // sex: '男'
}
```

**2.函数类型的接口**

```typescript
interface Fn {
    (a: number, b: number): number;
}

let add: Fn = function(a: number, b: number): number {
    return a + b
}
```



**3.类类型的接口**

```typescript
interface Radio {
    switchRadio(triggerL: boolean): void
}
interface Battery {
    checkBatteryStatus(): number
}
interface RadioWithBattery extends Radio {
    //接口也能继承
    checkBatteryStatus(): number
}
class Car implements Radio {
    switchRadio(){
        //xxx
    }
    //不影响其他方法
    otherInfo(){
        //xxx
    }
}
class Cell implements Radio, Battery {
    switchRadio(){
        //xxx
    }
    checkBatteryStatus(){
        return 0
    }
}
class Xxx implements RadioWithBattery{
    switchRadio(){
        //xxx
    }
    checkBatteryStatus(){
        return 0
    }
}
```
