'use strict';

{
  // var satelize = require('satelize');

  let getIP = require('external-ip')();
  let http  = require('http');
  let request = require('request');
  let cheerio = require('cheerio');

  const WEATHER_API_BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?';
 
  getIP(function (err, ip) {
    if (err) throw err;

    console.log('IP:', ip);

    // Scrape whatismyipaddress to take our location
    let url = 'http://whatismyipaddress.com/ip/' + ip;
    
    // Noo, we're not scripting, we are using a browser, right?))
    let headers = { 
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0',
      'Content-Type' : 'application/x-www-form-urlencoded' 
    };
    
    // Make a GET request (note the ES6 destructuring: {url, headers} equals to {url: url, headers: headers})
    request.get({url, headers}, function(error, response, html) {
      if (!error && response.statusCode === 200) {
        
        // cheerio is something like jQuery in NodeJS. Nice, huh?
        let $ = cheerio.load(html);
        let geoInfo = $('#section_left_3rd').find('table').text();
        
        // Extract a specific data that we need from that text
        let lat = geoInfo.substr(geoInfo.indexOf('Latitude:') + 10, 5);
        let lon = geoInfo.substr(geoInfo.indexOf('Longitude:') + 11, 5);
        let city = geoInfo.substr(geoInfo.indexOf('City:') + 5).split('\n')[0];

        // Construct another url to request the weather data. Openweather are cool enough to give us an API end-point
        let weatherURL = `${WEATHER_API_BASE_URL}lat=${lat}&lon=${lon}&appid=2de143494c0b295cca9337e1e96b00e0`;
        
        // Same
        request.get({url: weatherURL, headers}, function(error, response, data) {
          if (!error && response.statusCode === 200) {
            let weatherData = JSON.parse(data);
            console.log(weatherData);
          } else {
            console.log(error);
          }
        });
        
      } else {
        console.log(error);
      }
    });
    
    // Satelize is another module -> it needs only an IP address, but the information is not precise enough. 

    // satelize.satelize({ip: ip}, function(err, geoData) {
    //   if (err) throw err;

    //   // if data is JSON, we may wrap it in js object 
    //   var obj = JSON.parse(geoData);
    //   console.log(obj);
    // });
  });
}
