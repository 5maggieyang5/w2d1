function getHTML (options, callback) {

  /* Add your code here */
  var https = require('https');

  https.get(options, function (response){

    var buffData = "";

    response.setEncoding('utf8');

    response.on('data', function (data) {
      buffData += data;
    });

    response.on('end', function( ) {
      callback(buffData);
    });
  })
}


function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);