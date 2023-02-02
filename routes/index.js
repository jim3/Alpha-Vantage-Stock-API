const express = require("express");
const router = express.Router();
const getStockData = require("../services/getStockData");

router.get("/", async (req, res, next) => {
    res.render("index", { title: "Home" });
});

router.post("/", async (req, res) => {
    const symbol = req.body.stocksymbol;
    const stockData = await getStockData(symbol);

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
