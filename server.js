const express = require("express");
const cors = require("cors");
const authorsRouter = require("./authors/authors-router");

const server = express();

server.use(cors());
server.use(express.json());

server.use("/api", authorsRouter);
server.get("/", (req, res) => {
  res.json({ message: "Welcome to the server" });
});

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: "Something went wrong" });
});

module.exports = server;
