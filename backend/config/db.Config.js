
module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "ready007",
    DB: "bincom_test",
    dialect: "mysql", 
    pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
    }
    };