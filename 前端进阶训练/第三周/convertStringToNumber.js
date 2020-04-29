let convertStringToNumber = function (numberStr,radix) {
    let chars = numberStr.split('')
    let index = 0
    let symbol = 1
    if (chars[index] === '-') {
        symbol = -1
        index ++
    } else if (chars[index] === '+') {
        index ++
    }
    let result = 0
    if (radix === 10) {
        while (index < chars.length && chars[index] !== '.' && chars[index] !== 'e' && chars[index] !== 'E') {
            let tem = chars[index].codePointAt(0) - '0'.codePointAt(0)
            if (tem < 0 || tem > 9) return NaN
            result = result * radix
            result += tem
            index ++
        }
        if (index < chars.length) {
            if (chars[index] === '.') {
                index ++
                let fraction = 1
                while (index < chars.length && chars[index] !== 'e' && chars[index] !== 'E') {
                    let tem = chars[index].codePointAt(0) - '0'.codePointAt(0)
                    if (tem < 0 || tem > 9) return NaN
                    fraction = fraction / radix
                    result += tem * fraction
                    index ++
                }
            }
            if (chars[index] === 'e' || chars[index] === 'E') {
                index ++
                let symbol = 1
                let power = 0
                if (chars[index] === '-') {
                    symbol = -1
                    index ++
                }
                while (index < chars.length){
                    let tem = chars[index].codePointAt(0) - '0'.codePointAt(0)
                    if (tem < 0 || tem > 9) return NaN
                    power = power * 10
                    power += tem
                    index ++
                }
                result *= (symbol > 0 ? Math.pow(10,power) : 1 / Math.pow(10,power))
            }
        }
    }
    if (radix === 2) {
        while (index < chars.length) {
            let tem = chars[index].codePointAt(0) - '0'.codePointAt(0)
            if (tem < 0 || tem > 1) return NaN
            result = result * radix
            result += tem
            index ++
        }
    }
    if (radix === 8) {
        while (index < chars.length) {
            let tem = chars[index].codePointAt(0) - '0'.codePointAt(0)
            if (tem < 0 || tem > 8) return NaN
            result = result * radix
            result += tem
            index ++
        }
    }
    if (radix === 16) {
        while (index < chars.length) {
            let code = chars[index].codePointAt(0)
            if ((code >= 48 && code <= 57) || (code >= 65 && code <= 70) || (code >= 97 && code <= 102)){
                let tem
                if (code >= 48 && code <= 57) {
                    tem = code - '0'.codePointAt(0)
                }else if (code >= 65 && code <= 70){
                    tem = code - 'A'.codePointAt(0) + 10
                } else{
                    tem = code - 'a'.codePointAt(0) + 10
                }
                result = result * radix
                result += tem
                index ++
            }else{
                return NaN
            }

        }
    }
    return symbol * result
}
console.log(convertStringToNumber('-FFFAAA', 16));