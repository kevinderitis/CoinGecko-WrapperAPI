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
    let ntop = [];
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

    if (listtop) {
        try {
            ntop = await ordertop(listtop);
        } catch (error) {

        }


    } else {
        return ({ "rc": 6, "msg": "No coins saved" })
    }

    return ntop;
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

async function ordertop(listtop) {
    let topn = [];
    let idcoin = listtop[0].id;

    let prices = await fetch(`https://api.coingecko.com/api/v3/exchange_rates`);
    result = await prices.json();
    let btcusd = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=btc&ids=${idcoin}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    btcusdprice = await btcusd.json();
    let btcars = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=btc&ids=${idcoin}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    btcarsprice = await btcars.json();
    let btceur = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=btc&ids=${idcoin}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    btceurprice = await btceur.json();
    listtop.forEach(element => {

        let priceARS = (result.rates.ars.value * btcarsprice[0].current_price).toFixed(2);
        let priceUSD = (result.rates.usd.value * btcusdprice[0].current_price).toFixed(2);
        let priceEUR = (result.rates.eur.value * btceurprice[0].current_price).toFixed(2);


        let data = {
            "symbol": element.symbol,
            "priceARS": priceARS,
            "priceUSD": priceUSD,
            "priceEUR": priceEUR,
            "name": element.name,
            "image": element.image,
            "last_updated": element.last_updated
        }
        topn.push(data);

    });



    return topn;
}


module.exports = { coinList, coinTop };