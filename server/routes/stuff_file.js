const express = require('express');
const stuffFileCtrl = require('../controllers/stuff_file');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config.js');

const router = express.Router();

router.post('/', multer, stuffFileCtrl.createThing);
router.put('/:id', multer, stuffFileCtrl.modifyThing);

module.exports = router;
