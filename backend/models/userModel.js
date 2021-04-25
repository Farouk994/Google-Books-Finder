const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    books : [{
        type : Schema.Types.ObjectId,
        ref : 'books'
    }]

}, {
    timestamps : true,
});

const User = mongoose.model('user', userSchema);

module.exports = User;
