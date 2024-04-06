const Admin = require("../modals/adminModal");
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

a
exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;
  const admin = Admin.find((admin) => admin.email === email);

  if (!admin) {
    return res.status(404).json({ message: "User not found" });
  }

  // Validate password
  bcrypt.compare(password, admin.password, (err, result) => {
    if (err || !result) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful" });
  });
};
