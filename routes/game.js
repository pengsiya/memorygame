const express = require('express');
const gameController = require('../controllers/game');
const router = express.Router();

router.get('/game', gameController.init);

module.exports = router;
