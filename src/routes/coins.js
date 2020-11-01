const { Router } = require('express');
const router = Router();
const coinsController = require('../controllers/coins');

router.get('/list', (req, res) => {
    const lista = coinsController.coinList();
    res.send(lista);
});

router.get('/top', (req, res) => {
    const top = coinsController.coinTop();
    res.send(top);
});



module.exports = router;