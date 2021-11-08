const HttpStatus = require('http-status-codes');
const { Category } = require('../models');

const get = async (req, res) => {
  try {
    const category = await Category.query();
    if (!category) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: 'Not Found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Found',
      data: category,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  }
};

module.exports = { get };
