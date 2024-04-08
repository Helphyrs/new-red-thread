const { DataTypes } = require('sequelize');
const sequelize = require('../services/mysql')
const User = require('../models/user');
const bcrypt = require('bcrypt');

const userData = [
    {
        email: "bob@bakeapi.com",
        password: "bob",
        bakery_name: "Ma petite boulangerie"
    },
    {
        email: "jane@bakeapi.com",
        password: "jane",
        bakery_name: "Delicious Bread"
    }
];
(async () => {
    try {

        const hashedUserData = await Promise.all(userData.map(async user => {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            return { ...user, password: hashedPassword };
        }));
        await User.destroy({ where: {} });

        // Insérer les données de fixtures dans la table users
        await User.bulkCreate(hashedUserData);

        console.log('Fixtures insérées avec succès dans la table users.');
    } catch (error) {
        console.error('Erreur lors de l\'insertion des fixtures dans la table users:', error);
    }
})();