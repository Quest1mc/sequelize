const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
module.exports = new Sequelize('codegig', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres' 
});
