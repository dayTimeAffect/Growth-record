const arrayMove = (arr, start, end) => {
    if (start >= arr.length || end >= arr.length) return ;
    while (start < 0 || end < 0){
        start = start < 0 ? arr.length + start : start
        end = end < 0 ? arr.length + end : end
    }
    const [moveItem] = arr.splice(start, 1)
    arr.splice(end, 0, moveItem)
    return arr
}
console.log(arrayMove([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 11, -1));