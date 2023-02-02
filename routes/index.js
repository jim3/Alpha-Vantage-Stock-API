const getStockData = require("../services/getStockData");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    const stockData = await getStockData();
    res.render("index", {
        date: stockData.date,
        open: stockData.open,
        high: stockData.high,
        low: stockData.low,
        close: stockData.close,
        volume: stockData.volume,
        adjustedClose: stockData.adjustedClose,
        dividendAmount: stockData.dividendAmount,
        splitCoefficient: stockData.splitCoefficient,
    });
});

module.exports = router;
