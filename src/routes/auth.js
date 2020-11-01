const { Router } = require('express');
const router = Router();
const authController = require('../controllers/auth');


router.post('/signin', (req, res) => {
    res.send(authController.signin());
});

router.get('/login', (req, res) => {
    res.send(authController.login());
});


module.exports = router;