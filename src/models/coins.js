module.exports = (sequelize, type) => {
    return sequelize.define('coins', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        symbol: type.INTEGER,
        priceAR: type.FLOAT,
        priceUSD: type.FLOAT,
        priceEUR: type.FLOAT,
        name: type.STRING,
        image: type.STRING
        


    })

}