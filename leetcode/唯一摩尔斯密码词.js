/*
* 国际摩尔斯密码定义一种标准编码方式，将每个字母对应于一个由一系列点和短线组成的字符串， 比如: "a" 对应 ".-", "b" 对应 "-...", "c" 对应 "-.-.", 等等。
* 为了方便，所有26个英文字母对应摩尔斯密码表如下：
* [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
* 给定一个单词列表，每个单词可以写成每个字母对应摩尔斯密码的组合。例如，"cab" 可以写成 "-.-..--..."，(即 "-.-." + "-..." + ".-"字符串的结合)。我们将这样一个连接过程称作单词翻译。
* 返回我们可以获得所有词不同单词翻译的数量。
* */
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    //set数据结构完成最后的去重
    let result = new Set()
    let pas = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    for (let i = 0; i < words.length; i ++) {
        let tem = ''
        for (let j = 0; j < words[i].length; j ++){
            tem += pas[words[i][j].codePointAt(0) - 97]
        }
        result.add(tem)
    }
    return result.size
};
console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));