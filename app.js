// app.js
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const app_routes = require("./routes/app.route"); // Imports routes for the products
const app = express();
const uri =
  "mongodb+srv://krishna:mohan@cluster0-1upmb.mongodb.net/test?retryWrites=true&w=majority";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected…");
  })
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/cars", app_routes);

let port = 4567;

app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});
