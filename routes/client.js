var express = require('express');
var router = express.Router();
const clientController = require('../controllers/client');

/* GET users listing. */
router.get('/', clientController.fetch);
router.post('/', clientController.create);
router.get('/:id',clientController.get);
router.post('/:id', clientController.update);
router.delete('/:id', clientController.remove);

module.exports = router;
