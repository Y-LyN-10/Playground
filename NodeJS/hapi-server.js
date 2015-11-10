var Hapi = require('hapi');
var server = new Hapi.Server();
var employees = require('./data/employees').data;

function* getRandomEmployee() {
  while (true) {
    yield employees[Math.floor(Math.random() * employees.length)];
  }
}

var employee = getRandomEmployee();

// Create a server
server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 3000)
});

// Set view engine
server.register(require('vision'), function (err) {
  if (err) {
    console.log("Failed to load vision.");
  }
  
  server.views({
    engines: { jade: require('jade') },
    compileOptions: {
      pretty: true
    }
  });  
});

// Add a route
server.route({
  method: 'GET',
  path: '/next',
  handler: function (request, reply) {
    // TODO: Error handling
    reply(employee.next().value);
 } 
});

server.route({
  method: 'GET',
  path: '/game',
  handler: { 
    view: {
      template: 'index',
      context: employee.next().value
    }
  }
});

// Start the server
server.start(function (){
  console.log(`Server running at: ${server.info.uri}`);
});
