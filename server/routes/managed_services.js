const express = require('express');
const managedServicesCtrl = require('../controllers/managed_services');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, managedServicesCtrl);

module.exports = router;
