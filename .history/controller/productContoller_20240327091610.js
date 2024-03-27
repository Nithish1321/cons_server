const Product = require("../modals/productModal");

exports.addProduct = async (req, res) => {
  const newProduct = await Product.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      product: newProduct,
    },
  });
};

exports.getAllProducts = async (req, res) => {
  const product = await Product.find();
  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
};

exports.deleteProduct = async (req, res) => {
  const 
};
