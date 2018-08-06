function getAndPrintHTML (options) {

  /* Add your code here */
  var https = require('https');

  https.get(options, function (response){

    var buffData = "";

    response.setEncoding('utf8');

    response.on('data', function (data) {
      buffData += data;
    });

    response.on('end', function(){
      console.log(buffData);
    })
  })
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

console.log(getAndPrintHTML (requestOptions));