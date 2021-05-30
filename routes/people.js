const express =require('express');
const Router =express.Router();
const mysqlConnection = require('../connection');

// Router.get('/', (req, res)=>{
//     mysqlConnection.query("SELECT * FROM people", (err, rows, fields)=>{
//         if(!err){
//             res.send(rows);
//         }else{
//             console.log(err)
//         }
//     })
// })

// Router.post('/' , (req, res) => {
//     let sql = 'INSERT INTO people SET ?'
//     let post = {
//         id: req.body.id,
//         name : req.body.name,
//         age: req.body.age,
//         gender: req.body.gender
//     }

//     mysqlConnection.query(sql, post, (err, res) => {
//         if(err) throw err;
//         console.log('success');
//         console.log(res);
//     });

// });


module.exports = Router;