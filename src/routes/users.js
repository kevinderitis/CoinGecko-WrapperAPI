const { Router } = require('express');
const router = Router();

router.post('/addCoin/:id', (req, res) => {
res.send('addcoin');
});

module.exports = router;