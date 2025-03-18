const fs = require("fs");
const crypto = require("crypto");
const write = require("../utils/write");

// console.log(__dirname); bulunduğunuz klasörün yolu
// console.log(__filename); bulunduğunuz dosyanın yolu

//! ARABA VERİLERİNİ AL
let cars = JSON.parse
    (
        fs.readFileSync(`${__dirname}/../data/cars.json`, "utf-8")
    );

//! 1) Bütün araçları al
exports.getAllCars = (req, res) => {
    res.status(200).json({
        massage: "Araç verileri alındı.",
        results: cars.length,
        cars,
    });
};

//! yeni araç ekle
exports.createCar = (req, res) => {
    //* Bunu yazdığında body e ulaşırsın 
    // * ama varsayılan olarak body bölümü kapalı geliyor,
    //* bizim bunu açmamız gerek.
    console.log(req.body);

    // id eklenmiş araç verisi
    const newCar = {...req.body, id: crypto.randomUUID()};

    // yeni aracı diziye ekle
    cars.push(newCar);

    //json dosyasını güncelle
    write(cars);

    res.status(201).json({
        message: "Yeni araç oluşturuldu.",
        newCar,
    });
};

//! 3) Bir aracı al
exports.getCar = (req,res) => {
    res.status(200).json({
        message: "Araç bulundu.",
        car: req.car,
    });
};

//! 4) Bir aracı sil
exports.deleteCar = (req, res) => {
    // id si gelen aracı diziden kaldır
    cars = cars.filter((car) => car.id !== req.params.id);

    // json dosyasını güncelle
    write(cars);

    res.status(204),json({
        message: "Araç silindi.",
    });
};
//! 5) Bir aracı güncelleme
exports.updateCar = (req, res) => {
    // isteğin body kısmındaki güncellenecek verileri al
    const updateCar = req.body;

    console.log(req.car);
    console.log(updateCar);

    // Aracın güncel değerlerine sahip yeni bir nesne oluştur
    const updatedCar = { ...req.car, ...updateCar };

    console.log(updatedCar);

    // Güncellenecek elamanın sırasını bul
    const index = cars.findIndex((car) => car.id == updatedCar.id);

    // dizideki eski aracın yerine yeni aracı koy
    cars.splice(index, 1, updatedCar);

    // json dosyasını güncelle
    write(cars);

    res.status(200).json({
        message: "Araç güncellendi."
    });
};