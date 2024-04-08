const { DataTypes } = require('sequelize');
const sequelize = require('../services/mysql')

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    bakery_name: {
        type: DataTypes.STRING(150),
        allowNull: true,
    }
}, {
    tableName: 'users', // Nom de la table dans la base de données
    timestamps: true, // Activer les timestamps (createdAt et updatedAt)
    underscored: true, // Utiliser la convention snake_case pour les noms de colonnes
});

module.exports = User;