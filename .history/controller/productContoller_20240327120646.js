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
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deleteProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(204).json({
      status: "success",
      message:"Product Deleted"
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};


exports.editProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the modified document rather than the original
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      status: "success",
      data: {
        product: updatedProduct,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};