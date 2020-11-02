const { Sequelize } = require('sequelize');
const usermodel = require('./models/user');
const coinmodel = require('./models/coins');

const sequelize = new Sequelize('coingecko-wrapper', 'root', 'sqlsys',{
    host: 'localhost',
    dialect: 'mysql'
});

const user = usermodel(sequelize, Sequelize);
const coin = coinmodel(sequelize, Sequelize);
sequelize.sync({force: false})
.then(()=>{
console.log('Synchronized tables')
});


module.exports = { sequelize, user, coin };