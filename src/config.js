module.exports = {
    DATABASE: 'coingecko-wrapper',
    USER_DB: 'root',
    PASS_DB: 'sqlsys',
    HOST_DB: 'localhost',


INVALID_USER: {
    "rc": 1,
    "msg": 'Invalid user or password'
},
INVALID_TOKEN: {
    "rc": 2,
    "msg": 'Invalid token'
},
DB_CONN_ERROR: {
    "rc": 3,
    "msg": 'Database connection error'
},
API_CONN_ERROR: {
    "rc": 4,
    "msg": 'API connection error'
},
EXIST_USER: {
    "rc": 5,
    "msg": 'Existing user'
},
NO_COINS: {
    "rc": 6,
    "msg": 'No coins saved'
},
EXIST_CURRENCY: {
    "rc": 7,
    "msg": 'Existing currency for that user'
}


}


