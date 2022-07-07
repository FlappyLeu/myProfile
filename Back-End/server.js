const express = require("express");
const app = express();
const port = 3000;
const nameJson = require("./data/name.json");
const ageJson = require("./data/age.json");
const majorJson = require("./data/major.json");
const fs = require("fs");
const image = `${__dirname}/data/profile.jpg`;
const profile = require("./data/profile.json");
const disc = require("./data/description.json");
const cors = require("cors");

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.get("/api/:name", cors(), (req, res) => {
  if (req.params.name == "name") {
    res.send(nameJson);
  } else if (req.params.name == "age") {
    res.send(ageJson);
  } else if (req.params.name == "major") {
    res.send(majorJson);
  } else if (req.params.name == "picture") {
    res.send(image);
  } else if (req.params.name == "profile") {
    res.send(profile);
  } else if (req.params.name == "description") {
    res.send(disc);
  }
  res.end();
});

app.listen(port);
