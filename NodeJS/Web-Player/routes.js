module.exports = function(server){
  'use strict';

  server.route({method: 'GET', path: '/',     handler: index});
  server.route({method: 'GET', path: '/list', handler: list});
  server.route({method: 'GET', path: '/play', handler: play});
  server.route({method: 'GET', path: '/next', handler: next});
  server.route({method: 'GET', path: '/stop', handler: stop});

  const Player = require('player');
  const musicDir = process.argv[2] || '/home/yten/Music/Favorites';
  
  var playlist = walkSync(musicDir);
  var player = new Player(playlist);
  
  // Get all filenames
  function walkSync(currentDirPath) {
    var files = [];
    var fs = require('fs'),
        path = require('path');
    
    fs.readdirSync(currentDirPath).forEach(function (name) {
      var filePath = path.join(musicDir, name);
      var stat = fs.statSync(filePath);
      if (stat.isFile()) {
        files.push(filePath);
      } else if (stat.isDirectory()) {
        walkSync(filePath);
      }
    });

    return files;
  }

  var currentSong = {};
  
  function index(request, reply) {
    return reply('Your wish is my command, Master.');
  }

  function list(request, reply) {
    return reply({playlist: player.list});
  }

  function play(request, reply) {
    player.play();
    return reply('Currently playing: ' + currentSong._name);
  }

  function next(request, reply) {
    player.next();
    return reply('Currently playing: ' + currentSong._name);
  }

  function stop(request, reply) {
    player.stop();
    return reply('Stop the player');
  }

  // EVENTS
  player.on('playing',function(item){
    currentSong = item;
  });
  
  // event: on error 
  player.on('error', function(err){
    console.log(err);
  });
};
