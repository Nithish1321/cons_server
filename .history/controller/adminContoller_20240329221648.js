const Admin = require("../modals/adminModal");

exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  const admin = await Admin.find();
  console.log(email);
  if () {
    return res.status(404).json({ login: false, message: "User not found" });
  }

  if (password !== admin[0].password) {
    return res
      .status(401)
      .json({ login: false, message: "Invalid username or password" });
  }

  res.json({ login: true, message: "Login successful" });
};
