const jwt = require('jsonwebtoken');
const { token } = require('morgan');
const { user } = require('../database')


function tokenvalidation(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        req.token = bearerHeader.split(' ')[1];
    } else {
        res.sendStatus(403);
    }
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.json({ "rc": 3, "msg": "Invalid token" })
        } else {
            req.user = authData.userfound;
        }
        next();
    });

}

async function signin(usr) {
    
    let sign = "";
    const userfound = await user.findAll({
        where: { "username": usr.username }
    });
    let lastid = await user.max('id');
        if (!userfound[0]) {
        usr.id = lastid + 1;
        await user.create(usr);
        return { success: "User created." }
    } else {
        return { "rc": 2, "msg": "Existing user" }
    }
    
}

async function login(usrname, pass) {
    let tkn = "";
    const userfound = await user.findAll({
        where: { "username": usrname }
    });
    if (userfound[0] && userfound[0].password == pass) {
        tkn = jwt.sign({ userfound }, 'secretkey');
    } else {
        tkn = { "rc": 1, "msg": "Invalid user or password" };
    }
    return tkn;
};


module.exports = { tokenvalidation, signin, login };