const express = require('express');
const router = express.Router();
const path = require('path');

const fetch = require('node-fetch');

router.get('/:country', function(req, res, next) {
    var country = req.params.country.toUpperCase();

    fetch('https://api.ratesapi.io/api/latest?symbols=' + country, )
        .then(response => response.json())
        .then(data => res.send(data))
});

module.exports = router;