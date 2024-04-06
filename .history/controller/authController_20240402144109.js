const User = require('../modals/userModal');
exports.signup = async (req, res, next) => {
  try{
    const {name,}
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
  })
}catch(err){

}
};
