const express = require("express");
const router = express.Router();
const getStockNews = require("../services/getStockNews");

router.get("/", async (req, res, next) => {
    const stockNews = await getStockNews();
    
    res.render("news", {        
        title: stockNews.title,
        url: stockNews.url,
        summary: stockNews.summary,
    });
});

module.exports = router;
