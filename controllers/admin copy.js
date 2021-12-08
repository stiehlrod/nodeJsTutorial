const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    const editMode = req.query.edit;
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/add-product',
        editing: editMode
    })
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/products'
        })
    })
}

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const image = req.body.imageUrl;
    
    const product = new Product(null, title, price, description, image);
    product.save();
    res.redirect('/');
};

exports.postEditProduct = (req, res, next) => {
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImage = req.body.imageUrl;
    const updatedDesc = req.body.description;
    const prodId = req.body.productId;
    const updatedProduct = new Product(prodId, updatedTitle, updatedPrice, updatedDesc, updatedImage);
    updatedProduct.save();
    res.redirect('admin/products');
};

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        if (!product) {
            return res.redirect('/');
        }
        res.render('admin/edit-product', {
            pageTitle: 'Edit Product',
            path: '/edit-product',
            editing: editMode,
            product: product
        })
    })
};

exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.deleteById(prodId);
    res.redirect('/admin/products');
}