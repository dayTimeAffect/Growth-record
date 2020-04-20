/*
* 读取描述符特有键值:get与set
* get在读取属性时调用的函数 默认值为undefined
* set在设置属性时调用的函数 默认值为undefined
* */
function test1() {
    let obj = {}
    Object.defineProperty(obj,'name',{
        get() {
            return this._name === undefined ? undefined : this._name
        },
        set(v) {
            console.log('执行其他操作')
            this._name = v + '执行了set'
        }
    })
    console.log(obj);
    console.log(obj.name);
    obj.name = 'dj'
    console.log(obj);
    console.log(obj.name);
}
// test1()
/*
* 数据描述符特有键值：value和writable
* value该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。读取属性的时候就是通过这里开始读 默认值为undefined
* writable表示能否修改属性的值赋值运算符（assignment operator）基于右值（right operand）的值，给左值（left operand）赋值。")改变  默认值为false
* */
function test2() {
    let obj = {}
    Object.defineProperty(obj,'name',{
        value:'dj',
        writable:false,//不可赋值
    })
    console.log('obj对象 ' + obj.name + ' 显示我们填入的值');
    obj.name = 'DJ'
    console.log('obj对象 ' + obj.name + ' 赋值失败了，依旧为dj');
    let obj1 = {}
    Object.defineProperty(obj1,'name',{
        value:'dj',
        writable:true,//可赋值
    })
    console.log('obj1对象 ' + obj1.name);
    obj1.name = 'DJ'
    console.log('obj1对象 ' + obj1.name + ' 赋值成功');
}
// test2()
/*
* 数据描述符和读取描述符 共有键值：configurable和enumerable
* configurable 为 true 时，该属性描述符才能够被改变，表示对象的属性是否可以被删除，以及除writable特性外的其他特性是否可以被修改。默认值为false
* enumerable 为true时，该属性在对象中才是可枚举的(fon in或者Object.keys()、Object.values()、Object.entries()) 默认值为false
* */
function test3() {
    /*let obj = {}
    Object.defineProperty(obj,'name',{
        value:'dj',
        configurable:false,
    })
    console.log('obj对象 ' + obj.name + ' 显示我们填入的值');
    delete obj.name
    console.log('obj对象 ' + obj.name + ' 删除失败')*/

    /*let obj1 = {}
    Object.defineProperty(obj1,'name',{
        value:'dj',
        configurable:true,
    })
    console.log('obj1对象 ' + obj1.name + ' 显示我们填入的值');
    delete obj1.name
    console.log('obj1对象 ' + obj1.name + ' 删除成功')*/
    /*let obj2 = {}
    Object.defineProperty(obj2,'name',{
        value:'dj',
        enumerable:false,
    })
    console.log('obj2对象 ' + obj2.name + ' 显示我们填入的值');
    console.log(Object.keys(obj2),Object.values(obj2),Object.entries(obj2))*/
    /*let obj3 = {}
    Object.defineProperty(obj3,'name',{
        value:'dj',
        enumerable:true,
    })
    console.log('obj3对象 ' + obj3.name + ' 显示我们填入的值');
    console.log(Object.keys(obj3),Object.values(obj3),Object.entries(obj3))*/
}
// test3()
function Expand1() {
    // 拓展1：若configurable未设置未false,同一属性不能被配置两次
    let obj = {}
    Object.defineProperty(obj,'name',{
        value:'dj',
        configurable:false,
    })
    Object.defineProperty(obj,'name',{
        value:'DJ',
    }) //Cannot redefine property: name
}
// Expand1()
function Expand2() {
    // 拓展1：writable为false,属性值不能被修改，但若configurable为true，可以通过重新配置该属性来赋值
    let obj = {}
    Object.defineProperty(obj,'name',{
        value:'dj',
        writable:false,
        configurable:true,
    })
    console.log(obj.name);
    Object.defineProperty(obj,'name',{
        value:'DJ',
    })
    console.log(obj.name);
}
// Expand2()
/*
* 用法注意：
* 1、数据描述符特有键值和读取描述符特有键值不能共存
* 2、通过writable: false 和 configurable: false  可以创建一个不变的常量
* 3、get与set中不能调用本身，不然就会死循环
* */
/*
* 相关拓展
* */
/*
* Object.defineProperties(obj,{name:{...},sex:{...}}) 就是批量的Object.defineProperty
* Object.defineProperty(obj,'name',{val:''}) 与 obj.name = ''  这两种，前者创建了一个不可修改、不可删除、不可枚举的属性，而后者可修改、可删除、可枚举
* 可以通过Object.getOwnPropertyDescriptors(obj) ,返回所指定对象的所有自身属性的描述符，如果没有任何自身属性，则返回空对象。包含了可枚举属性与不可枚举属性
* Object.getOwnPropertyDescriptor(obj,'name') ,该方法返回指定对象上一个自有属性对应的属性描述符。
* Object.getOwnPropertyNames(obj) ,返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。
* Object.getOwnPropertySymbols(obj) ,方法返回一个给定对象自身的所有 Symbol 属性的数组。
* */
/*
* Object.preventExtensions() 方法让一个对象变的不可扩展，也就是永远不能再添加新的属性。一旦将对象变为不可扩展的对象，就再也不能使其可扩展。
* 它仅阻止添加自身的属性。但其对象类型的原型依然可以添加新的属性。
* 但是不可扩展对象的原型是不可变的
* */
/*
* Object.seal()方法封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要原来是可写的就可以改变。
* 意思就是在Object.preventExtensions基础上 将内部所有属性的configurable修改成了false
* */
/*
* Object.freeze()方法冻结一个对象一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，
* 不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。
* 相当于在Object.preventExtensions()的基础上将configurable、writable修改成了false
* */