const express = require("express");
require('dotenv').config()
// we can use also the syntax that is 
// import express from "express"
const app = express();

const port = 3000; 
// if anything is request by someone on the home like "/" return respne that is hello
app.get("/", (req, res) => {
  res.send("hello");
});
app.get('/login' , (req,res)=>{
    res.send("<h1> please login at the docdeode</h1>")
});
app.get("/youtube" , (req,res)=>{
    res.send("<h2>you are on you tube</h2>")
})
app.get('/twitter', (req,res)=>{
res.send("rahulgotharwal")
})
// now app is continously listen on the port 3000 /home or twitter
app.listen(process.env.PORT, () => {
  console.log(`app is listening on the port ${port}`);
});
