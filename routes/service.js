var express = require('express');
var router = express.Router();
const instanceRouter = express.Router();
const serviceController = require('../controllers/service');

instanceRouter.get('/',serviceController.getService)
// instanceRouter.post('/', serviceController.updateService);
// instanceRouter.delete('/', serviceController.deleteService);
/* GET users listing. */
router.get('/', serviceController.getServices);
router.post('/', serviceController.createService);
router.use('/:id', instanceRouter);

module.exports = router;
