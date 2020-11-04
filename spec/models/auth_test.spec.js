const auth = require('../../src/controllers/auth');

beforeEach(async function () {
    const user = {
        "id": "1",
        "name": "admin",
        "lastname": "admin",
        "username": "admin",
        "password": "admin",
        "favcoin": "usd"

    };
    await auth.signin(user);
});


it('Testing signin auth', async function () {
   
});