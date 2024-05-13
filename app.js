const express = require("express");
const app = express();
const cors = require("cors");
const productRouter = require("./routes/productRoute");
const adminRouter = require("./routes/adminRoute");
const userRouter = require("./routes/userRouter");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["https://deploy-mern-1whq.vercel.app"],
    methods: ["POST", "GET", "PATCH", "DELETE", "PUT"],
    credentials: true,
  })
);
app.use((req, res, next) => {
  next();
});
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "http://localhost:3000",
    "http://localhost:3001"
  );

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
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
