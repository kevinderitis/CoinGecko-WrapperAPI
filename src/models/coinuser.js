module.exports = (sequelize, type) => {
    return sequelize.define('coinuser', {
        iduser: type.INTEGER,
        idcoin: type.INTEGER
    })

}