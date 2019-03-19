const express = require("express");

const postsRouter = require("./data/posts-router");
const cors = require("cors");
const server = express();

server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.send(`
      <h2>Posts API</h>
      <p>Welcome to WebApi-ii-challenge</p>
    `);
});

server.use("/api/posts", postsRouter);

module.exports = server;
