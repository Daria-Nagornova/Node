const http = require('http');
const api = require('./api');

const server = http.createServer((request, response) => {

    if(request.url === '/request') api.requestData();

    response.end();

});

server.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000/');
});
