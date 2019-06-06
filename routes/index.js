var express = require('express');
var router = express.Router();
var serviceRoute = require('./service');

/* GET home page. */
router.use('/service', serviceRoute);

module.exports = router;
