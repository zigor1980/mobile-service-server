var express = require('express');
var router = express.Router();
const payController = require('../controllers/pay');

/* GET users listing. */
router.get('/', payController.fetch);
router.post('/', payController.create);
router.get('/:id',payController.get);
router.post('/:id', payController.update);
router.delete('/:id', payController.remove);

module.exports = router;
