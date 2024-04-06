const Admin = require("../modals/adminModal");
const bcrypt = require("bcryptjs");

exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  const admin = await Admin.find();
  console.log(admin[0].password);
  if (!admin[0]) {
    return res.status(404).json({ message: "User not found" });
  }
  [
    {
      _id: new ObjectId('6606dd1fc09a0f0539cad588'),
      email: 'dreamlandagencies@gmail.com',
      password: '850885@nithish',
      __v: 0
    }
  ]
  
};

