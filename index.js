const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const { invoiceRouter } = require("./routes/invoice.route");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to invoice api");
});

app.use("/api/invoice", invoiceRouter);

// connecting to mongoDb database
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => app.listen(process.env.PORT))
  .then(() => console.log("Connected to db successfull"))
  .catch((err) => console.log(err.message));
