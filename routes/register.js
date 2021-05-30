const express =require('express');
const Router =express.Router();
const mysqlConnection = require('../connection');

Router.get('/', (req, res)=>{
    mysqlConnection.query("SELECT * FROM login", (err, rows, fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err)
        }
    })
})

Router.post('/' , (req, res) => {

    const username= req.body.username
    const password= req.body.password

    mysqlConnection.query("INSERT INTO login (username, password) VALUES (?,?)", 
    [username , password], 
    (err, result)=>{
        console.log(err);
    });
});




module.exports = Router;