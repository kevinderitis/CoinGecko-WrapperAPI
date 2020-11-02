module.exports = (sequelize, type) => {
    return sequelize.define('users', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
       name: type.STRING,
       lastname: type.STRING,
       username: type.STRING,
       password: type.STRING,
       favcoin: type.INTEGER

    })

}