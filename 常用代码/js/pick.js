const pick = (target, props) => {
    let result = {}
    props.forEach(v => {
        result[v] = target[v]
    })
    return result
}
