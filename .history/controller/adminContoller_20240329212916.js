const Admin = require("../modals/adminModal");
const bcrypt = require("bcryptjs");

exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const a = "nil";
  const b = "nil";
  const admin = await Admin.find();
  console.log(admin[0].password);
  if (!admin[0]) {
    return res.status(404).json({ message: "User not found" });
  }
  bcrypt.compare(a, 1, (err, res) => {
    console.log(res);
  });
  // bcrypt.compare(password, admin[0].password, (err, result) => {
  //   console.log(password,admin[0].password)
  //   console.log(result);
  //   if (err || !result) {
  //     console.log(err);
  //     console.log(result);
  //     return res.status(401).json({ message: "Invalid credentials" });
  //   }

  //   res.json({ message: "Login successful" });
  // });
};
