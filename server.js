/* Importing Different Modules */


const express = require("express")
const { Sequelize } = require("sequelize");


const pollingRoutes = require("./routes/polling_route")
const pollingResult = require("./routes/polling_results");
const { AgentnameModel } = require("./models/agentname");
// const { AgentnameModel } = require("./models/agentname");




const app = express()
const PORT = 8500


const db = require("./models");
db.sequelize.sync();

/* Configure express*/
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

// const sequelize = new Sequelize(
//     'bincom_test',
//     'root',
//     'ready007',
//      {
//        host: 'localhost',
//        dialect: 'mysql'
//      }
//    );
//    try {
//     sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
 

  




// app.use("/", pollingRoutes)
app.use("/", pollingResult)


// app.get('/', (req, res) => {
//     return AgentnameModel
//   .then((contact) => {
//     const { firstName, lastName, phone } = req.body
//     return contact.update({ firstName, lastName, phone })
//       .then(() => res.send(contact))
//       .catch((err) => {
//         console.log('***Error updating contact', JSON.stringify(err))
//         res.status(400).send(err)
//       })
//   })
    
//   });

const Agent = db.AgentnameModel;
const lga = db.lga;
const party = db.party;
const state = db.state;
const ward = db.ward;


app.get('/', async(req, res) => {
//    const data = AgentnameModel.findAll()
try {
    const users = await Agent.findAll();
    console.log(users)
// console.log(users.every(user => user instanceof AgentnameModel)); // true
// console.log("All users:", JSON.stringify(users, null, 2));    
} catch (error) {
    console.log(error)
}

})


/* Start The Server */
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
