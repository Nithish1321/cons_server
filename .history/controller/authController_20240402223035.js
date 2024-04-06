const bycrypt = require("bcryptjs");

const User = require("../modals/userModal");
exports.signup = async (req, res, next) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!(name && email && phone && password)) {
      res.status(400).send("All fields are comulsory");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(401).send("User already exist with this email");
    }

    const encryptedPassword = bycrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      phone,
      password: encryptedPassword,
    });
    res.status(200).json({
      status: "success",
      data: {
        newUser,
      },
    });
  } catch (err) {}
};
