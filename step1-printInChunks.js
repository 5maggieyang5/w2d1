var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  https.get(requestOptions, function (response){
    response.on('data', function (data) {
      console.log('Chunk of data: ', data);
    });
  })
  return "Data chunks: ";
}

console.log(getAndPrintHTMLChunks());

