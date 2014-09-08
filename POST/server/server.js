var http = require("http");
var url = require("url");
var queryString = require('querystring');

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for url " + pathname + " received.");

        try {
            if (request.method == 'POST') {
                var chunk = '';
                request.on('data', function(data) {
                    chunk += data;
                });
                request.on('end', function() {
                    var queryObject = queryString.parse(chunk);
                    route(pathname, handle, response, queryObject);
                });
            } else {
                response.writeHead(403, {"Content-Type": "text/plain"});
                response.end("Forbidden");
            }
        } catch(error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(JSON.stringify(error.message));
            response.end();
        }
    }

    http.createServer(onRequest).listen(8889);
    console.log("Server has started.");
}
exports.start = start;
