const express = require("express");
const server = express();
const morgan = require("morgan");
const roter = require("./router/index");

server.use(morgan("dev"));
server.use(express.json());

server.use(roter);

module.exports = server;
