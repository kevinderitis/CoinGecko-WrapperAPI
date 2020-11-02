const { Router } = require('express');
const router = Router();
const authController = require('../controllers/auth');


router.post('/signin', async (req, res) => {
    const sign = await authController.signin(req.body);
    res.json({ sign });
});

router.post('/login', async (req, res) => {
    const token = await authController.login(req.body.username, req.body.password);
    res.json({ token });
});


module.exports = router;