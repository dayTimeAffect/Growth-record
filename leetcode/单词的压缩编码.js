/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    /*
    * 思路：先排序，长的单词在前（因为只可能长的单词包含短的单词）
    * 然后循环匹配索引字符串是否包含该单词+#，如果不包含，加入索引字符串中
    * */
    words.sort((a,b) => (b.length - a.length))
    let resStr = words[0] + '#'
    for (let i = 1;i < words.length;i ++) {
        if (!resStr.includes(words[i] + '#')){
            resStr += words[i] + '#'
        }
    }
    return resStr.length
};
var minimumLengthEncoding = function (words) {
/*
* 题解：set中的值不能重复，
* */
    let hashSet = new Set(words);
    for (let item of hashSet) {
        for (let i = 1; i < item.length; i++) {
            // 切片，看看是否词尾在 hashSet 中，切片从1开始，只看每个单词的词尾
            let target = item.slice(i);
            hashSet.has(target) && hashSet.delete(target);
        }
    }
    let result = 0;
    // 根据 hashSet 中剩余元素计算最终长度
    hashSet.forEach(item => result += item.length + 1)
    return result
};
console.log(minimumLengthEncoding(["time", "me", "bell"]));
