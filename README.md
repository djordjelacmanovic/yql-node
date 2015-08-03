yql-node
=========

A small module providing utility methods for accessing YQL API. Provides optional OAuth access helper.
Most other node modules for YQL failed for me on large query strings so this one uses POST method.

## Installation

` npm install yql-node --save `

## Usage
```javascript
  var yql = require('yql-node'),
      yqlWithOAuth = yql.withOAuth('CONSUMER KEY','CONSUMER SECRET'),
      query = 'select * from html where url="http://example.com"; ';

  //these two calls will produce same results

  yql.execute(query, function(error,response){
    console.log(response);
  });

  yqlWithOAuth.execute(query, function(error,response){
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

* 0.1.0 Initial release
