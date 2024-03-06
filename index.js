const express = require("express");
const router = require("./routes/job");
const mongoose = require("mongoose");

const server = express();

server.use(express.json());

mongoose
  // .connect("mongodb://localhost:27017/jobapp")
  .connect("mongodb+srv://gupta_ji_813:G4RyLfJm1vbBivsg@cluster0.ugkcmbj.mongodb.net/")
  .then(() => {
    console.log("databasde connect successfully");
  })
  .catch((err) => {
    console.log("database connection failed", err);
  });

server.use("/api/v1/job/", router);
const port = 10000;
server.listen(port, () => {
  console.log("server is up and running on port 5000");
});
