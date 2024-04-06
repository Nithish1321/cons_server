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
    user.password = undefined;
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
};

exports.signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send("Enter every details");
    }
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).send("User not found");
    }
    const isPasswordTrue = await bycrypt.compare(password, user.password);
    if (user && isPasswordTrue) {
      const token = jwt.sign(
        { id: user._id, email },
        `${process.env.JWT_SECRET}`,
        {
          expiresIn: "2h",
        }
      );
      user.token = token;
      user.password = undefined;
    }
  } catch (err) {
    console.log(err);
  }
};
