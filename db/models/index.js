const { User, userSchema } = require('./user.model');
const { Product, productSchema } = require('./product.model');

function setupModels(sequelize) {
  User.init(userSchema, User.config(sequelize));
  Product.init(productSchema, Product.config(sequelize));
};

module.exports = setupModels;