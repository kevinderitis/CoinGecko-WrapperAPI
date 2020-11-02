const sequelize = require('../database');
const fetch = require('node-fetch');
const { response } = require('express');


async function coinList() {
    let res = await fetch('https://api.coingecko.com/api/v3/coins/list');
    let result = await res.json();
    return result;
}

function coinTop() {
    return ('top');
}


module.exports = { coinList, coinTop };