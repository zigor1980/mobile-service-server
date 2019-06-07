var express = require('express');
var router = express.Router();
const modelControler = require('../controllers/model');

/* GET users listing. */
router.get('/', modelControler.getModels);
router.post('/', modelControler.createModel);
router.get('/:id',modelControler.getModel);
router.post('/:id', modelControler.updateModel);
router.delete('/:id', modelControler.removeModel);

module.exports = router;
