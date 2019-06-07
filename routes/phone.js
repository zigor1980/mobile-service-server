var express = require('express');
var router = express.Router();
const phoneController = require('../controllers/phone');

/* GET users listing. */
router.get('/', phoneController.fetch);
router.post('/', phoneController.create);
router.get('/:id',phoneController.get);
router.post('/:id', phoneController.update);
router.delete('/:id', phoneController.remove);

module.exports = router;
