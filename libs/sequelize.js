const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models');

let sequelize;

if (config.dbUrl && config.env === 'production') {
	// Railway / producción usa DATABASE_URL
	sequelize = new Sequelize(config.dbUrl, {
		dialect: 'postgres',
	});
} else {
	const USER = encodeURIComponent(config.dbUser);
	const PASSWORD = encodeURIComponent(config.dbPassword);
	const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
	sequelize = new Sequelize(URI, { dialect: 'postgres' });
}

setupModels(sequelize);

module.exports = sequelize;
