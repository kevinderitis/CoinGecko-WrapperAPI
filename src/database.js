const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('coingecko-wrapper', 'root', 'sqlsys',{
    host: 'localhost',
    dialect: 'mysql'
});




module.exports = { sequelize };