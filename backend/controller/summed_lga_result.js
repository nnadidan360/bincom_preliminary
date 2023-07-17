const db = require("../models");


const pu = db.Announced_pu
const polling_unit = db.polling_unit;



module.exports = {
getSummedTotalResultPage: async(req, res) => {
    const { polling_unit_id } = req.params

    try {
        const polling_results = await pu.findAll({polling_unit_unique_id:polling_unit_id});
        console.log(polling_results)
    
    } catch (error) {
        console.log(error)
    }
    
    }


    }