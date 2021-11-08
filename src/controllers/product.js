const HttpStatus = require('http-status-codes');
const { Product, User } = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config');

const getList = async (req, res) => {
  try {
    const { name, sku, priceLow, priceHigh } = req.params;
    let nameLike = '%' + (name === ' ' ? '%' : name) + '%';
    let skuLike = '%' + (sku === ' ' ? '%' : sku) + '%';
    const product = await Product.query()
      .where('name', 'Ilike', nameLike)
      .where('sku', 'Ilike', skuLike)
      .where('price', '>=', priceLow)
      .where('price', '<=', priceHigh)
      .withGraphFetched('user')
      .withGraphFetched('category')
      .withGraphFetched('brand');

    if (!product) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: 'Not Found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Found',
      data: product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  }
};

const getByUser = async (req, res) => {
  try {
    jwt.verify(req.token, config.keyJWT, (error, authData) => {
      if (error) {
        return res.status(403).json({
          success: false,
          message: 'Unauthorized',
        });
      }
    });

    const { userId } = req.params;

    const user = await User.query()
      .findById(userId)
      .withGraphFetched('userType');

    const product = await Product.query()
      .where(user.userType.id, 2)
      .orWhere({
        userId: userId,
      })
      .withGraphFetched('user')
      .withGraphFetched('category')
      .withGraphFetched('brand');
    if (!product) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: 'Not Found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Found',
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

const getByAdminUser = async (req, res) => {
  try {
    jwt.verify(req.token, config.keyJWT, (error, authData) => {
      if (error) {
        return res.status(403).json({
          success: false,
          message: 'Unauthorized',
        });
      }
    });

    const { userAdmId, userId } = req.params;

    const user = await User.query()
      .findById(userAdmId)
      .withGraphFetched('userType');

    if (user.userType.id === 2) {
      const product = await Product.query()
        .where(parseInt(userId), 0)
        .orWhere('userId', userId)
        .withGraphFetched('user')
        .withGraphFetched('category')
        .withGraphFetched('brand');

      if (!product) {
        return res.status(HttpStatus.NOT_FOUND).json({
          success: false,
          message: 'Not Found',
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Found',
        data: product,
      });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: 'You are not an admin',
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  }
};

const post = async (req, res) => {
  try {
    jwt.verify(req.token, config.keyJWT, (error, authData) => {
      if (error) {
        return res.status(403).json({
          success: false,
          message: 'Unauthorized',
        });
      }
    });

    const { name, image, sku, quantity, price, categoryId, brandId, userId } =
      req.body;
    const product = await Product.query().insert({
      name,
      image,
      sku,
      quantity,
      price,
      categoryId,
      brandId,
      userId,
    });

    return res.status(HttpStatus.CREATED).json({
      success: true,
      message: 'Success',
      data: product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  }
};
module.exports = {  getList, getByUser, getByAdminUser, post };
