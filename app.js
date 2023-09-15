require('dotenv').config();
require("./database").connect();
const express = require("express");

const app = express();

app.get("/" , (req , res)=>{
    res.send("<h1>Hello hello heelo</h1>")
})

// connect();

module.exports = app;

