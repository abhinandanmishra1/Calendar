const mysql = require('mysql');
const express = require('express');
const path=require('path')
var app = express();


const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'calendar'
});
db.connect((e)=>{
    if(e) console.log(e);
    else{
        console.log("Connected mysql..")
    }
})
//connect it

app.use(express.static(__dirname));


app.listen(process.env.PORT || 3000,()=>{
    console.log("connected..")
});
