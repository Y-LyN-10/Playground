var env = process.env.NODE_ENV || "development";
var config = require(__dirname + '/config/database.json');

var Sequelize = require('sequelize');
var sequelize = new Sequelize(config.database, config.username, config.password, config);

// Or simply use a connection uri
// var sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

var db = {};

var fs = require('fs');
var path = require('path');

fs.readdirSync(__dirname + '/models/')
  .filter(function (file) {
    return /\.js$/.test(file) && (file !== 'index.js');
  })
  .forEach(function (file) {
    var model = sequelize.import(path.join(__dirname + '/models/', file));
    db[model.name] = model;
  });


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;