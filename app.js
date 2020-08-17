const express = require('express')
const app = express();
const path = require('path')



const getAllCountriesRouter = require('./routes/getAllCountries');
const getCountryRouter = require('./routes/getCountry');
const changeBaseRouter = require('./routes/changeBase')



// route to get specific rate // eg localhost:3000/usd
app.use('/', getCountryRouter);
//route for all countries // eg localhost:3000/
app.use('/', getAllCountriesRouter);
// route to change base to desired currency //eg localhost:3000/base/usd
app.use('/', changeBaseRouter);



module.exports = app;