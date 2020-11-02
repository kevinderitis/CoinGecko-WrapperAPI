const { Router } = require('express');
const router = Router();
const userController = require('../controllers/users');
const { tokenvalidation } = require('../controllers/auth');


router.post('/addCoin/:id',tokenvalidation, async (req, res) => {
    const authuserid = req.user[0].id;
    const idcoin = req.params.id;
    const result =  await userController.addCoin(idcoin, authuserid)
    res.send(result);
});

module.exports = router;