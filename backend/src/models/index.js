const dbConfig = require("../config/dbConfig.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.produto = require("./produtoModel.js")(sequelize, Sequelize);
db.relatorioSatisfacao = require("./relatorioSatisfacaoModel.js")(sequelize, Sequelize);

module.exports = db;