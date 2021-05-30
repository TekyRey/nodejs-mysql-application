const mysql =require('mysql');
const express=require('express');
const bodyParser = require('body-parser');
const mysqlConnection = require('./connection')
const cors = require('cors')

const PeopleRoutes = require("./routes/people");
const loginRoutes = require("./routes/register");

var app =express();

app.use(bodyParser.json());
//app.use(express.json());
app.use(cors());

app.use("/people", PeopleRoutes);
app.use("/register", loginRoutes);


app.listen(3000);