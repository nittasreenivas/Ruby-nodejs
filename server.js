const express = require("express");

const app = express();
require("dotenv/config");
const mongoose = require("mongoose");
const morgan = require("morgan");
app.use(morgan("tiny"));
const cors = require("cors");
app.use(cors());
app.use("*", cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("WELCOME TO RUBY EXPRESS");
});
const productsRouter = require('./routes/product')
app.use('/products',productsRouter)
const PORT_NO = process.env.PORT_NO;
mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log(`Database is connected`);
  })
  .catch((err) => {
    console.log(`Database is not connected ${err}`);
  });
app.listen(`${PORT_NO}`, () => {
  console.log(`server is running on port ${PORT_NO}`);
});
