const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/add-product'
    })
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/products', {
            prods: Product.fetchAll,
            pageTitle: 'Admin Products',
            path: '/admin/products'
        })
    })
}

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const image = req.body.image;
    
    const product = new Product(title, price, description, image);
    product.save();
    res.redirect('/');
};
