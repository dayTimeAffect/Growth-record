const judgeType = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1)
}
console.log(judgeType({}));
console.log(judgeType([]));
console.log(judgeType(0));
console.log(judgeType('0'));
console.log(judgeType(null));
console.log(judgeType(undefined));
console.log(judgeType(new Map()));
console.log(judgeType(new Set()));
console.log(judgeType(Symbol(0)));
console.log(judgeType(/[1]/));
console.log(judgeType(new Error('1')));
console.log(judgeType(new Promise(resolve => resolve)));
console.log(judgeType(new Date()));