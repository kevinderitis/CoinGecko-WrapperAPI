const coins = require('../../src/controllers/coins');
const { coinuser } = require('../../src/database');
const fetch = require('node-fetch');

beforeEach(async function () {
    await coins.coinList();
    await coins.coinTop();
});

it('Testing coin list', async function () {
    let res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    let expected = await res.json();
    const result = await coins.coinList();
    expect(result[0].symbol).toBe(expected[0].symbol);
});

it('Testing coin top', async function () {
    const expected = await coinuser.findAll({
        where: { iduser: 1 }
    });

    const result = await coins.coinTop(1);
    expect(result[0].name).toBeCloseTo(expected[0].idcoin);

});

