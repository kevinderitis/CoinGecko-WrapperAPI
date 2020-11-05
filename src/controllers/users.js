const { coinuser } = require('../database');

async function addCoin(idcoin, iduser) {
    let result = "";
    try {
        
        result = await coinuser.findAll({
            where: { "iduser": iduser, "idcoin": idcoin }
        });
    } catch (error) {
        result = { "rc": 3, "msg": "Database connection error" }
    }
    if (!result[0]) {
        const newcoinuser = { "iduser": iduser, "idcoin": idcoin };
        try {
            let lastitem = await coinuser.max('id');
            if(lastitem < 25){
                await coinuser.create(newcoinuser);
                result = {success: "Currency added"}
            }else{
                result = {"rc": 8, "msg": "Maximum allowed 25"}
            }
            
            
        } catch (error) {
            result = { "rc": 3, "msg": "Database connection error" }
        }
    } else {
        result = { "rc": 7, "msg": "Existing currency for that user" };
    }

    return (result);
}


module.exports = { addCoin };