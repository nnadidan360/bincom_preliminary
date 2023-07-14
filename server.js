/* Importing Different Modules */


const express = require("express")

const { Sequelize, Op, Model, DataTypes } = require("sequelize");


const pollingRoutes = require("./routes/polling_route")
const pollingResult = require("./routes/polling_results")




const app = express()
const PORT = 5000



/* Configure express*/
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

const sequelize = new Sequelize(
    'bincom_test',
    'root',
    'ready007',
     {
       host: 'localhost',
       dialect: 'mysql'
     }
   );
   try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }



app.use("/", pollingRoutes)
app.use("/", pollingResult)





/* Start The Server */
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
