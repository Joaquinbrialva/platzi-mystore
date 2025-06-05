const { User, userSchema } = require('./user.model');
const { Product, productSchema } = require('./product.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { Category, CategorySchema } = require('./category.models');
const { Order, OrderSchema } = require('./order.model');

function setupModels(sequelize) {
	User.init(userSchema, User.config(sequelize));
	Product.init(productSchema, Product.config(sequelize));
	Customer.init(CustomerSchema, Customer.config(sequelize));
	Category.init(CategorySchema, Category.config(sequelize));
	Order.init(OrderSchema, Order.config(sequelize));

	Customer.associate(sequelize.models);
	User.associate(sequelize.models);
	Category.associate(sequelize.models);
	Product.associate(sequelize.models);
	Order.associate(sequelize.models);
}

module.exports = setupModels;
