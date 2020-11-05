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
            await coinuser.create(newcoinuser);
            result = {success: "Currency added"}
        } catch (error) {
            result = { "rc": error.parent.errno, "msg": error.parent.code }
        }
    } else {
        result = { "rc": 7, "msg": "Existing currency for that user" };
    }

    return (result);
}


module.exports = { addCoin };