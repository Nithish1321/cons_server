const Admin = require("../modals/adminModal");
const bcrypt = require('bcryptjs');


exports.adminLogin = async (req, res) => {
  const login = await Admin.create(req.body);
  console.log(email,password);
  res.status(201).json({
    status: "success",
    data: {
      email:email,
      password:password
    },
  });
  // const admin = Admin.find((admin) => admin.email === email);

  // if (!admin) {
  //   return res.status(404).json({ message: "User not found" });
  // }
  // bcrypt.compare(password, admin.password, (err, result) => {
  //   if (err || !result) {
  //     return res.status(401).json({ message: "Invalid credentials" });
  //   }

  //   res.json({ message: "Login successful" });
  // });
};
