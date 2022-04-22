const express = require("express");

const router = express.Router();

const { isAuth } = require("../middlewares/auth.middleware");
const { upload, uploadToCloudinary } = require("../middlewares/file.middleware");

const Mascotas = require("../models/Mascotas");

router.get("/", async (req, res) => {
  try {
    const mascotas = await Mascotas.find({});
    return res.status(200).json(mascotas);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/:nombre", async (req, res) => {
  const { nombre } = req.params;

  try {
    const mascotaByName = await Mascota.find({ nombre });
    return res.status(200).json(mascotaByName);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post("/", [upload.single("image"), uploadToCloudinary], async (req, res, next) => {
  try {
    const newMascota = new Mascotas({
      imagen: req.body.imagen,
      nombre: req.body.nombre,
      sexo: req.body.sexo,
      ciudad: req.body.ciudad,
      proceso: req.body.proceso,

      especie: req.body.especie,
      fecha: req.body.fecha,
      tamano: req.body.tamano,
      peso: req.body.peso,
      personalidad: req.body.personalidad,
      historia: req.body.historia,

      vacunado: req.body.vacunado,
      desparasitado: req.body.desparasitado,
      sano: req.body.sano,
      esterilizado: req.body.esterilizado,
      identificado: req.body.identificado,
      microchip: req.body.microchip,

      requisitos: req.body.requisitos,
      tasa: req.body.tasa,
      envio: req.body.envio,
    });
    const createdMascota = await newMascota.save();
    return res.status(201).json(createdMascota);
  } catch (error) {
    return next(error);
  }
});

//post de relaciones

/* router.post("/create", async (req, res, next) => {
  try {
    const newSpot = new Spot({
      name: req.body.name,
      country: req.body.country,
      city: req.body.city,
      skaters: [],
    });
    const createdSpot = await newSpot.save();
    return res.status(201).json(createdSpot);
  } catch (error) {
    next(error);
  }
});

//Hacemos un put para relacionar los spots con los skaters

router.put("/add-skater", async (req, res, next) => {
  try {
    const { spotId } = req.body;
    const { skaterId } = req.body;
    const updatedSpot = await Spot.findByIdAndUpdate(spotId, { $push: { skaters: skaterId } }, { new: true });
    return res.status(200).json(updatedSpot);
  } catch (error) {
    return next(error);
  }
}); */

module.exports = router;
