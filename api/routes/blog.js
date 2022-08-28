var express = require('express');
var contentful = require('contentful');

var SPACE_ID = '9b8utgjydzp6';
var ACCESS_TOKEN = 'dea0eef068c5f0fbfdfcd4ff955a3850e10603aba539250d2b1b332dac8f6d66';

var router = express.Router();
var client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('hello');
  getBlogEntries();
  res.send('wtf');
});

function getBlogEntries() {
  console.log('hello');
  client.getEntries()
  .then(function (entries) {
    // log the title for all the entries that have it
    entries.items.forEach(function (entry) {
      if(entry.fields.productName) {
        console.log(entry.fields.productName)
      }
    })
  })
}

module.exports = router;
