const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  invoiceDate: {
    type: String,
    required: true,
  },
  invoiceNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  invoiceAmount: {
    type: Number,
    required: true,
  },
});

const InvoiceModel = mongoose.model("Invoice", invoiceSchema);

module.exports = { InvoiceModel };
