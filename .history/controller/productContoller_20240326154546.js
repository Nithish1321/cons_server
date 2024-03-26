exports.addProduct = async (req, res, next) => {
    const newProduct = await .create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
    next();
  };