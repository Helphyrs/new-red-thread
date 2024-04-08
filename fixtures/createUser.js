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
    },
    role: {
        type: DataTypes.STRING(30),
        allowNull: true,
    },
}, {
    tableName: 'users', // Nom de la table dans la base de données
    timestamps: true, // Activer les timestamps (createdAt et updatedAt)
    underscored: true, // Utiliser la convention snake_case pour les noms de colonnes
});

const userData = [
    {
        email: "user1@example.com",
        password: "password1",
        bakery_name: "Bakery One",
        role: "admin"
    },
    {
        email: "user2@example.com",
        password: "password2",
        bakery_name: "Bakery Two",
        role: "user"
    }
];
(async () => {
    try {
        // Supprimer toutes les données existantes de la table users
        await User.destroy({ where: {} });

        // Insérer les données de fixtures dans la table users
        await User.bulkCreate(userData);

        console.log('Fixtures insérées avec succès dans la table users.');
    } catch (error) {
        console.error('Erreur lors de l\'insertion des fixtures dans la table users:', error);
    }
})();