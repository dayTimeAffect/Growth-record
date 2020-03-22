/*
* 有两个容量分别为 x升 和 y升 的水壶以及无限多的水。请判断能否通过使用这两个水壶，从而可以得到恰好 z升 的水？

如果可以，最后请用以上水壶中的一或两个来盛放取得的 z升 水。

你允许：

装满任意一个水壶
清空任意一个水壶
从一个水壶向另外一个水壶倒水，直到装满或者倒空
* */
/*
* 输入: x = 3, y = 5, z = 4
  输出: True

  输入: x = 2, y = 6, z = 5
  输出: False
* */

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
    /*
    * 思路：如果可以，最后请用以上水壶中的一或两个来盛放取得的 z升 水。这句话意思是 x+y >= z
    * 
    *
    * */
    let res = false
    if (z == 0) return true
    if (x == 0 && y == 0) {
        return false
    }
    if (x == 0) {
        z % y == 0 ? res = true : res
        return res
    }
    if (y == 0) {
        z % x == 0 ? res = true : res
        return res
    }
    if (x + y < z) {
        return res
    }
    while (x % y != 0) {
        [x,y] = [y, x % y]
    }
    let gcd = y
    if (z % gcd == 0) {
        return true
    }else{
        return false
    }
};
console.log(canMeasureWater(3, 5, 4));