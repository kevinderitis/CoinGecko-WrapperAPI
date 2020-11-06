const auth = require('../../src/controllers/auth');
const { user } = require('../../src/database');

beforeEach(async function () {
    const user = {
    
        "name": "admin",
        "lastname": "admin",
        "username": "admin2",
        "password": "admin",
        "favcoin": "usd"

    };
    await auth.signin(user);
});


it('Testing signin auth', async function () {
    expusers = await user.findAll({
        where: { "username": 'admin2' }
    });
    expect('admin2').toBe(expusers[0].username);
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