const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/base/:country', function(req, res, next) {
    var country = req.params.country.toUpperCase();

    fetch('https://api.ratesapi.io/api/latest?base=' + country, )
        .then(res => res.json())
        .then(data => res.send(data))
});

module.exports = router;