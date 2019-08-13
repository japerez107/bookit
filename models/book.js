const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googleBook = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  description: String,
  image: { type: Array, required: true },
  link: { type: String, required: true, unique: true }
});

const Book = mongoose.model("Book", googleBook);

module.exports = Book;
