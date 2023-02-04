const { InvoiceModel } = require("../models/Invoice.model");
const { dateConverter } = require("../utils/dateConverter");

const getAllInvoice = async (req, res, next) => {
  let invoices;

  try {
    invoices = await InvoiceModel.find();
  } catch (error) {
    return console.log(error.message);
  }

  if (!invoices) {
    return res.status(404).json({ message: "No invoice found" });
  }

  return res.status(200).json(invoices);
};

const getInvoiceByNumber = async (req, res, next) => {
  let { invoiceNumber } = req.params;
  let invoice;

  try {
    invoice = await InvoiceModel.findOne({ invoiceNumber: invoiceNumber });
  } catch (error) {
    return console.log(error.message);
  }

  if (!invoice) {
    return res
      .status(404)
      .json({ message: "No invoice found with this number" });
  }

  return res.status(200).json(invoice);
};

const addInvoice = async (req, res, next) => {
  const { invoiceDate, invoiceNumber, invoiceAmount } = req.body;

  const newInvoice = new InvoiceModel({
    invoiceDate,
    invoiceNumber,
    invoiceAmount,
  });

  let invoiceSaved;
  try {
    invoiceSaved = await newInvoice.save();
  } catch (error) {
    return console.log(error.message);
  }

  if (!invoiceSaved) {
    return res.status(400).json({ message: "Failed to add" });
  }

  return res.status(200).json({ invoice: newInvoice });
};

const updateInvoice = async (req, res, next) => {
  
  const { invoiceNumber } = req.params;
  const { invoiceAmount } = req.body;

  let invoice;
  try {
    invoice = await InvoiceModel.findOneAndUpdate(
      { invoiceNumber: invoiceNumber },
      {
        invoiceAmount,
      }
    );
  } catch (error) {
    return console.log(error.message);
  }

  if (!invoice) {
    return res.status(400).json({ message: "Invalid invoice number" });
  }

  return res.status(200).json({ message: "invoice updated" });
};

const deleteInvoice = async (req, res, next) => {
  const { invoiceNumber } = req.params;

  let invoice;
  try {
    invoice = await InvoiceModel.findOneAndDelete({ invoiceNumber });
  } catch (error) {
    return console.log(error.message);
  }

  if (!invoice) {
    return res.status(500).json({ message: "Can't able to delete" });
  }

  return res.status(200).json({ message: "Invoice deleted successfull" });
};

module.exports = {
  getAllInvoice,
  getInvoiceByNumber,
  addInvoice,
  updateInvoice,
  deleteInvoice,
};
