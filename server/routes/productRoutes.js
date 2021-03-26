// const { shoes } = require('../controllers/shoes');

const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require('../controllers/productController');
// } = require("../controller/productControllers");
router.get("/", getProducts);



router.get("/:id", getProductById);

module.exports = router;
