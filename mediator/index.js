var http = require("http");
var myQueue = [];

var postOptions = {
    host: 'localhost',
    path: '/post',
    port: '8889',
    method: 'POST'
};

var getOptions = {
    host: 'localhost',
    path: '/get',
    port: '8888',
    method: 'GET'
};

callback = function(response) {
    var str = '';
    response.on('data', function (chunk) {
        str += chunk;
    });

    response.on('end', function () {
        console.log(str);
    });
};

getCallback = function(response) {
    var str = '';
    response.on('data', function (chunk) {
        str += chunk;
    });

    response.on('end', function () {
        console.log(str);
        myQueue.push(str);
    });
}

function getRequest() {
    try {
        var req = http.request(getOptions, getCallback);
        req.end();
    } catch (error) {
        console.log(error);
    }
}

function postRequest() {
    try {
        var req = http.request(postOptions, callback);
        var postObject = myQueue.pop();
        req.write(JSON.stringify(postObject));
        req.end();
    } catch (error) {
        console.log(error);
    }
}

setInterval(getRequest, 1000);
setInterval(postRequest, 2000);

