/*
* JavaScript采用\uxxxx的形式来标识一个字符，其中xxxx标识Unicode码点。
* 但是在ES5以及之前，这种标识方法只限于码点在\u0000~\uFFFF之间的字符。超出这个范围的字符，必须用2个双字节的形式表示。
* ES6解决方法\u{xxxxx}
* */
function encodeUTF8(string) {
    let utf8 = '';
    for (let char of string) {
        if (char.length >= 2) { //char.codePointAt(0) > 0xFFFF
            utf8 += '\\u{' + char.codePointAt(0).toString(16) + '}' //ES6表示方法
            //或者：
            // utf8 += '\\u' + char.charCodeAt(0).toString(16) + '\\u' + char.charCodeAt(1).toString(16)
        }else{
            utf8 += '\\u' + char.codePointAt(0).toString(16)
        }
    }
    return utf8;
}

let a = encodeUTF8('中𠮷国')
console.log(a);
a = eval("'" + a + "'")
console.log(a);