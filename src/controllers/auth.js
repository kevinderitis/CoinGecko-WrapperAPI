const jwt = require('jsonwebtoken');

function validarToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
    } else {
        res.sendStatus(403);
    }

    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {

            req.rol = authData.usuario[0].rol;

            next();
        }
    });

}

function signin() {
    return ('signin');
}

function login() {
    return ('login');
};


module.exports = { validarToken, signin, login };