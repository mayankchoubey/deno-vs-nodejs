const http = require('http');
const upperBound=10000;

var server = http.createServer(function(request, response) {
    let data = '';
    request.on('data', chunk => data += chunk);
    request.on('end', () => {
        const body=JSON.parse(data);
        const randomNumbers=[];
        for(let i=0; i<body.requiredNumbers; i++)
            randomNumbers.push(Math.ceil(Math.random()*upperBound));    
        response.writeHead(200, {"Content-Type": "application/json"});
        response.end(JSON.stringify(randomNumbers));
    });
});

server.listen(process.env.PORT||3000);

