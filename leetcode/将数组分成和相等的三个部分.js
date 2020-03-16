/**
 * @param {number[]} A
 * @return {boolean}
 */
/*var canThreePartsEqualSum = function(A) {
方法一：速度更快
    if(A.length < 3) return false
    let sum = 0
    for (let i = 0;i < A.length;i++) {
        sum += A[i]
    }
    if (sum % 3 != 0) return false
    let tem = sum / 3;
    let resBoolean = false
    let i = 0,j = 1,k = 1;
    let sumi = A[i],sumj = 0;
    while (i  <= A.length - 3 && j < A.length - 2) {
        if (sumi == tem) {
            j = i + k;
            sumj += A[j]
            if (sumj == tem) {
                resBoolean = true
                break
            }else{
                k ++;
            }
        }else{
            i ++
            sumi += A[i]
        }

    }
    return resBoolean
};*/
var canThreePartsEqualSum = function(A) {
    if(A.length < 3) return false
    let sum = 0
    for (let i = 0;i < A.length;i++) {
        sum += A[i]
    }
    if (sum % 3 != 0) return false
    let tem = sum / 3;
    console.log(tem);
    let resBoolean = false
    let i = 0,j = A.length - 1
    let sumi = A[i],sumj = A[j];
    while (i < j - 1) {
        if (sumi == tem) {
            if (sumj == tem) {
                resBoolean = true
                break
            }
            j --;
            sumj += A[j]

        }else{
            i ++
            sumi += A[i]
        }

    }
    return resBoolean
};
console.log(canThreePartsEqualSum([1,-1,1,-1]));