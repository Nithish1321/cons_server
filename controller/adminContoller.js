const Admin = require("../modals/adminModal");
const User = require("../modals/userModal");
const Product = require("../modals/productModal");
const Order = require("../modals/orderModal");

exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  const admin = await Admin.find();
  console.log(email);
  if (email !== admin[0].email) {
    return res.status(404).json({ login: false, message: "User not found" });
  }
  if (password !== admin[0].password) {
    return res
      .status(401)
      .json({ login: false, message: "Invalid username or password" });
  }

  res.json({ login: true, message: "Login successful" });
};

exports.calculateStatistics = async (req, res) => {
  try {
    // Count the total number of users
    const totalUsers = await User.countDocuments();

    // Count the total number of products
    const totalProducts = await Product.countDocuments();

    // Count the total number of orders
    const totalOrders = await Order.countDocuments();
    const orders = await Order.find({}, { billAmount: 1 }); // Fetch only billAmount field
    const totalRevenue = orders.reduce(
      (acc, order) => acc + order.billAmount,
      0
    );

    res.status(200).json({
      status: "success",
      statistics: {
        totalUsers: totalUsers,
        totalProducts: totalProducts,
        totalOrders: totalOrders,
        totalRevenue: totalRevenue,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllOrder = async (req, res) => {
  const orders = await Order.find().populate("user");

  res.status(200).json({
    status: "success",
    orders,
  });
};

exports.getAllUser = async (req, res) => {
  const usersWithOrders = await User.find().populate("orders");
  res.status(200).json({
    status: "success",
    user: usersWithOrders,
  });
};

exports.changeStatus = async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  try {
    // Find the order by ID
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Update the status
    order.status = status;
    await order.save();

    return res
      .status(200)
      .json({ message: "Order status updated successfully", order });
  } catch (error) {
    console.error("Error updating order status:", error);
    return res.status(500).json({ message: "Failed to update order status" });
  }
};
