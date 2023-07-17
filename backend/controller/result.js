const db = require("../models");

const Agent = db.AgentnameModel;
const lga = db.lga;
const party = db.party;
const state = db.state;
const ward = db.ward;
const pu = db.Announced_pu



module.exports = {
getResultPage: async(req, res) => {
    const { polling_unit_id } = req.params

    try {
        const polling_results = await pu.findAll({polling_unit_unique_id:polling_unit_id});
        console.log(polling_results)
    // console.log(users.every(user => user instanceof AgentnameModel)); // true
    // console.log("All users:", JSON.stringify(users, null, 2));    
    } catch (error) {
        console.log(error)
    }
    
    }


    }