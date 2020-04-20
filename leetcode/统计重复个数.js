/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function(s1, n1, s2, n2) {
    let s1Arr = s1.split('')
    let s2Arr = s2.split('')
    let res = 0
    let index = 0
    let i = 0
    while ( i < n1){
        for (let j = 0; j < s1Arr.length; j ++){
            if (s1Arr[j] === s2Arr[index]) {
                index ++
            }
            if (index === s2Arr.length) {
                index = 0
                res ++
            }
        }
        i ++
    }
    return Math.floor(res / n2)
};
console.log(getMaxRepetitions(
    'aaa', 3,
    'aa', 1
));
//aaddaaddaadd
//ad