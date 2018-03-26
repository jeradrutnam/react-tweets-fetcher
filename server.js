'use strict';

const OAuth =  require('oauth');
const express = require('express');
const ip = require('ip');
const config = require('./config.js');

const server = express();
const oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  config.consumer_key,
  config.consumer_secret,
  '1.0A',
  null,
  'HMAC-SHA1'
);

const app = {
  allowOrigin: function(response){
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Request-Method', '*');
    response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    response.setHeader('Access-Control-Allow-Headers', '*');
  }
};

server.get('/twitter/get', (request, response) => {
  app.allowOrigin(response);

  oauth.get(
    'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=' + request.query.screen_name + '&count=' + request.query.count,
    config.access_token,
    config.access_token_secret,
    function (e, data, res){
      if (e){
        console.error('[ERROR] ' + e.statusCode + ': ' + JSON.parse(e.data).errors[0].message);
      }
      else {
        console.log('[INFO] Get tweets: ' + request.url);
        response.json(JSON.parse(data));
      }
    }
  );
});

server.get('/twitter/post', (request, response) => {
  app.allowOrigin(response);

  oauth.post(
    'https://api.twitter.com/1.1/statuses/update.json',
    config.access_token,
    config.access_token_secret,
    { status: request.query.status },
    '',
    function (e, data, res){
      if (e){
        console.error('[ERROR] ' + e.statusCode + ': ' + JSON.parse(e.data).errors[0].message);
      }
      else {
        console.log('[INFO] Post tweet: ' + request.query.status);
      }
    }
  );
});

server.listen(3001);

console.log('Server started!');
console.log(' ');
console.log('You can now use the server at below url.');
console.log(' ');
console.log('  Local:            http://localhost:3001/');
console.log('  On Your Network:  http://' + ip.address() + ':3001/');
console.log(' ');
