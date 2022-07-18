const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;
app.use(express.static("public"));

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view options", { layout: false });
app.set("/ejs", (req, res) => {
  res.render("index");
});
app.get("/", function (req, res) {
  res.render("index", { name: "Chuka" });
});
app.get("/404", function (req, res) {
  res.render("404", { message: "oops" });
});

app.get("/js", function (req, res) {
  var data = {
    name: "John",
    hobbies: ["playing football", "playing chess", "cycling"],
  };
  res.render("js", { data: data });
});

app.get("/cake", (req, res) => {
  let data = {
    text: ["Cinnamon Rolls", "Yeast Donuts", "Pumpkin Pie"],
    image: ["/images/CR-1.jpeg", "/images/CR-2.webp", "/images/CR-3.jpeg"],
  };
  res.render("cake", { data: data });
});

app.listen(PORT);
