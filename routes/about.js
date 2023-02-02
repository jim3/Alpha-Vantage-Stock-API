const express = require("express");
const router = express.Router();

router.get("/about", async (req, res, next) => {
    res.render("about", { title: "About" });
});

module.exports = router;
