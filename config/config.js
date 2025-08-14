require('dotenv').config();

const config = {
	port: process.env.PORT || 3000,
	isProd: process.env.NODE_ENV === 'production',

	// Producción: solo DATABASE_URL (Railway)
	dbUrl: process.env.DATABASE_URL,

	// Desarrollo: Postgres local
	dbUser: process.env.DB_USER,
	dbPassword: process.env.DB_PASSWORD,
	dbHost: process.env.DB_HOST,
	dbName: process.env.DB_NAME,
	dbPort: process.env.DB_PORT,
};

module.exports = { config };
