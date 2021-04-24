const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    book : {
        type : String,
        required : true,
        trim : true,
    },

}, {
    timestamps : true,
});

const Books = mongoose.model('Books', bookSchema);

module.export = User;
