const express = require('express');
const weatherCtrl = require('../../controllers/widgets/weather');
const auth = require('../../middleware/auth');

const router = express.Router();

router.get('/', auth, weatherCtrl.getWidgets);
router.get('/:id', auth, weatherCtrl.getWidget);
router.post('/', auth, weatherCtrl.createWidget);
router.put('/:id', auth, weatherCtrl.modifyWidget);
router.delete('/:id', auth, weatherCtrl.deleteWidget);

module.exports = router;
