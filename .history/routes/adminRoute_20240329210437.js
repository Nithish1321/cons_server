const express = require('express');
const router = express.Router();
const adminLoginContoller = require('../controller/adminContoller');
router.route('/login')get().post(adminLoginContoller.adminLogin);
module.exports = router;