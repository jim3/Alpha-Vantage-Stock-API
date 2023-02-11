const express = require("express");
const router = express.Router();
const getEconomics = require("../services/getEconomics");

router.get("/", async (req, res) => {
    const economicData = await getEconomics();

    res.render("economics", {
        month: economicData.month,
        percentage: economicData.percentage,
    });
});

module.exports = router;

// const economicDataCollection = client.db("alpha_vantage").collection("economics");
// const economicData = await economicDataCollection.find().toArray();
