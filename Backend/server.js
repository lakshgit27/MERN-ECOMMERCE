const app = require("./app");

const dotenv = require("dotenv");
// importing the exported database file 
const connectDatabase = require("./config/database")

// Config path 
dotenv.config({})

// Connecting to the database 
connectDatabase();


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on: http://localhost:${process.env.PORT}`);
})