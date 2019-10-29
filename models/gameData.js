let currRow = 4;
let currCol = 4;
let currGoal = 4;
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
    return currCol;
}
function getCurrGoal() {
    return currGoal;
}
function increCurrRow(){
    currRow++;
}
function increCurrCol(){
    currCol++;
}
function increCurrGoal(){
    currGoal++;
}
function decreCurrRow(){
    currRow--;
}
function decreCurrCol(){
    currCol--;
}
function decreCurrGoal(){
    currGoal--;
}
function indexOfSmallest(a) {
    return a.indexOf(Math.min.apply(Math, a));
}
function indexOfLargest(a) {
    return a.indexOf(Math.max.apply(Math, a));
}
function adjust (increment) {
    if (increment) {
        let ind = indexOfSmallest([currRow,currCol,2+currGoal/2])
        switch (ind) {
            case 0:
                currRow++;
                break;
            case 1:
                currCol++;
                break;
            case 2:
                currGoal++;
                break;
        }
    } else {
        let ind = indexOfLargest([2+currGoal/2,currRow,currCol])
        switch (ind) {
            case 0:
                currGoal--;
                break;
            case 1:
                currRow--;
                break;
            case 2:
                currCol--;
                break;
        }
    }
}

module.exports = {
    getBoard,
    getCurrRow,
    getCurrCol,
    getCurrGoal,
    increCurrRow,
    increCurrCol,
    increCurrGoal,
    decreCurrRow,
    decreCurrCol,
    decreCurrGoal,
    adjust
}