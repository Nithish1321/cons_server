const Product = require('../modals/productModal');
exports.addProduct = async (req, res, next) => {
    console.log('POST')
    const newProduct = await Product.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        product: newProduct,
      },
    });
    next();
  };