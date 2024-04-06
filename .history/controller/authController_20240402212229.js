const User = require("../modals/userModal");
exports.signup = async (req, res, next) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!(name && email && phone && password)) {
      res.status(400).send("All fields are comulsory");
    }

    const existingUser = await User.findOne({email});
    if(existingUser){
      
    }
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
    });
    res.status(200).json({
      status: "success",
      data: {
        newUser,
      },
    });
  } catch (err) {}
};
