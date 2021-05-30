const mysql =require('mysql');
var mysqlConnection=mysql.createConnection({ 
    host : "localhost",
    user : "root",
    password : "",
    database : "Edureka",
    multipleStatements : true
})

mysqlConnection.connect((err) =>  {
    if(!err){
        console.log("Connected");
    }else{
        console.log("Failed to connect");
    }
})
module.exports=mysqlConnection;