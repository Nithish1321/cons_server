const Product = require("../modals/productModal");
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

exports.getAllProducts = async(req,res) => {
    const Product = await Product.find();
    res.status(200).json({
      
    })
}