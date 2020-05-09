const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rentalSchmea = new Schema({
  carNumber: { type: String, required: true },
  customerName: { type: String, required: true },
  customerPhone: { type: String, required: true },
  dateIssued: { type: Date, required: true },
  dateReturned: { type: Date, required: true },
});

module.exports = mongoose.model("Rental", rentalSchmea);
