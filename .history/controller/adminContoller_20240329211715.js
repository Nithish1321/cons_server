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

  if(password===admin[0].password){
    res.json({
      
    })
  }
  // bcrypt.compare(password, admin.password, (err, result) => {
  //   if (err || !result) {
  //     return res.status(401).json({ message: "Invalid credentials" });
  //   }

  //   res.json({ message: "Login successful" });
  // });
};

