const sequelize = require('../database');
const fetch = require('node-fetch');
const { response } = require('express');
const { coinuser, user } = require('../database');
const users = require('../models/user');

async function coinList(authuserid) {
    let data = [];
    try {
        let res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        let result = await res.json();

        result.forEach(element => {

            let file = {
                "symbol": element.symbol,
                "current_price": element.current_price,
                "name": element.name,
                "image": element.image,
                "last_updated": element.last_updated
            }

            data.push(file);

        });
    } catch (error) {
        return { "rc": 6, "msg": "API connection error" }
    }

    return data;
}

async function coinTop(userid) {

    let result = "";
    let marketlist = "";
    let listtop = [];
    try {
        result = await coinuser.findAll({
            where: { iduser: userid }
        });

        let userx = await user.findAll({
            where: { id: userid }
        });
        let favcoin = userx[0].favcoin;

        let list = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${favcoin}&order=market_cap_desc&per_page=250&page=1&sparkline=false`)
        marketlist = await list.json();

        result.forEach(element => {

            let data = searchmarketdata(element.idcoin, marketlist);
            listtop.push(data);

        });
    } catch (error) {
        result = { "rc": 6, "msg": error }
    }

    return listtop;
}

function searchmarketdata(idcoin, mrktlist) {

    let data = "";
    let x = 0;
    while (data === "" && mrktlist[x] !== 'undefined') {
        if (mrktlist[x].id === idcoin) {
            data = mrktlist[x];
        }
        x = x + 1;
    }
    return data;
}



module.exports = { coinList, coinTop };