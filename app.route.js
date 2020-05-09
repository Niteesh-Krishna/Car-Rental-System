const express = require("express");
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const app_controller = require("../controllers/app.controller");

router.get("/:id", app_controller.car_details);
router.post("/findcars", app_controller.find_car);
router.post("/add_car", app_controller.add_car);
router.post("/:id/rent_car", app_controller.rent_car);
router.put("/:id/update_car", app_controller.update_car);
router.delete("/:id/delete_car", app_controller.delete_car);

module.exports = router;
