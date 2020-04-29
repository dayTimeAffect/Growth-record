let convertNumberToString = function (number,radix) {
    const sixMap = { 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F' }
    let symbol = ''
    if (number < 0){
        symbol = '-'
        number = number * -1
    }
    let result = ''
    let integer = Math.floor(number)
    let fraction = number - integer

    while (integer > 0) {
        let bit = integer % radix
        if (bit < 10) {
            result = bit + result
        } else {
            result = sixMap[bit] + result
        }
        integer = Math.floor(integer / radix)
    }

    if (fraction === 0) {
        return symbol + result
    }
    result = result + '.'
    while (fraction > Number.EPSILON) {
        fraction = fraction * radix
        let bit = Math.floor(fraction)
        if (bit > 9) {
            result = result + sixMap[bit]
        }
        result = result + bit
        fraction = fraction - Math.floor(fraction)
    }
    return symbol + result
}
console.log(convertNumberToString(-100, 2));