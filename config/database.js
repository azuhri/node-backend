const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_TYPE,
    ssl: true,
    dialectOptions: {
       ssl: {
          require: true
       }
     }
});

module.exports = sequelize; 