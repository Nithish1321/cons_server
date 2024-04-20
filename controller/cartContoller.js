const Cart = require("../modals/reduxModel");

exports.fetchCartData = async (req, res) => {
  try {
    const { userId } = req.params;

    // Fetch cart data from the database
    const cartData = await Cart.findOne({ userId }); // Adjust this based on your cart schema

    // If cart data not found, return an empty object
    if (!cartData) {
      return res.status(200).json({ items: [], totalQuantity: 0 });
    }

    res.status(200).json(cartData);
  } catch (error) {
    console.log(error);
  }
};

exports.sendCartData = async (req, res) => {
  try {
    const { userId } = req.params;
    const { items, totalQuantity } = req.body;
    // Update or create cart data in the database
    await Cart.findOneAndUpdate(
      { userId },
      { userId, items, totalQuantity },
      { upsert: true }
    );

    res.status(200).json({ message: "Cart data updated successfully" });
  } catch (error) {
    console.log(error);
  }
};
