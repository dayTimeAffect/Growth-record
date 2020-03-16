/*
* 请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的时间复杂度都是O(1)。

若队列为空，pop_front 和 max_value 需要返回 -1
* */
/*
* 输入:
["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
[[],[1],[2],[],[],[]]
输出: [null,null,null,2,1,2]
* */

/*
1、  “MaxQueue”  生成队列
        []                    传入的值为空
        函数无输出，故输出为null
2、  "push_back"  向队列传入元素
        [1]                  传入的值为1
        此时队列中只有一个1
        函数无输出，故输出为null
3、  "push_back"  向队列传入元素
        [2]                  传入的值为2
        此时队列为    --进-> [2,1] --出->
        输出为null
4、   "max_value" 求队列中的最大值
        []                    传入的值为空
        输出为2
5、   "pop_front"   删除队列头部元素
        []                    传入的值为空
        函数pop_front还要输出删除元素的值，故输出为1
6、   "max_value" 求队列中的最大值
        []                    传入的值为空
         此时队列为[2]，所以最大值输出为2。
* */


var MaxQueue = function() {
    this.queue = []
    this.maxqueue = []
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    if (this.maxqueue[0]) {
        return this.maxqueue[0]
    }else{
        return -1
    }
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.queue.push(value)
    let popValue = this.maxqueue.pop()
    while (popValue){
        if(popValue >= value){
            this.maxqueue.push(popValue)
            break;
        }else{
            popValue = this.maxqueue.pop()
        }
    }
    this.maxqueue.push(value)
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    let shiftVlue = this.queue.shift()
    if (shiftVlue == this.maxqueue[0]) {
        this.maxqueue.shift()
    }
    shiftVlue = shiftVlue || -1
    return shiftVlue
};

var obj = new MaxQueue()
obj.push_back(1)
obj.push_back(5)
obj.push_back(4)
obj.push_back(6)
obj.push_back(2)
obj.push_back(8)
obj.push_back(4)
console.log(obj);
console.log(obj.max_value());
console.log(obj.pop_front());
console.log(obj.pop_front());
console.log(obj);
