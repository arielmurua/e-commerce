const express = require('express');
const router = express.Router();
const mainAPIController = require('../../controllers/API/mainAPIController') 

router.get('/', mainAPIController.index)

module.exports = router;