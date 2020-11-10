const http = require('http');
const { v5: uuidv5 } = require('uuid');
const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';
const value='Hello World!';

var server = http.createServer(function(request, response) {
    let data = '';
    request.on('data', chunk => data += chunk);
    request.on('end', () => {
        const body=JSON.parse(data);
        const uuids=[];
        for(let i=0; i<body.requiredUuids; i++)
            uuids.push(uuidv5(value, MY_NAMESPACE));    
        response.writeHead(200, {"Content-Type": "application/json"});
        response.end(JSON.stringify(uuids));
    });
});

server.listen(process.env.PORT||3000);

