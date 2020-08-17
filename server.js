const express = require('express')
const app = require('./app');
const cors = require('cors')
const http = require('http');
const path = require('path');



const port = process.env.PORT || 3000;

const server = http.createServer(app);

//enable cors
app.use(cors())

// route to get specific rate 
//app.use('/', require('./routes/getCountry'));
//route for all countries 
//app.use('/', require('./routes/getAllCountries'));
//route to change base to desired currency
//app.use('/', require('./routes/changeBase'));

server.listen(port, () => console.log('server start on port ' + port));