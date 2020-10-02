const express = require('express');
const profileCtrl = require('../controllers/profile');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', profileCtrl.createProfile);
router.get('/:id', auth, profileCtrl.getProfile);
router.put('/:id', auth, profileCtrl.modifyProfile);
router.delete('/:id', auth, profileCtrl.deleteProfile);
//router.put('/:id', )

module.exports = router;
