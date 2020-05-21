/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0
    let right = s.length - 1
    let isPalindrome = function (s,left,right) {
        while (left < right) {
            if (s[left] === s[right]) {
                left ++
                right --
            }else{
                return false
            }
        }
        return true
    }
    while (left < right) {
        if (s[left] === s[right]) {
            left ++
            right --
        }else{
            return isPalindrome(s,left + 1,right) || isPalindrome(s,left,right - 1)

        }
    }
    return true
};
