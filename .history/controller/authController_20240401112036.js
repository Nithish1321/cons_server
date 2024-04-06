exports.signup = async (req, res, next) => {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      phone:req.body.p
      password: req.body.password,
      
    });
  
    
  };
  