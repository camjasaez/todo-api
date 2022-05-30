const { setUpServer } = require('./services/db/db');

const express = require('express');
const server = express();

const router = require('./api/routes/router');

server.use(express.json());

server.use('/api', router);

setUpServer(server);

module.exports = server;
