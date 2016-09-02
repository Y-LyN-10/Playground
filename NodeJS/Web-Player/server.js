'use strict';

const Hapi = require('hapi');

// Create the server
const config = require('./config.js');
const server = new Hapi.Server();

server.connection(config.server);
server.register(require('vision'), (err) => {
    if (err) { throw err; }

    server.views(config.views);
    require('./routes.js')(server);
});


// Start the server with logger plugin
server.start(() => {
  server.log('info', 'Server running at: ' + server.info.uri);
});
