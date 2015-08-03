var OAuth = require('oauth');
var needle = require('needle');
module.exports = {
  oauth : null,

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

    return this;
  },
  execute: function(query, callback){
    if(this.oauth!=null){
      this.oauth.post('https://query.yahooapis.com/v1/yql',
	               '',
	               '',
	              {q:query},
                callback);
    }else{
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
