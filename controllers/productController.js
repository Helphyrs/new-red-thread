const Product = require('../models/product');

exports.addProduct = async (req, res) => {
    const productToAdd = { name: req.body.name, price: req.body.price, user_id: req.body.userId, status: req.body.status };
    try {
        const product = await Product.create(productToAdd);
        res.status(201).json(product);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la création du produit' });
    }
}
exports.getProductById = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await Product.findByPk(productId);
        product === null ? res.status(404).json(product) : res.status(200).json(product)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Le produit est introuvable' });
    }
}

exports.getAllProduct = async (req, res) => {
    try {
        const product = await Product.findAll();
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Le produit est introuvable' });
    }
}

exports.editProduct = async (req, res) => {
    const { id, name, price, status, userId } = req.body;
    try {
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ message: "Produit non trouvé" });
        }
        await product.update({
            name: name,
            price: price,
            status: status,
            userId: userId
        });

        return res.status(200).json({ message: "Produit mis à jour avec succès" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erreur lors de la mise à jour du produit" });
    }
}

exports.deleteProductById = async (req, res) => {
    const productId = req.params.id;

    try {
        const product = await Product.findByPk(productId);

        if (!product) {
            return res.status(404).json({ message: "Produit non trouvé" });
        }
        await product.destroy();
        return res.status(200).json({ message: "Produit supprimé avec succès" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erreur lors de la suppression du produit" });
    }
}