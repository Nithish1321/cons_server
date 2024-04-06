const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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

    const user = await User.create({
      name,
      email,
      phone,
      password: encryptedPassword,
    });
    const token = jwt.sign(
      { id: user._id, email },
      `${process.env.JWT_SECRET}`,
      {
        expiresIn: "2h",
      }
    );
    user.token = token;
  } catch (err) {}
};
