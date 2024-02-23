var express = require('express');
var router = express.Router();
var registercontroller = require('../controller/login')

/* GET home page. */
router.post('/insert', registercontroller.insert)
router.post('/login',registercontroller.login);
router.get('/', registercontroller.get_data)

module.exports = router;
