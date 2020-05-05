const express = require('express');
const youtubeCtrl = require('../../controllers/widgets/youtube');
const auth = require('../../middleware/auth');

const router = express.Router();

router.get('/', auth, youtubeCtrl.getWidgets);
router.get('/:id', auth, youtubeCtrl.getWidget);
router.post('/', auth, youtubeCtrl.createWidget);
router.put('/:id', auth, youtubeCtrl.modifyWidget);
router.delete('/:id', auth, youtubeCtrl.deleteWidget);

module.exports = router;
