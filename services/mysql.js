const  {Sequelize}  = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize(process.env.SEQUELIZE_DATABASE, process.env.SEQUELIZE_USERNAME, process.env.SEQUELIZE_PASSWORD, {
    host:process.env.SEQUELIZE_HOST,
    dialect: process.env.SEQUELIZE_DIALECT
  })
  
  sequelize.authenticate()
    .then(() => { 
      console.log('Connexion à la base de données réussie.');
    })
    .catch(err => {
      console.error('Impossible de se connecter à la base de données :', err);
    });

module.exports = sequelize