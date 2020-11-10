const http = require('http');
const numHexChars=16;

var server = http.createServer(function(request, response) {
    let data = '';
    request.on('data', chunk => data += chunk);
    request.on('end', () => {
        const body=JSON.parse(data);
        const randomNumbers=[];
        for(let i=0; i<body.requiredNumbers; i++)
            randomNumbers.push([...Array(numHexChars)].map(() => Math.floor(Math.random() * 16).toString(16)).join(''));    
        response.writeHead(200, {"Content-Type": "application/json"});
        response.end(JSON.stringify(randomNumbers));
    });
});

server.listen(process.env.PORT||3000);

