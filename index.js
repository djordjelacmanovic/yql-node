var OAuth = require('oauth');
var needle = require('needle');

module.exports = {
  oauth : null,
  //sets this instance to use oauth
  withOAuth : function(consumer_key,consumer_secret){
    this.oauth = new OAuth.OAuth(
      'https://query.yahooapis.com/v1/yql/',
      'https://query.yahooapis.com/v1/yql/',
       consumer_key, //consumer key
       consumer_secret, //consumer secret
      '1.0',
      null,
      'HMAC-SHA1'
    );
    this.oauth.setClientOptions({ requestTokenHttpMethod: 'POST' });
    //returns reference to itself for chainability
    return this;
  },
  //executes a given query and fires the callback on finish
  execute: function(query, callback){
    if(this.oauth!=null){
      //oauth set so call authorized endpoint
      this.oauth.post('https://query.yahooapis.com/v1/yql',
	               '',
	               '',
	              {q:query},
                callback);
    }else{
      //no oauth so calling public endpoint
      needle
          .post("https://query.yahooapis.com/v1/public/yql",
           {q:query} ,
           { multipart: false },
            function(err,res){
              callback(err,res.body);
            });
    }
  }
}
