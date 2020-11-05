const { Router } = require('express');
const router = Router();
const authController = require('../controllers/auth');


router.post('/signin', async (req, res) => {
    let sign = "";
    try {
        sign = await authController.signin(req.body);
    } catch (error) {
        res.json({ "rc": 3, "msg": "Database error connection" })
    }

    res.json({ sign });
});

router.post('/login', async (req, res) => {
    try {
        const token = await authController.login(req.body.username, req.body.password);

    } catch (error) {
        res.json({ "rc": 3, "msg": "Database error connection" })
    }
    res.json({ token });
});


module.exports = router;