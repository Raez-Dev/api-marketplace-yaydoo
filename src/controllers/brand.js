const HttpStatus = require('http-status-codes');
const { Brand } = require('../models');

const get = async (req, res) => {
  try {
    const brand = await Brand.query();
    if (!brand) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: 'Not Found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Found',
      data: brand,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  }
};

module.exports = { get };
