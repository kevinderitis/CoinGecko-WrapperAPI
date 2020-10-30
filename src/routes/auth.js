const { Router } = require('express');
const router = Router();
const jwt = require('jsonwebtoken');


router.post('/signin', (req, res) =>{
res.send('signin');
});

router.get('/login', (req, res) => {
    res.send('login');
});


module.exports = router;