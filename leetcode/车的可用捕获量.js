/*
* 在一个 8 x 8 的棋盘上，有一个白色车（rook）。也可能有空方块，白色的象（bishop）和黑色的卒（pawn）。它们分别以字符 “R”，“.”，“B” 和 “p” 给出。大写字符表示白棋，小写字符表示黑棋。

车按国际象棋中的规则移动：它选择四个基本方向中的一个（北，东，西和南），然后朝那个方向移动，直到它选择停止、到达棋盘的边缘或移动到同一方格来捕获该方格上颜色相反的卒。另外，车不能与其他友方（白色）象进入同一个方格。

返回车能够在一次移动中捕获到的卒的数量。
* */

/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let res = 0
    let m = 0,n = 0
    for (let i = 0; i < 8; i ++) {
        for (let j = 0; j < 8; j ++) {
            if (board[i][j] === 'R') {
                m = i
                n = j

                while (i < 7) {
                    i++
                    if (board[i][j] === 'B'){
                        break;
                    }
                    if (board[i][j] === 'p'){
                        res ++
                        break
                    }
                }
                i = m
                while (i > 0) {
                    i --
                    if (board[i][j] === 'B'){
                        break;
                    }
                    if (board[i][j] === 'p'){
                        res ++
                        break
                    }
                }
                i = m
                while (j > 0) {
                    j --
                    if (board[i][j] === 'B'){
                        break;
                    }
                    if (board[i][j] === 'p'){
                        res ++
                        break
                    }
                }
                j = n
                while (j < 7) {
                    j ++
                    if (board[i][j] === 'B'){
                        break;
                    }
                    if (board[i][j] === 'p'){
                        res ++
                        break
                    }
                }

                break
            }
        }
    }
    return res
};
console.log(numRookCaptures(
    [[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","R",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]));