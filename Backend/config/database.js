// Creating a  connection with the database 
 const mongoose = require("mongoose");

//  ek connectdatabase function banaya, connecting wala code likha and export krwa diya. Iss export ko server mei import kr lo.

 const connectDatabase =()=>{
    mongoose.connect(process.env.DB_URI,{useNewUrlParser: true,useUnifiedTopology:true, useCreateIndex:true}).then((data)=>{
        console.log(`Mongo DB connected with the server:${data.connection.host}`)
     }).catch((err)=>{
       console.log(err);
     })
 }

 module.exports = connectDatabase();