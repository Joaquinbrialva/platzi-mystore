const { Pool } = require('pg');
const { config } = require('../config/config');

let connectionString;
let ssl;

if (config.dbUrl) {
	connectionString = config.dbUrl;
	ssl = { rejectUnauthorized: false };
} else {
	const USER = encodeURIComponent(config.dbUser);
	const PASSWORD = encodeURIComponent(config.dbPassword);
	connectionString = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
}

const pool = new Pool({ connectionString, ssl });

module.exports = pool;
