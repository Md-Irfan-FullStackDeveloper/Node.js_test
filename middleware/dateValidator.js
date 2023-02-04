const { InvoiceModel } = require("../models/Invoice.model");
const { dateConverter } = require("../utils/dateConverter");

const dateValidator = async (req, res, next) => {
  const { invoiceDate, invoiceNumber, invoiceAmount } = req.body;
  let invoices;

  try {
    invoices = await InvoiceModel.find();
  } catch (error) {
    return console.log(error.message);
  }

  if (invoices.length <= 1) {
    return next();
  }

  let convertedDate = dateConverter(invoiceDate);

  // finding previous and next invoie documents
  const previousInvoice = await InvoiceModel.findOne({
    invoiceNumber: invoiceNumber - 1,
  });
  const nextInvoice = await InvoiceModel.findOne({
    invoiceNumber: invoiceNumber + 1,
  });

  //converting previousInvoice and nextInvoie date as a number to compare
  let prevConvertedDate;
  let nextConvertedDate;
  if (previousInvoice) {
    prevConvertedDate = dateConverter(previousInvoice.invoiceDate);
  }

  if (nextInvoice) {
    nextConvertedDate = dateConverter(nextInvoice.invoiceDate);
  }

  if (previousInvoice && prevConvertedDate >= convertedDate) {
    return res.status(400).json({
      message: "invoice date is less or equal than its previous invoice date",
    });
  }

  if (nextInvoice && nextConvertedDate <= convertedDate) {
    return res.status(400).json({
      message: "invoice date is greater or equal than its next invoice date",
    });
  }

  next();
};

module.exports = { dateValidator };
