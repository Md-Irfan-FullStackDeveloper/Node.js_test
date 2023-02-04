const { Ruoter, Router } = require("express");
const {
  getAllInvoice,
  addInvoice,
  getInvoiceByNumber,
  updateInvoice,
  deleteInvoice,
} = require("../controllers/invoiceController");
const { dateValidator } = require("../middleware/dateValidator");

const invoiceRouter = Router();

invoiceRouter.get("/", getAllInvoice);
invoiceRouter.post("/addInvoice", dateValidator, addInvoice);
invoiceRouter.get("/:invoiceNumber", getInvoiceByNumber);
invoiceRouter.put("/:invoiceNumber", updateInvoice);
invoiceRouter.delete("/:invoiceNumber", deleteInvoice);

module.exports = { invoiceRouter };
