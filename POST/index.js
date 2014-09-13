var server = require("./server/server");
var route = require("./route/route");
var requestHandler = require("./requestHandler/requestHandler");

var handle = {};

handle["/post"] = requestHandler.post;

server.start(route.route, handle);
