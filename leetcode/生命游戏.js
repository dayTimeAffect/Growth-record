/*
* 根据 百度百科 ，生命游戏，简称为生命，是英国数学家约翰·何顿·康威在 1970 年发明的细胞自动机。

给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞都具有一个初始状态：1 即为活细胞（live），或 0 即为死细胞（dead）。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：

如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
根据当前状态，写一个函数来计算面板上所有细胞的下一个（一次更新后的）状态。下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。
* */
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let recodeLive = []
    let recodeDead = []
    for (let i = 0;i < board.length; i ++) {
        for (let j = 0; j < board[0].length ; j ++) {
            let count = 0
            board[i][j + 1] === 1 ? count ++ : ''
            board[i][j - 1] === 1 ? count ++ : ''
            if (board.length - 1 === 0){

            } else if (i === 0) {
                board[i + 1][j] === 1 ? count ++ : ''
                board[i + 1][j - 1] === 1 ? count ++ : ''
                board[i + 1][j + 1] === 1 ? count ++ : ''

            }else if (i === board.length - 1) {
                board[i - 1][j] === 1 ? count ++ : ''
                board[i - 1][j - 1] === 1 ? count ++ : ''
                board[i - 1][j + 1] === 1 ? count ++ : ''
            }else{
                board[i + 1][j] === 1 ? count ++ : ''
                board[i + 1][j - 1] === 1 ? count ++ : ''
                board[i + 1][j + 1] === 1 ? count ++ : ''
                board[i - 1][j] === 1 ? count ++ : ''
                board[i - 1][j - 1] === 1 ? count ++ : ''
                board[i - 1][j + 1] === 1 ? count ++ : ''
            }
            if (board[i][j] === 0) {
                count === 3 ? recodeLive.push([i,j]) : ''
            }else{
                (count === 2 || count === 3) ? '' : recodeDead.push([i,j])
            }
        }
    }
    for (let i = 0;i < recodeLive.length; i ++) {
        board[recodeLive[i][0]][recodeLive[i][1]] = 1
    }
    for (let i = 0;i < recodeDead.length; i ++) {
        board[recodeDead[i][0]][recodeDead[i][1]] = 0
    }
};
console.log(gameOfLife(
    [
        [0]
    ]
));