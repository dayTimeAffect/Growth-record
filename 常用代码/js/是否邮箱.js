const isEmail = (s) => {
    return /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/.test(s)
}
console.log(isEmail('771238216@qq.com'));
console.log(isEmail('www.771238216@55656kk.com'));