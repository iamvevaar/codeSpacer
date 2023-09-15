const mongoose = require("mongoose");

const {MONGODB_URL} = process.env

exports.connect = () => {
    mongoose.connect(
        MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    ).then(
        console.log("connected to databsed asuucceffuuly")
    ).catch((error) => {
        console.log("failed");
        console.log(error)
    });
}