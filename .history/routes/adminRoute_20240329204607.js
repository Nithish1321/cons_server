const express = require('express');
const router = express.Router();
const adminLoginContoller = require('../controller/adminLoginContoller');
router.route('/login').post(adminLoginContoller.adminLogin);
module.exports = router;