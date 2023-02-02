const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("./routes/index"));
app.use("/about", require("./routes/about"));

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
