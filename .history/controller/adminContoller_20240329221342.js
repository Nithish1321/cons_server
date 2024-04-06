const Admin = require("../modals/adminModal");


exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  const admin = await Admin.find();
  console.log(email)
  if (!admin[0]) {
    return res.status(404).json({ login:false,message: "User not found" });
  }

  if (password !== admin[0].password) {
    return res.status(401).json({ login:false,message: "Invalid credentials" });
  }

  res.json({ login: true, message: "Login successful" });
};
