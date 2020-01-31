var express = require("express");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))






app.get("/", function (req, res) {
    // res.send("Welcome to home Page!")
    res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.get("/dating", function (req, res) {
    // res.send("Welcome to home Page!")
    res.sendFile(path.join(__dirname, "/public/dating.html"));
});
app.get("/signin", function (req, res) {
    // res.send("Welcome to home Page!")
    res.sendFile(path.join(__dirname, "/public/signin.html"));
});
app.get("/createaccount", function (req, res) {
    // res.send("Welcome to home Page!")
    res.sendFile(path.join(__dirname, "/public/createaccount.html"));

});





app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});