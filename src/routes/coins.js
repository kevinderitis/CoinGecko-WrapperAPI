const { Router } = require('express');
const router = Router();
const coinsController = require('../controllers/coins');
const { tokenvalidation } = require('../controllers/auth');

router.get('/list',tokenvalidation, (req, res) => {
    const lista = coinsController.coinList();
    res.send(lista);
});

router.get('/top',tokenvalidation, (req, res) => {
    const top = coinsController.coinTop();
    res.send(top);
});



module.exports = router;