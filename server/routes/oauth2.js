const express = require('express');
const oauth2Ctrl = require('../controllers/oauth2.js');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/calendar', oauth2Ctrl.getGoogleCalendarPermission);
router.get('/youtube', oauth2Ctrl.getYoutubePermission);
router.get('/callback', oauth2Ctrl.getCredentials);

router.get('/infos', oauth2Ctrl.getInfos);
router.get('/client', oauth2Ctrl.getClient);
// router.get('/:id', auth, youtubeCtrl.getWidget);
// router.post('/', auth, youtubeCtrl.createWidget);
// router.put('/:id', auth, youtubeCtrl.modifyWidget);
// router.delete('/:id', auth, youtubeCtrl.deleteWidget);

module.exports = router;
