// import mongoose

const mongoose=require('mongoose');

const connectDB= async ()=>{
  try{
  await mongoose.connect(
    'mongodb+srv://f3groupe:123456a@cluster0.f9fqr.mongodb.net/Contactliste?retryWrites=true&w=majority'
   );
   console.log('DB jawha behi');

  } catch (error) {
   console.log(error);

  }
}

module.exports=connectDB;