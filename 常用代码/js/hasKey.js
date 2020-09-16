const hasKey = (target, key, pattern) => {
    if (pattern) {
        return key in target
    }else{
        return target.hasOwnProperty(key)
    }
}