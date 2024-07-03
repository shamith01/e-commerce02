const express = require("express");
const router = express.Router();

const {
  getProducts,
  addProducts,
  delProducts,
  updateProducts,
  signup,
  login,
} = require("../controllers/controller");

// user
router.post("/signup",signup);
router.post("/login",login);
router.get("/products", getProducts);

// admin
router.post("/create/products", addProducts);
router.post("/del/products", delProducts);
router.post("/update/products", updateProducts);    

module.exports = router;
