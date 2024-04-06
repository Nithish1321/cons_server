const mongoose = require('mongoose');
 const adminScheme = new mongoose.Schema({
    email:String,
    password:String
 })

const Admin = mongoose.model("Admin",adminScheme);
module