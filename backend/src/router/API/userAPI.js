const express = require('express');
const router = express.Router();
const userAPIController = require('../../controllers/API/userAPIController')

const upload = require('../../middlewares/multerUsers')
const registerValidation = require('../../middlewares/userRegisterValidation')

router.get('/', userAPIController.index)
router.post('/register', upload.single('image'), registerValidation, userAPIController.register)

module.exports = router;