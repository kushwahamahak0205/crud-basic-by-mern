var express = require("express");
var app=express();
const bodyparser = require('body-parser')
const mongoose= require("mongoose");
require('dotenv').config();
const port=process.env.PORT;
var cors = require('cors')
//mongoose.connect("mongodb://127.0.0.1:27017/"+process.env.DATABASE_NAME);
mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DATABASE_NAME}`);
app.use(cors())
var stuRoute=require("./routes/students")
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use("/student", stuRoute);
app.listen(port, ()=>{
    console.log("app run on:  "+port);
})
