const express = require('express');
const gameController = require('../controllers/game');
const router = express.Router();

router.get('/game', gameController.init);
router.post('/game/success', gameController.success);
router.post('/game/failure', gameController.failure);

module.exports = router;
