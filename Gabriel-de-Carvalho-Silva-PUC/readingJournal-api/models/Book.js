const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  readAt: { type: Date, required: true },
});

module.exports = mongoose.model('Book', bookSchema);