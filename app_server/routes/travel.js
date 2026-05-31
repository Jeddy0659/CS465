var express = require('express');
var router = express.Router();

const travelController = require('../controllers/travel');

router.get('/', travelController.travelList);

module.exports = router;