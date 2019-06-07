var express = require('express');
var router = express.Router();
const serviceController = require('../controllers/service');

/* GET users listing. */
router.get('/', serviceController.getServices);
router.post('/', serviceController.createService);
router.get('/:id',serviceController.getService);
router.post('/:id', serviceController.updateService);
router.delete('/:id', serviceController.removeService);

module.exports = router;
