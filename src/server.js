/* Как включить сервер:
*
 */


const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.end('end')
});

server.listen(3000, () => console.log('hello'))

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/versusRoyaleDB")