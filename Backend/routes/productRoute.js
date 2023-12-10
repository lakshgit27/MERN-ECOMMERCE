//router syntax has been written below 
const express = require("express");
const { getAllProducts } = require("../controllers/productController");
const router = express.Router();

// Making our first route
router.route("/products").get(getAllProducts);



module.exports = router;