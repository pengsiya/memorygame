let currRow = 5;
let currCol = 5;
let currGoal = 5;
function getBoard (row, col, goal_count) {
    const count = row * col
    let random_goals = function (count, goal_count){
        ret_arr = [];
        for (var i = 0; i < goal_count; i++) {
            let rand = Math.floor(Math.random() * count);
            while (ret_arr.includes(rand)) {
                rand = Math.floor(Math.random() * count);
            }
            ret_arr.push(rand);
        }
        return ret_arr;
    };
    let goal_arr = random_goals(count, goal_count);
    let board_arr = new Array(row);
    for (var i = 0; i < row; i++) {
        board_arr[i] = new Array(col);
        for (var j = 0; j < col; j++) {
            if (goal_arr.includes(i * col + j)) {
                board_arr[i][j] = 1;
            } else {
                board_arr[i][j] = 0;
            }
        }
    }
    return board_arr;
}
function getCurrRow() {
    return currRow;
}
function getCurrCol() {
    return currRow;
}
function getCurrGoal() {
    return currRow;
}
module.exports = {
    getBoard,
    getCurrRow,
    getCurrCol,
    getCurrGoal
}