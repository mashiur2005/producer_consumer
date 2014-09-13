var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for url " + pathname + " received.");

        try {
            if (request.method == 'GET') {
                route(pathname, handle, response);
            } else {
                response.writeHead(404, {"Content-Type": "text/plain"});
                response.write("Not Found");
                response.end();
            }
        } catch(error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(JSON.stringify(error.message));
            response.end();
        }
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}
exports.start = start;
