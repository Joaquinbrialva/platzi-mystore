'use strict';

const { CATEGORY_TABLE, CategorySchema } = require('../models/category.models');
const { PRODUCT_TABLE, productSchema } = require('../models/product.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterfaces) {
    await queryInterfaces.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterfaces.createTable(PRODUCT_TABLE, productSchema);
  },

  async down(queryInterfaces) {
    await queryInterfaces.dropTable(CATEGORY_TABLE);
    await queryInterfaces.dropTable(PRODUCT_TABLE);
  }
};