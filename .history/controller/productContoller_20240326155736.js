co
exports.addProduct = async (req, res, next) => {
    const newProduct = await Pro.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        product: newProduct,
      },
    });
    next();
  };