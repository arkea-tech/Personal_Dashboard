const express = require('express');
const calendarCtrl = require('../../controllers/widgets/calendar');
const auth = require('../../middleware/auth');

const router = express.Router();

router.get('/', auth, calendarCtrl.getWidgets);
router.get('/:id', auth, calendarCtrl.getWidget);
router.post('/', auth, calendarCtrl.createWidget);
router.put('/:id', auth, calendarCtrl.modifyWidget);
router.delete('/:id', auth, calendarCtrl.deleteWidget);

module.exports = router;
