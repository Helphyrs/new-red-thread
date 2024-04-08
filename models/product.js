const { DataTypes } = require('sequelize');
const sequelize = require('../services/mysql')

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING(150),
        allowNull: true,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM('vendu', 'invendu'),
        allowNull: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
});

module.exports = Product;