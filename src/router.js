const { Router } = require('express');
const User = require('./controllers/user');
const Product = require('./controllers/product');
const Category = require('./controllers/category');
const Brand = require('./controllers/brand');
const { verifyToken } = require('./middleware');

const router = Router();
router
  .get('/', (req, res) => res.send('MarketPlace-Yaydoo'))
  .post('/api/login', User.login)
  .post('/api/user', User.createAccount)
  .post('/api/products', verifyToken, Product.post)
  .get('/api/category', Category.get)
  .get('/api/brand', Brand.get)
  .get('/api/sellers', User.getSeller)

  .get('/api/products/user/:userId', verifyToken, Product.getByUser)
  .get('/api/products/adm/:userAdmId/user/:userId', verifyToken, Product.getByAdminUser)
  .get('/api/products/:name/:sku/:priceLow/:priceHigh', Product.getList);

module.exports = router;
