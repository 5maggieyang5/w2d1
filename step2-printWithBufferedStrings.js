function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  var https = require('https');

  https.get(requestOptions, function (response){

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


console.log(getAndPrintHTML());


