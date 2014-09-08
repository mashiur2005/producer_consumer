var server = require("./server/server");
var route = require("./route/route");
var requestHandler = require("./requestHandler/requestHandler");

var handle = {};

handle["/get"] = requestHandler.get;

server.start(route.route, handle);
