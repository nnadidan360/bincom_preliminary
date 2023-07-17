const db = require("../models");


const pu = db.Announced_pu
const polling_unit = db.polling_unit;



module.exports = {
uploadResultPage: async(req, res) => {
    const { 
        polling_unit_uniqueid,
        party_abbrevation,
        party_score,
        entered_by_user,
        date_entered,
        user_ip_address
     } = req.body

    try {
        const polling_results = await pu.create({
            polling_unit_uniqueid,
            party_abbrevation,
            party_score,
            entered_by_user,
            date_entered: date.now(),
            user_ip_address
        });
        
    
    } catch (error) {
        console.log(error)
    }
    
    }


    }