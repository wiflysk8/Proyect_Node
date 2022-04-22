const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mascotasSchema = new Schema(
  {
    imagen: { type: String, required: true },
    nombre: { type: String, required: true },
    sexo: { type: String, required: true },
    ciudad: { type: String, required: true },
    proceso: { type: String, required: false },

    especie: { type: String, required: true },
    fecha: { type: String, required: true },
    tamano: { type: String, required: true },
    peso: { type: Number, required: true },
    personalidad: { type: String, required: true },
    historia: { type: String, required: true },

    vacunado: { type: String, required: true },
    desparasitado: { type: String, required: true },
    sano: { type: String, required: true },
    esterilizado: { type: String, required: true },
    identificado: { type: String, required: true },
    microchip: { type: String, required: true },

    requisitos: { type: String, required: true },
    tasa: { type: Number, required: true },
    envio: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Mascotas = mongoose.model("Mascota", mascotasSchema);
module.exports = Mascotas;
