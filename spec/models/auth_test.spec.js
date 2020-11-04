const auth = require('../../src/controllers/auth');
const { user } = require('../../src/database');

beforeEach(async function () {
    const user = {
        "id": "99",
        "name": "admin",
        "lastname": "admin",
        "username": "admin",
        "password": "admin",
        "favcoin": "usd"

    };
    await auth.signin(user);
});


it('Testing signin auth', async function () {
    expusers = await user.findAll({
        where: { "id": 99 }
    });
    expect('admin').toBe(expusers[0].name);
});

it('Testing login auth', async function () {
    token = await auth.login('admin', 'admin');
    expect(token).toBeDefined();
});

afterEach(async function () {
    await user.destroy({
        where: { "id": 99 }
    });
});