const { Router } = require('express');
const router = Router();

router.get('/list', (req, res) =>{
res.send('listcoins');
});

router.get('/top', (req, res) => {
res.send('topCoins');
});



module.exports = router;