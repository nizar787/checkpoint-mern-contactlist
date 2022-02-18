// import mongoose
const mongoose =require('mongoose');
// import schema

const Schema= mongoose.Schema;



const contactSchema= new Schema({
  name:{
   type:String,
   required:true,
  },
  email:{
   type:String,
   required:true,
  },
  phone:{
   type:String,
   required:true,
  }
})

module.exports=contact=mongoose.model('contact',contactSchema)