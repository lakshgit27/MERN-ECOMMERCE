const express = require("express");
const app = express();

app.use(express.json());

// Importing our Routes 
const product = require("./routes/productRoute");
app.use("/api/v1",product)     // this is the product api jo ki banane wale hai. Isko postman mei test krnge




module.exports = app;