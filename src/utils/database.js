const { Sequelize } = require("sequelize");

// credenciales de la database
const db = new Sequelize({

    database: "courses_db",
    username: "kloiberth",
    host: "localhost",
    port: "5432",
    password: "60540742",
    dialect: "postgres",
    logging: false
});

module.exports = db;