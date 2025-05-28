const { User, userSchema } = require('./user.model');
const { Product, productSchema } = require('./product.model');
const { Customer, CustomerSchema } = require('./customer.model');

function setupModels(sequelize) {
  User.init(userSchema, User.config(sequelize));
  Product.init(productSchema, Product.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));

  Customer.associate(sequelize.models);
};

module.exports = setupModels;