const express = require("express");
const app = express();

const productRouter = require("./routes/productRoute");
const adminRouter = require('./routes/adminRoute');
const userRouter = require('./')
app.use(express.json());

app.use((req, res, next) => {
  console.log("reqqq");
  next();
});
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE,PATCH, OPIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/v1/products", productRouter);
app.use("/api/v1/admin",adminRouter);
app.use("api/v1/users",userRouter);
module.exports = app;
