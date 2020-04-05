/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let res = ''
    let reg = /\d/
    let firstReg = /\d|-|\+/
    let first = ''
    for (let i = 0;i < str.length; i++) {
        if (str[i] === ' ' && first.length === 0){
            continue;
        }else{
            if (first.length !== 0) {
                if (reg.test(str[i])){
                    res += str[i]
                } else{
                    break;
                }
            }else{
                if(firstReg.test(str[i])){
                    first = str[i]
                }else{
                    break;
                }

            }

        }
    }

    res = Math.max(-1 * Math.pow(2,31),Math.min(Number(first + res ) || 0,Math.pow(2,31) - 1))
    return res
};
console.log(myAtoi(
    '3.12'
));