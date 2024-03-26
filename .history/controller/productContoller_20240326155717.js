exports.addProduct = async (req, res, next) => {
    const newProduct = await P.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        product: newProduct,
      },
    });
    next();
  };