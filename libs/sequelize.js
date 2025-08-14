const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const setupModels = require('../db/models');

let sequelize;

if (config.isProd && config.dbUrl) {
	sequelize = new Sequelize(config.dbUrl, {
		dialect: 'postgres',
		dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
	});
} else {
	sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
		host: config.dbHost,
		port: config.dbPort,
		dialect: 'postgres',
	});
}

setupModels(sequelize);

module.exports = sequelize;
