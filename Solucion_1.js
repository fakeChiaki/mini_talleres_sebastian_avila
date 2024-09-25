//Ejercicio 1 Codewars con Javascript.
//Ejercicio de Tic-Tac-Toe Checker
//Link del ejercicio: https://www.codewars.com/kata/525caa5c1bf619d28c000335/javascript


function isSolved(board) {
    function checkLine(a, b, c) {
        return a === b && b === c && a !== 0;
    }

    for (let i = 0; i < 3; i++) {
        if (checkLine(board[i][0], board[i][1], board[i][2])) {
            return board[i][0];
        }
        if (checkLine(board[0][i], board[1][i], board[2][i])) {
            return board[0][i];
        }
    }

    if (checkLine(board[0][0], board[1][1], board[2][2])) {
        return board[0][0];
    }
    if (checkLine(board[0][2], board[1][1], board[2][0])) {
        return board[0][2];
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === 0) {
                return -1;
            }
        }
    }

    return 0;
}
