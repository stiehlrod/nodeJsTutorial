const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    })
};

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const image = req.body.image;

    const product = new Product(title, price, description, image);
    product.save();
    res.redirect('/product-list');
};

exports.getProducts = (req, res, next) => {
    res.render('admin/products', {
        prods: Product.fetchAll,
        pageTitle: 'Admin Products',
        path: '/admin/products'
    })
}