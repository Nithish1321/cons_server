const Product = require('../modals/productModal');
exports.addProduct = async (req, res, next) => {
    const newProduct = await Prod.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        product: newProduct,
      },
    });
    next();
  };