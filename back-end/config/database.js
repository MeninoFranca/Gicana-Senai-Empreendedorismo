const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('u721539099_gincana', 'u721539099_admin', 'Y$*Q|S6y]', {
    host: '193.203.175.84',
    port: 3306,
    dialect: 'mysql',
});

module.exports = sequelize;
