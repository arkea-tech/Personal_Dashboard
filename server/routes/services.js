const express = require('express');
const servicesCtrl = require('../controllers/services');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, servicesCtrl.getAllServices);
router.get('/user', auth, servicesCtrl.getServices);
router.post('/user', auth, servicesCtrl.createService);
router.delete('/:id', auth, servicesCtrl.deleteService);

module.exports = router;
