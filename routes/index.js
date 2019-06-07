var express = require('express');
var router = express.Router();
var serviceRoute = require('./service');
var modelRoute = require('./model');
var clientRoute = require('./client');
var tariffRoute = require('./tariff');
var phoneRoute = require('./phone');
var payRoute = require('./pay');

/* GET home page. */
router.use('/service', serviceRoute);
router.use('/model', modelRoute);
router.use('/client', clientRoute);
router.use('/tariff', tariffRoute);
router.use('/phone', phoneRoute);
router.use('/pay', payRoute);

module.exports = router;
