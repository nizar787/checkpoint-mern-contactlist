// import express

const express=require('express');

// initialisation
const app=express();

// import dotenv
 require('dotenv').config()
 // import DB
 const connectDB =require('./config/connectDB');
 connectDB();
 // import model
 
 app.use(express.json());
 app.use('/contact',require('./routes/contact'))
 app.use('/product',require('./routes/product'))


 


 // creation server
 app.listen(process.env.PORT, (err)=> { err ? console.log(err):console.log(`jawna behi ${process.env.PORT}`);});
