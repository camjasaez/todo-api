const { setUpServer } = require('./services/db/db');

const cors = require('cors');
const express = require('express');
const server = express();

// Router index
const router = require('./api/routes/router');

server.use(express.json());
server.use(cors());
server.use('/api/v1', router);

setUpServer(server);

module.exports = server;
