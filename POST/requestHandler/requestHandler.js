function post(response, jObject) {
    console.log("Got the object as post request %j", jObject);
    response.writeHead(201, {"Content-Type": "text/plain"});
    response.end("Got the Object");
}

exports.post = post;
