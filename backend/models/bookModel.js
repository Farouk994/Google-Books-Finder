const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },

}, {
    timestamps : true,
});

const Book = mongoose.model('books', bookSchema);

module.exports = Book;
