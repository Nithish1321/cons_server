const express = require('express');
const router = express.Router();
const adminLoginContoller = require('../controller/adminContoller');
router.route('/login')get(adminLoginContoller.).post(adminLoginContoller.adminLogin);
module.exports = router;