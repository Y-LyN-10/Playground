'use strict';

var db = require('./../index');

module.exports = function (db, T) {
  var User = db.define('user', {
    firstName: {
      type: T.STRING,
      field: 'first_name'
    },
    lastName: {
      type: T.STRING
    }
  }, {
    freezeTableName: true // Model table name will be the same as the model name
  }
    /* Optionally, add here new object with timestamps: true. By default, they are 'false'.
       If you are working with the PostgreSQL TIMESTAMP WITHOUT TIME ZONE and you need to parse
       it to a different   timezone, use the pg library's own parser */
  );

  // sequelize.sync() will, based on your model definitions, create any missing tables.
  // If force: true it will first drop tables before recreating them.

  // Seed example data
  User
    .sync({force: true})
    .then(function () {
      // Table created
      return User.create({
        firstName: 'John',
        lastName: 'Snow'
      });
    })
    .then(function(user) {
      console.log('You know nothing, ' + user.get('firstName') + ' ' + user.get('lastName'));
    });

    return User;
};