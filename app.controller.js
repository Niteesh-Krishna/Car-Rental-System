const Car = require("../models/car.model");
const Rental = require("../models/rental.model");

exports.car_details = function (req, res) {
  Car.findById(req.params.id, function (err, car) {
    if (err) return err;
    res.send(car);
  });
};

exports.find_car = function (req, res) {
  Car.find({ seatcap: req.body.seatcap, model: req.body.model }, function (
    err,
    car
  ) {
    if (err) return err;
    res.send(car);
  });
};

exports.add_car = function (req, res) {
  let car = new Car({
    carNumber: req.body.carNumber,
    carModel: req.body.carModel,
    numberOfSeats: req.body.numberOfSeats,
    isRented: req.body.isRented,
    dailyRentalRate: req.body.dailyRentalRate,
  });

  car.save(function (err) {
    if (err) {
      return err;
    }
    res.send("New car is added successfully!");
  });
};

exports.rent_car = function (req, res) {
  let rental = new Test({
    carNumber: req.body.carNumber,
    customerName: req.body.customerName,
    customerNumber: req.body.customerNumber,
    dateIssued: req.body.dateIssued,
    dateReturned: req.body.dateReturned,
  });

  rental.save(function (err, rental) {
    if (err) {
      return err;
    } else {
      console.log(rental);
      Car.findByIdAndUpdate(
        req.params.id,
        { isRented: 1 },
        {
          $push: {
            datesBooked: {
              startDate: req.body.dateIssued,
              endDate: req.body.dateReturned,
            },
          },
        },
        function (err) {
          if (err) return err;
          res.send("Car Booked Succesfully");
        }
      );
    }
  });
};

exports.update_car = function (req, res) {
  Car.findById(req.params.id, function (err, car) {
    if (err) return err;
    if (car.isRented === 0) {
      Car.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err) {
        if (err) return err;
        res.send("Car details udpated sucessfully!");
      });
    } else {
      res.send("Car details cannot be updated!");
    }
  });
};

exports.delete_car = function (req, res) {
  Car.findById(req.params.id, function (err, car) {
    if (err) return err;
    if (car.isRented == 0) {
      car.findByIdAndRemove(req.params.id, function (err) {
        if (err) return err;
        else res.send("Car deleted successfully!");
      });
    } else {
      res.send("Car Cannot be deleted");
    }
  });
};
