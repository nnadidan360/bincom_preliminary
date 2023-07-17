const express = require("express")
const router = express.Router()
const controller = require("../controller/result")


router
  .route('/getPuResult/:polling_unit_id')
  .get(controller.getResultPage)
//   .post(controller.registerUser)




module.exports = router