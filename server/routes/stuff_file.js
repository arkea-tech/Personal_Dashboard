const express = require('express');
const stuffFileCtrl = require('../controllers/stuff_file');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config.js');

const router = express.Router();

router.get('/', auth, stuffFileCtrl.getAllStuff);
router.post('/', auth, multer, stuffFileCtrl.createThing);
router.get('/:id', auth, stuffFileCtrl.getOneThing);
router.put('/:id', auth, stuffFileCtrl.modifyThing);
router.delete('/:id', auth, stuffFileCtrl.deleteThing);

module.exports = router;
