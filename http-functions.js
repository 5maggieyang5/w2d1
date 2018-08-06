module.exports = function getHTML (options, callback) {
    /* Your code here */
  var https = require('https');

  https.get(options, function (response){
    var buffData = "";
    response.setEncoding('utf8');

    response.on('data', function (data) {
      buffData += data;
    });

    response.on('end', function() {
      callback(buffData);
    });

  })
};
