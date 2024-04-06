const Admin = require("../modals/adminModal");
const bcrypt = require("bcryptjs");

exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  const admin = await Admin.find();
  console.log(admin.email);
  if (!admin) {
    return res.status(404).json({ message: "User not found" });
  }
  bcrypt.compare(password, admin.password, (err, result) => {
    if (err || !result) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful" });
  });
};

exports.getAdmin = async(req,res)=>{
  const { email1, password1 } = req.body;
  console.log(email, password);
  const admin = await Admin.find();
  const {email} = admin;
  console.log(email);
}