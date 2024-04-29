const Product = require("../modals/productModal");
// const multer = require("multer");
// const sharp = require("sharp");
// const storage = multer.memoryStorage();
// const createError = require("../utils/appError");
// import { uploadFileToS3 } from "../utils/uploadFiletos3";
// const fileFilter = (req, file, cb) => {
//   if (file.mimetype.split("/")[0] === "image") {
//     cb(null, true);
//   } else {
//     cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false);
//   }
// };

// const upload = multer({
//   storage,
//   fileFilter,
//   limits: { fileSize: 1000000000, files: 5 },
// });

// export const addProduct = async (req, res, next) => {
//   try {
//     upload.single("image")(req, res, async (error) => {
//       const files = req.file;

//       if (error) {
//         return next(error);
//       }
//       if (!req.files || req.files.length === 0) {
//         const noFilesError = new createError("No files were provided", 400);
//         return next(noFilesError);
//       }
//       const buffer = await sharp(file.buffer)
//         .resize({ width: 500, height: 500 })
//         .toBuffer();
//       const { originalName } = file;
//       const imageUrl = await uploadFileToS3(
//         buffer,
//         originalName,
//         `products/${originalName}`
//       );

//       const product = await Product.create({
//         name: req.body.name,
//         description: req.body.description,
//         price: req.body.price,
//         image: imageUrl,
//       });

//       return res.status(201).json({
//         status: "product created successfully",
//         data: product,
//       });
//     });
//   } catch (err) {
//     return next(err);
//   }
// };

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
      message: "Product Deleted",
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
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

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
