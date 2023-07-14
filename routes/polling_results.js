const express = require("express")
const router = express.Router()
const db = require('../models')

router.get('/', (req, res) => {
    return db.agentname.findAll()
    .then((contacts) => res.send(contacts))
    .catch((err) => {
      console.log('There was an error querying contacts', JSON.stringify(err))
      return res.send(err)
    })
})

module.exports = router