const express = require('express')
const router = express.Router()
const otherController = require("../controllers/other")
// "/"
router.get("/", otherController.home)
router.get("/buscado",otherController.search)

module.exports = router;