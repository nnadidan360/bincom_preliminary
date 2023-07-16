const express = require("express")
const router = express.Router()
const { sequelize } = require('../models/agentname')

// router.get('/', (req, res) => {
//     sequelize.sync().then(() => {
//         console.log('Book table created successfully!');
//      }).catch((error) => {
//         console.error('Unable to create table : ', error);
//      });
// })

module.exports = router