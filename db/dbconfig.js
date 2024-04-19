require('dotenv').config(); // Load environment variables from .env

function DBConfig(){
    this.server     = process.env.DB_SERVER;
    this.database   = process.env.DB_DATABASE;
    this.user       = process.env.DB_USER;
    this.password   = process.env.DB_PASSWORD;
    this.port       = process.env.DB_PORT;
    this.options    = {
        trustServerCertificate: process.env.DB_TRUST_SERVER_CERTIFICATE
    };
}

module.exports = DBConfig;
/*

module.exports = {
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    port: process.env.PORT,
    options: {
        trustServerCertificate:true
    }   

};

*/