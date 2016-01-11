yql-node
=========
[![NPM](https://nodei.co/npm/yql-node.png?compact=true)](https://nodei.co/npm/yql-node/)

A small module providing utility methods for accessing YQL API. Provides optional OAuth access helper.
Most other node modules for YQL failed for me on large query strings so this one uses POST method.

Modified to support returning json with a property called format, and a chainable constructor function.

## Installation

` npm install yql-node --save `

## Usage
```javascript
  //call public endpoints out of the box by simple require
  var yqlXML = require('yql-node');
  var yql = require('yql-node').formatAsJSON();
  //or set the instance to use OAuth and non-public endpoint like this
  var yqlWithOAuthXML = require('yql-node').withOAuth('CONSUMER KEY','CONSUMER SECRET');
  var yqlWithOAuth = require('yql-node').formatAsJSON().withOAuth('CONSUMER KEY','CONSUMER SECRET');
  
  var query = 'select * from html where url="http://example.com"; ';

  //these two calls will produce same results
  
  //response passed to your callback will a string containing the YQL query result
  //so you read data straight from it
  
  yql.execute(query, function(error,response){
    console.log("yql:");
    console.log(response);
  });
  
  yql.formatAsXML().execute(query, function(error,response){
    console.log("yql as XML:");
    console.log(response);
  });


  yqlXML.execute(query, function(error,response){
    console.log("yqlXML:");
    console.log(response);
  });
  yqlXML.format = 'json';
  yqlXML.execute(query, function(error,response){
    console.log("yqlXML as json:");
    console.log(response);
  });


  yqlWithOAuth.execute(query, function(error,response){
    console.log("yqlOAuth:");
    console.log(response);
  });
```
## Dependencies and credits

[needle] (https://www.npmjs.com/package/needle)
[oauth]  (https://www.npmjs.com/package/oauth)

## Contributing

If you find yourself wishing for a feature it doesn't have - feel free to fork, add it and generate a pull request.
All contributions welcome.

## Licence

[MIT] (https://github.com/djordjelacmanovic/yql-node/blob/master/LICENSE)

## Release History
* 0.1.5 Bug fixes and example improvement 
* 0.1.0 Initial release
