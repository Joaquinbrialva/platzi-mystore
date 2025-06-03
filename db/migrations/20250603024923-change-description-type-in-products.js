'use strict';

const { DataTypes } = require('sequelize');
const { PRODUCT_TABLE } = require('../models/product.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.changeColumn(PRODUCT_TABLE, 'description', {
      type: DataTypes.STRING,
      allowNull: false
    })
  },

  async down (queryInterface) {
    await queryInterface.changeColumn(PRODUCT_TABLE, 'description', {
      type: DataTypes.INTEGER,
      allowNull: false
    })
  }
};
