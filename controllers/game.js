let gameModel = require('../models/gameData')

exports.init = (req,res,next) => {
    let row = gameModel.getCurrRow();
    let col = gameModel.getCurrCol();
    let goal_count = gameModel.getCurrGoal();
    let board_arr = gameModel.getBoard(row,col,goal_count)
    res.render('game' ,{
        gameCSS: true,
        rotateClock: Math.floor(Math.random()*2),
        board: board_arr
    });
};
