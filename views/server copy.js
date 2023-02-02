const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

require("dotenv").config();
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("index", {});
});

// app.use("/", require("./routes/index"));

app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).send("ERROR created in app.use");
});

app.listen(port, () => {
    console.log(`Express server running on port ${port}`);
});
