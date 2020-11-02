const { Router } = require('express');
const router = Router();
const coinsController = require('../controllers/coins');
const { tokenvalidation } = require('../controllers/auth');

router.get('/list',tokenvalidation, async (req, res) => {
    const lista = await coinsController.coinList();
    res.send(lista);
});

router.get('/top',tokenvalidation, (req, res) => {
    const top = coinsController.coinTop();
    res.send(top);
});



module.exports = router;