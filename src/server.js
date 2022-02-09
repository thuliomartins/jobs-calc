const express = require("express");
const server = express();
const routes = require("./routes");

const PORT = 3000;

server.set("view engine", "ejs");

server.use(express.static("./public")); 

server.use(routes);

server.listen(PORT, () => console.log("Start Server"));