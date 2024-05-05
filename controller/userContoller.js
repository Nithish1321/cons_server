const User = require("../modals/userModal");

exports.changeUserAddress = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const { address, city, pincode } = req.body;

    // Find user by ID and update address information
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId }, // Query
      { $set: { address, city, pincode } }, // Update fields
      { new: true, omitUndefined: true } // Options: return updated document, omit undefined fields
    );

    if (!updatedUser) {
      return next(new createError("User not found", 404));
    }

    // Omit sensitive information like password before sending response
    const { _id, name, email, phone } = updatedUser;

    res.status(200).json({
      status: "success",
      user: {
        _id,
        name,
        email,
        phone,
        shippingAddress: {
          street: address,
          city,
          pincode,
        },
      },
    });
  } catch (err) {
    next(err);
  }
};

