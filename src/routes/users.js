const { Router } = require('express');
const router = Router();
const userController = require('../controllers/users');


router.post('/addCoin/:id', (req, res) => {
    const idcoin = req.params.id;
    console.log(idcoin);
    //obtener id de user de authData
    const iduser = 1;
    res.send(userController.addCoin(idcoin, iduser));
});

module.exports = router;