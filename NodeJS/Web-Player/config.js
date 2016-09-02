'use strict';

module.exports = {
  server: {
    port: process.argv[2] || process.env.PORT || 8000
  },
  
  views: {
    engines: { jade: require('jade') },
    path: __dirname + '/views/pages/',
    compileOptions: { pretty: true }
  }
}
