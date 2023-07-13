/* Importing Different Modules */


const express = require("express")
const { Sequelize } = require('sequelize');



const app = express()
const PORT = 5000



/* Configure express*/
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)


// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './data.sqlite'

  
});

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
