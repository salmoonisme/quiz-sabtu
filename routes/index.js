const express = require('express');
const router = express.Router();
const user = require('./user');

router.get('/home', (req, res) => {
    res.send('test api home');
})
router.use('/', user);


module.exports = router;