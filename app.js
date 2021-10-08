const path = require('path');

const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');

app.use(express.static(path.join(__dirname, 'public')));

// https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(shopRoutes);
app.use(adminRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found'});
});

app.listen(3000);