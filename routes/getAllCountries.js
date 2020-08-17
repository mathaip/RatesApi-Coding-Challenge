const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const path = require('path');


router.get('/', function(req, res, next) {
    const URL = 'https://api.ratesapi.io/api/latest'

    fetch(URL, {
            method: 'GET',
            headers: {
                Accept: 'application/json,text/plain, */*',
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => res.send({ data }))


});

module.exports = router;