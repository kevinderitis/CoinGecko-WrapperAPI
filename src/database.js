const { Sequelize } = require('sequelize');
const usermodel = require('./models/user');
const coinmodel = require('./models/coins');
const coinusermodel = require('./models/coinuser');
const config = require('./config');

const sequelize = new Sequelize(config.DATABASE, config.USER_DB, config.PASS_DB, {
    host: config.HOST_DB,
    dialect: 'mysql'
});

const user = usermodel(sequelize, Sequelize);
const coin = coinmodel(sequelize, Sequelize);
const coinuser = coinusermodel(sequelize, Sequelize);
sequelize.sync({ force: false })
    .then(() => {
        console.log('Synchronized tables')
    });


module.exports = { sequelize, user, coin, coinuser };