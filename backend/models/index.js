const dbConfig = require("../config/db.Config.js");
const Sequelize = require("sequelize");


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operationsAliases: false,
        define: {
            timestamps: false
        },
        pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
        }
    });

 const db= {}
 db.Sequelize = Sequelize
 db.sequelize = sequelize

    // db.AgentnameModel = require("./agentname.js") (sequelize, Sequelize);
    // db.Announced_lga = require("./announced_lga_results.js") (sequelize, Sequelize)
    db.Announced_pu = require("./announced_pu_results.js") (sequelize, Sequelize)
    // db.Announced_state = require("./announced_state_results.js") (sequelize, Sequelize)
    // db.Announced_ward = require("./announced_ward_results.js") (sequelize, Sequelize)
    db.lga = require("./lga.js") (sequelize, Sequelize)
    // db.party = require("./party.js") (sequelize, Sequelize)
    db.polling_unit = require("./polling_unit.js") (sequelize, Sequelize)
    // db.state = require("./states.js") (sequelize, Sequelize)
    // db.ward = require("./ward.js") (sequelize, Sequelize)


module.exports = db;


