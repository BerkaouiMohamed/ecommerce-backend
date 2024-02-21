const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const connectToDb = require("./config/connectDb");
const productRouter = require("./routers/productRouter");
const authRouter = require("./routers/authRouter");
const userRouter = require('./routers/userRouter')
const cors=require('cors')

//app
const app = express();



app.use(cors())
//data base connection
connectToDb();
//pardsing
app.use(express.json());

//product routes
app.use("/api/product", productRouter);
//authentication routes
app.use("/api/auth", authRouter);
//user routes
app.use('/api/user',userRouter)
//handlers
app.all("*", (req, res) => {
  res.json({ status: "error", data: "page not found" });
});

app.use((err, req, res, next) => {
  res.json({ status: "error", data: err });
});
mongoose.connection.once("open", () => {
  app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
  });
});
