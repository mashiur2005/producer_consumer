function get(response) {
    var jsonObject = {name : 'mashiur', message : 'Hello world'};
    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify(jsonObject));
    response.end();
}

exports.get = get;
