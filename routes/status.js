const express = require('express');
const router = express.Router();
const statusController = require('../controllers/status');

router.get(statusController.get404, '*');

module.exports = router;
