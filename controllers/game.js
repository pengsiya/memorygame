let gameModel = require('../models/gameData')

exports.init = (req,res,next) => {
    let row = gameModel.getCurrRow();
    let col = gameModel.getCurrCol();
    let goal_count = gameModel.getCurrGoal();
    let board_arr = gameModel.getBoard(row,col,goal_count)
    res.render('game' ,{
        gameCSS: true,
        rotateClock: Math.floor(Math.random()*2),
        board: board_arr,
        goal_count
    });
};
exports.success = (req,res,next) => {
    gameModel.adjust(true)
    // setTimeout(() => {
    //     res.redirect(301, '/game');
    // }, 2000)
};
exports.failure = (req,res,next) => {
    gameModel.adjust(false)
    // setTimeout(() => {
    //     res.redirect(301, '/game');
    // }, 2000)
};
