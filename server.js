const http = require('http');

const server = http.createServer ((req, res) => {
    if (res.url === '/') {
        res.end ('This is my first server, Welcome!!')
    }
    if (res.url === '/login') {
        res.end('This is my login page !!')
    }
    res.end(`Oops!!! The page youre looking for is not available`)

});

server.listen(5000)
