// DEFINIMOS LA RUTA DE REGISTER

const { Router } = require('express');
const { registerUser, loginUser } = require('../controllers/registerController')

const router = Router()
router.post("/register", registerUser)
router.post("/login", loginUser)

module.exports = router