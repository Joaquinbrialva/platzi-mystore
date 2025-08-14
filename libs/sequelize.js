const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models');

let sequelize;

if (config.dbUrl) {
	// Railway / producción usa DATABASE_URL
	sequelize = new Sequelize(config.dbUrl, {
		dialect: 'postgres',
		dialectOptions: config.isProd
			? {
					ssl: {
						require: true,
						rejectUnauthorized: false,
					},
				}
			: {},
	});
} else {
	const USER = encodeURIComponent(config.dbUser);
	const PASSWORD = encodeURIComponent(config.dbPassword);
	const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
	sequelize = new Sequelize(URI, { dialect: 'postgres' });
}

setupModels(sequelize);

module.exports = sequelize;
