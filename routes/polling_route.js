const express = require("express")
const router = express.Router()
const {  } = require("../controllers/")

router.post("/register", registerUser)

router.post("/login", loginUser)

module.exports = router