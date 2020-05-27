const express = require('express');
const oauth2Ctrl = require('../controllers/oauth2.js');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', oauth2Ctrl.getPermission);
// router.get('/:id', auth, youtubeCtrl.getWidget);
// router.post('/', auth, youtubeCtrl.createWidget);
// router.put('/:id', auth, youtubeCtrl.modifyWidget);
// router.delete('/:id', auth, youtubeCtrl.deleteWidget);

module.exports = router;
