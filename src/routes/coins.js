const { Router } = require('express');
const router = Router();
const coinsController = require('../controllers/coins');
const { tokenvalidation } = require('../controllers/auth');


router.get('/list', tokenvalidation, async (req, res) => {
    const lista = await coinsController.coinList();
    res.send(lista);
});

router.get('/top', tokenvalidation, async (req, res) => {
    const authuserid = req.user[0].id;
    const top = await coinsController.coinTop(authuserid);

    if (top) {
        res.send(top);
    } else {
        res.send({ "rc": 6, "msg": "No coins saved" })
    }

});



module.exports = router;