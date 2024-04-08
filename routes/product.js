
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Crée un nouveau produit
 *     description: Crée un nouveau produit avec les détails spécifiés
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nom du produit
 *               price:
 *                 type: number
 *                 description: Prix du produit
 *               status:
 *                 type: string
 *                 enum: [vendu, invendu]
 *                 description: Statut du produit (vendu ou invendu)
 *               userId:
 *                 type: integer
 *                 description: ID de l'utilisateur associé au produit
 *     responses:
 *       '201':
 *         description: Produit créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: Nom du produit
 *                 price:
 *                   type: number
 *                   description: Prix du produit
 *                 status:
 *                   type: string
 *                   enum: [vendu, invendu]
 *                   description: Statut du produit (vendu ou invendu)
 *                 userId:
 *                   type: integer
 *                   description: ID de l'utilisateur associé au produit
 *         '500':
 *           description: Erreur lors de la création du produit
 */

router.post('/', productController.addProduct);


/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Récupérer un produit par son ID
 *     description: Récupère un produit de la base de données en fonction de son ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID du produit à récupérer
 *     responses:
 *       '200':
 *         description: Produit trouvé
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: Nom du produit
 *                 price:
 *                   type: number
 *                   description: Prix du produit
 *                 status:
 *                   type: string
 *                   description: Statut du produit (vendu ou invendu)
 *                 userId:
 *                   type: integer
 *                   description: ID de l'utilisateur associé au produit
 *       '404':
 *         description: Produit non trouvé
 */

router.get('/:id', productController.getProductById);

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Récupérer tous les produits
 *     description: Récupère tous les produits de la base de données.
 *     responses:
 *       '200':
 *         description: Liste de tous les produits récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     description: Nom du produit
 *                   price:
 *                     type: number
 *                     description: Prix du produit
 *                   status:
 *                     type: string
 *                     description: Statut du produit (vendu ou invendu)
 *                   userId:
 *                     type: integer
 *                     description: ID de l'utilisateur associé au produit
 *       '500':
 *         description: Erreur lors de la récupération des produits
 */

router.get('/', productController.getAllProduct)

/**
 * @swagger
 * /products:
 *   put:
 *     summary: Mettre à jour un produit
 *     description: Met à jour les détails d'un produit existant dans la base de données.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: ID du produit à mettre à jour
 *               name:
 *                 type: string
 *                 description: Nouveau nom du produit
 *               price:
 *                 type: number
 *                 description: Nouveau prix du produit
 *               status:
 *                 type: string
 *                 enum: [vendu, invendu]
 *                 description: Nouveau statut du produit (vendu ou invendu)
 *               userId:
 *                 type: integer
 *                 description: Nouvel ID de l'utilisateur associé au produit
 *     responses:
 *       '200':
 *         description: Produit mis à jour avec succès
 *       '404':
 *         description: Produit non trouvé
 *       '500':
 *         description: Erreur lors de la mise à jour du produit
 */


router.put('/', productController.editProduct)

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Supprimer un produit
 *     description: Supprime un produit de la base de données en fonction de son ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID du produit à supprimer
 *     responses:
 *       '200':
 *         description: Produit supprimé avec succès
 *       '404':
 *         description: Produit non trouvé
 *       '500':
 *         description: Erreur lors de la suppression du produit
 */

router.delete('/:id', productController.deleteProductById)
module.exports = router