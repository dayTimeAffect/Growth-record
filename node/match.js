/*
* 使用状态机完成‘abababx’的处理
* */
function match(string) {
    let state = start
    for (let char of string) {
        state = state(char)
    }
    return state === end
}
function start(char) {
    if (char === 'a') {
        return foundB
    }else{
        return start
    }
}
function end(char) {
    return end
}
function foundB(char) {
    if (char === 'b') {
        return foundA_2
    }else{
        return start(char)
    }
}
function foundA_2(char) {
    if (char === 'a') {
        return foundB_2
    }else{
        return start(char)
    }
}
function foundB_2(char) {
    if (char === 'b') {
        return foundA_3
    }else{
        return start(char)
    }
}
function foundA_3(char) {
    if (char === 'a') {
        return foundB_3
    }else{
        return start(char)
    }
}
function foundB_3(char) {
    if (char === 'b') {
        return foundX
    }else{
        return start(char)
    }
}
function foundX(char) {
    if (char === 'x') {
        return end
    }else{
        return foundA_3(char)
    }
}

// console.log(match('abababx')); //true
// console.log(match('ababababx')); //true
// console.log(match('ababababxgt')); //true
// console.log(match('abababab')); //false
// console.log(match('asdadawabababxadsdw')); //true
// console.log(match('ababab x')); //false
// console.log(match('aaabbbbabbabababx')); //true
// console.log(match('aabababx')); //true
// console.log(match('aabaabababx')); //true

