const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minLength: 6,
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
    name: {
        type: String,
    },
    gender: {
        type: String,
    },
    birthday: {
        type: String,
    },
    photoLink: {
        type: String,
    },
});

module.exports = mongoose.model("user", userSchema);
