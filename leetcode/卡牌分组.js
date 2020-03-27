/*
*
给定一副牌，每张牌上都写着一个整数。

此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

每组都有 X 张牌。
组内所有的牌上都写着相同的整数。
仅当你可选的 X >= 2 时返回 true。
输入：[1,2,3,4,4,3,2,1]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
* */

/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    let deckObj = {}
    let res = false
    /*统计出现的次数*/
    for (let i = 0; i < deck.length; i++) {
        if (deckObj[deck[i]]) {
            deckObj[deck[i]] ++
        }else{
            deckObj[deck[i]] = 1

        }
    }
    let min = deckObj[deck[0]]
    let deckarr = []
    for (let key in deckObj) {
        if (deckObj[key] < 2) {
            return false
        }else{
            deckarr.includes(deckObj[key]) ? '' : deckarr.push(deckObj[key]) // 数组去重
            deckObj[key] < min ? min = deckObj[key] : ''
        }
    }
    /*求公约数*/
    for (let i = 2; i <= min; i++) {
        if (res) {
            break;
        }
        for (let j = 0;j < deckarr.length;j++) {
            // console.log(deckarr[j],i,deckarr[j] % i !== 0);
            if (deckarr[j] % i !== 0) {
                res = false
                break;
            }else{
                res = true
            }
        }
    }

    return res
};
/*var hasGroupsSizeX = function(deck) {
    /!*
    * 优化
    * *!/
    let map = new Map()
    for(let n of deck){
        map.set(n,map.has(n)?map.get(n)+1:1)
    }
    let arr = [...map.values()]
    let res = arr[0]
    return arr.every(i => (res = gcd(res, i)) > 1)

};
let gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))*/

console.log(hasGroupsSizeX(
    [1,1,2,2,2,2]
));