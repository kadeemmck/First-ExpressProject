const express = require('express');
const app = express();

app.get('/help',(req,res)=>{
    res.send("this is help page :)!");
});

app.get('/contact',(req,res)=>{
    res.send("this is contact page :)!");
});

app.get('/',(req,res)=>{
    res.send("this is home page :)!");
});





app.listen(3000);
