const express = require("express");
const app = express();
const port = 3000;

app.get("/",(req, res) => {
    res.write("<h1>welcomw to my home page</h1>");
    res.write("<h1>welcomw to my agan home page</h1>");
    res.send();
});

app.get("/about",(req, res) => {
    res.send("welcomw to my about page");
});

app.get("/contact",(req, res) => {
res.send("welcomw to my contact page");
});

app.get("/temp",(req, res) => {
res.send({
    id: 1,
    name: "nikunj",
});
});

app.listen(port, () => {
    console.log(`listing to the port ${port}`);
});
