const { Router } = require('express');
const router = Router();
const coinsController = require('../controllers/coins');
const { tokenvalidation } = require('../controllers/auth');
const fetch = require('node-fetch');


router.get('/list', tokenvalidation, async (req, res) => {
    let lista = "";

    try {
        const authuserid = req.user[0].id;
        lista = await coinsController.coinList(authuserid);
    } catch (error) {
        lista = { "rc": 3, "msg": "Database connection error" };
    }

    res.send(lista);
});

router.get('/top', tokenvalidation, async (req, res) => {
    let top = "";
    try {
        let authuserid = req.user[0].id;
        top = await coinsController.coinTop(authuserid);

    } catch (error) {
        res.send({ "rc": 3, "msg": "Database connection error" })
    }
    
    res.send(top);
});




module.exports = router;