const users = require('../../src/controllers/users');
const fetch = require('node-fetch');
const user = require('../../src/models/user');
const { coinuser } = require('../../src/database');

beforeEach(async function () {
    await users.addCoin('bitcoin', 2);
});


it('Testing add coin user', async function () {
    const expected = await coinuser.findAll({
        where: { iduser: 2, idcoin: 'bitcoin' }
    });
    expect('bitcoin').toBe(expected[0].idcoin);
});