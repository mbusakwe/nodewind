require('dotenv').config(); // Load environment variables from .env

function DBConfig(){
    this.server     = process.env.DB_SERVER;
    this.database   = process.env.DB_DATABASE;
    this.user       = process.env.DB_USER;
    this.password   = process.env.DB_PASSWORD;
    this.port       = parseInt(process.env.DB_PORT, 10);
    this.options    = {
        trustServerCertificate: process.env.DB_TRUST_SERVER_CERTIFICATE === 'true'
    };
}

module.exports = DBConfig;
