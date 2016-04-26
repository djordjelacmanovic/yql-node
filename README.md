yql-node
=========
[![NPM](https://nodei.co/npm/yql-node.png?compact=true)](https://nodei.co/npm/yql-node/)

A small module providing utility methods for accessing YQL API. Provides optional OAuth access helper.
Most other node modules for YQL failed for me on large query strings so this one uses POST method.

Modified to support returning json with a property called format, and a chainable constructor function.

It is also possible to set query parameters to utilize e.g. datatables.org. An example is provided below but you can also check their website for more information.

## Installation

` npm install yql-node --save `

## Usage
```javascript

  //call public endpoints out of the box by simple require

  var yqlXML = require('yql-node'); //will return XML results
  var yql = require('yql-node').formatAsJSON(); //will return JSON results

  //or set the instance to use OAuth and non-public endpoint like this
  var yqlWithOAuthXML = require('yql-node').withOAuth('CONSUMER KEY','CONSUMER SECRET'); //returns XML
  var yqlWithOAuth = require('yql-node').formatAsJSON().withOAuth('CONSUMER KEY','CONSUMER SECRET'); //returns JSON

  var query = 'select * from html where url="http://example.com"; ';

  //these two calls will produce same results

  //response passed to your callback will a string containing the YQL query result
  //so you read data straight from it

  //returns JSON
  yql.execute(query, function(error,response){
    console.log("yql:");
    console.log(response);
  });

  //after calling formatAsXML() it will return XML
  yql.formatAsXML().execute(query, function(error,response){
    console.log("yql as XML:");
    console.log(response);
  });

  //returns XML
  yqlXML.execute(query, function(error,response){
    console.log("yqlXML:");
    console.log(response);
  });

  //you can set the format via a property
  yqlXML.format = 'json';
  //and now it will return JSON
  yqlXML.execute(query, function(error,response){
    console.log("yqlXML as json:");
    console.log(response);
  });

  //this will call the non-public endpoint
  yqlWithOAuth.execute(query, function(error,response){
    console.log("yqlOAuth:");
    console.log(response);
  });
  
  //before calling any of the above you can use the following
  //to enable usage of datatables.org
  yql.setQueryParameter({
    env: 'store://datatables.org/alltableswithkeys'
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
* 0.2.1 Ability to pass query parameter to utilize datatables.org
* 0.2.0 Added ability to request json format of the response
* 0.1.5 Bug fixes and example improvement
* 0.1.0 Initial release
