const sequelize = require('../database');
const fetch = require('node-fetch');
const { response } = require('express');


async function coinList() {
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

function coinTop() {
    return ('top');
}


module.exports = { coinList, coinTop };