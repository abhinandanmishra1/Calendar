const express=require('express');
const router=express.Router();
app.get('/',(req,res)=>{
    // res.send('<h1>abhi</h1>')
    // res.render("./index");
    res.sendFile(__dirname + "/index.html");
});

module.exports=router;

expor