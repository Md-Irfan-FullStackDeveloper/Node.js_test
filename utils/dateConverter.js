

// dateconverter take invoice date and converted it into number format and return
function dateConverter(invoiceDate) {
  let [date, month, year] = invoiceDate?.split(" ");
  let convertedDate = date.split("").slice(0, date.length - 2);
  let convertedMonth = monthConverter(month);
  let convertedInvoiceDate = parseInt(convertedDate + convertedMonth + year);
  return convertedInvoiceDate;
}

// this function will find month number and return the value
function monthConverter(month) {
  const datesObj = {
    january: 1,
    february: 2,
    march: 3,
    april: 4,
    may: 5,
    june: 6,
    july: 7,
    august: 8,
    september: 9,
    october: 10,
    november: 11,
    december: 12,
  };

  return datesObj[month.toLowerCase()];
}

module.exports = {
  dateConverter
};
