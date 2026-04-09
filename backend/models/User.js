const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }, // obligatorio y único
  password: { type: String, required: true }             // obligatorio
});

// El tercer parámetro indica la colección que se usará en Atlas
module.exports = mongoose.model('User', UserSchema, 'users');