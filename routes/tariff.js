var express = require('express');
var router = express.Router();
const tariffContoller = require('../controllers/tariff');

/* GET users listing. */
router.get('/', tariffContoller.fetch);
router.post('/', tariffContoller.create);
router.get('/:id',tariffContoller.get);
router.post('/:id', tariffContoller.update);
router.delete('/:id', tariffContoller.remove);

module.exports = router;
