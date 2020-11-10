Function.prototype.mybind = function (context, ...rest) {
    if(typeof this !== 'function'){
        throw new TypeError('被绑定的对象需要是函数')
    }
    const self = this
    const func = function (){
        return self.apply(this instanceof self ? this : context, [...rest, ...arguments])
    }
    func.prototype = Object.create(self.prototype)
    return func
}
