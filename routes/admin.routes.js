const express = require('express')
const router = express.Router()
const adminController = require("../controllers/admin")

// "/products"
router.get("/", adminController.productsList)
router.get("/detail/:id", adminController.detailProduct)

router.get("/create",adminController.createProduct)
router.post("/create",adminController.createProductPOST)

router.get("/edit/:id", adminController.editProduct)
router.put("/edit/:id", adminController.editProductPUT)

router.delete("/eliminar-producto/:id",adminController.deleteProduct)



module.exports= router;