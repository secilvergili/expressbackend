const express = require("express");

const {
    getAllCars,
    createCar,
    getCar,
    updateCar,
    deleteCar
} = require ("../controllers");

const idControl = require("../middleware/idControl");

const router = express.Router();

//! route/endpointlerin tanımla yol

router.route("/api/v1/cars").get(getAllCars).post(createCar);

//! isteğin parametresi ile gelen id geçerli mi? kontrol edene middleware
router
    .route("/api/v1/cars/id")
    .get(idControl, getCar)
    .patch(idControl, updateCar)
    .delete(idControl, deleteCar);

    // server.js e router ı tanıtmak için export ettik
    module.exports = router;
    


