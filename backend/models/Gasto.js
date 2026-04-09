const mongoose = require('mongoose');

const GastoSchema = new mongoose.Schema({
  email: { type: String, required: true }, // para asociar gasto al usuario
  concepto: { type: String, required: true },
  monto: { type: Number, required: true },
  fecha: { type: Date, default: Date.now }
});

// Colección de gastos
module.exports = mongoose.model('Gasto', GastoSchema, 'gastos');