const { Sequelize } = require('sequelize');

// Configurando o Sequelize para usar SQLite em memória
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:', // Usando banco de dados em memória para testes
});

module.exports = sequelize;