const mongoose = require("mongoose");
const Customer = require("./customer.model");

const Schema = mongoose.Schema;

const dateSchema = new Schema({
  stratDate: { type: Date },
  endDate: { type: Date },
});

var MyDate = mongoose.model("MyDate", dateSchema);

const carSchema = new Schema({
  carNumber: { type: Number, required: true, unique: true },
  carModel: { type: String, required: true },
  numberOfSeats: { type: Number, required: true },
  isRented: { type: Number, required: true },
  dailyRentalRate: { type: Number, required: true },
  datesBooked: [MyDate],
});

// Export the model
module.exports = mongoose.model("Car", carSchema);
