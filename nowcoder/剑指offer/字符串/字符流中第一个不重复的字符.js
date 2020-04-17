/*
* 题目描述：请实现一个函数用来找出字符流中第一个只出现一次的字符。例如，当从字符流中只读出前两个字符"go"时，第一个只出现一次的字符是"g"。
* 当从该字符流中读出前六个字符“google"时，第一个只出现一次的字符是"l"。如果当前字符流没有存在出现一次的字符，返回#字符。
* */
/*
* 从题目和所给三个函数可以看出，Init是初始化一个存储空间，Insert是给该存储空间存储字符，FirstAppearingOnce找到该存储空间第一个只出现的字符
* */
function Init() {
    //不使用关键字声明，定义一个全局的对象
    obj = {}
}
//Insert one char from stringstream
function Insert(ch) {
    //使用对象模拟哈希表，快速判断该字符是否重复出现
    if (obj[ch]) {
        obj[ch] ++
    }else{
        obj[ch] = 1
    }
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce() {
    //根据哈希表，返回第一个值为1的key
    for (let key of Object.keys(obj)){
        if (obj[key] === 1){
            return key
        }
    }
    return '#'
}