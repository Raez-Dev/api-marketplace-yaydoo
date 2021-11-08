const HttpStatus = require('http-status-codes');
const { User } = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.query()
      .where({
        email: email,
        password: password,
      })
      .withGraphFetched('userType')
      .first();

    if (typeof user === 'undefined' || !user) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: 'Not Found',
      });
    }

    jwt.sign({ user }, config.keyJWT, (err, token) => {
      return res.json({
        success: true,
        message: 'Found',
        data: user,
        token,
      });
    });
  } catch (err) {
    res.status(200).json({
      success: false,
      message: err,
    });
  }
};

const createAccount = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const user = await User.query().insert({
      fullName,
      email,
      password,
      userTypeId: 1,
    });

    jwt.sign({ user }, config.keyJWT, (err, token) => {
      res.json({
        success: true,
        message: 'Success',
        data: user,
        token,
      });
    });
  } catch (err) {
    res.status(200).json({
      success: false,
      message: err,
    });
  }
};

const getSeller = async (req, res) => {
  try {
    const user = await User.query().where('userTypeId', 1);
    if (!user) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: 'Not Found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Found',
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  }
};

module.exports = { createAccount, login, getSeller };
