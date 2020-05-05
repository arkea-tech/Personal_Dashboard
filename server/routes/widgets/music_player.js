const express = require('express');
const musicPlayerCtrl = require('../../controllers/widgets/music_player');
const auth = require('../../middleware/auth');

const router = express.Router();

router.get('/', auth, musicPlayerCtrl.getWidgets);
router.get('/:id', auth, musicPlayerCtrl.getWidget);
router.post('/', auth, musicPlayerCtrl.createWidget);
router.put('/:id', auth, musicPlayerCtrl.modifyWidget);
router.delete('/:id', auth, musicPlayerCtrl.deleteWidget);

module.exports = router;
