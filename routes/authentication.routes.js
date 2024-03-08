const express = require('express')
const router = express.Router()
const authenticationController = require("../controllers/authentication")

// "/authentication"
router.get("/registrarse", authenticationController.register)
router.get("/loguearse", authenticationController.login)

module.exports = router;