const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize('techblog_db', 'root', 'Panarin10', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306, // Replace with your MySQL port if different
});

module.exports = sequelize;