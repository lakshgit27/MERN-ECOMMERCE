const app = require("./app");

const dotenv = require("dotenv");

// Config path 
dotenv.config({})


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on: http://localhost:${process.env.PORT}`);
})