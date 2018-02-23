var http = require("http");

var PORTOne = 7000;

var PORTTwo = 7500;

function niceRequest(request, response) {
    console.log(Object.keys);
    console.log(request.url);
    response.end("You have a very creative and unique way of thinking!")
}

function naughtyRequest(request, response) {
    response.end("You are dumb...")
}

var serverOne = http.createServer(niceRequest);

var serverTwo = http.createServer(naughtyRequest);

serverOne.listen(PORTOne, function() {

    console.log("Server listening on: http://localhost:" + PORTOne);
})

serverTwo.listen(PORTTwo, function() {
    console.log("Server listening on: http//localhost:" + PORTTwo);
});