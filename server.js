const express = require("express");

const {
    getAllCars,
    createCar,
    getCar,
    updateCar,
    deleteCar,
} = require("./controllers");
const { logger } = require("./middleware");
const idControl = require("./middleware/idControl");

const carRoutes = require("./routes/carRoutes");

// ! 1) Kurulum:

const app = express();
const PORT = 3000;

// Middleware(arayazılım) >>> backend e isteğin gelmesi ile gönderimesi arasında çalışan yazılım
app.use(logger);

// isteklerin body/header/param bölümlerinin tamamını ekleyen middleware
app.use(express.json());

app.use(carRoutes);

// ! 2) Dinlenecek PORT u oluştur:
app.listen(PORT, () => {
    console.log(`Server ${PORT} portunu dinlemeye başladı.`);
});
