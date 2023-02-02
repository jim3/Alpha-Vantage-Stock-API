require("dotenv").config();

const apiKey = `${process.env.API_KEY}`;
const func = "TIME_SERIES_DAILY_ADJUSTED";
const baseURL = `https://www.alphavantage.co/query?`;

const getStockData = async (symbol) => {
    try {
        const endPoint = `function=${func}&symbol=${symbol}&apikey=${apiKey}`;
        const url = baseURL + endPoint;        
        const res = await fetch(url);
        const data = await res.json();
        const date = Object.keys(data["Time Series (Daily)"]);
        const open = Object.values(data["Time Series (Daily)"]).map((stock) => stock["1. open"]);
        const high = Object.values(data["Time Series (Daily)"]).map((stock) => stock["2. high"]);
        const low = Object.values(data["Time Series (Daily)"]).map((stock) => stock["3. low"]);
        const close = Object.values(data["Time Series (Daily)"]).map((stock) => stock["4. close"]);
        const volume = Object.values(data["Time Series (Daily)"]).map((stock) => stock["5. adjusted close"]);
        const adjustedClose = Object.values(data["Time Series (Daily)"]).map((stock) => stock["6. volume"]);
        const dividendAmount = Object.values(data["Time Series (Daily)"]).map((stock) => stock["7. dividend amount"]);
        const splitCoefficient = Object.values(data["Time Series (Daily)"]).map((stock) => stock["8. split coefficient"]);
        return {
            date: date,
            open: open,
            high: high,
            low: low,
            close: close,
            volume: volume,
            adjustedClose: adjustedClose,
            dividendAmount: dividendAmount,
            splitCoefficient: splitCoefficient,
        };
    } catch (error) {
        console.log(error);
    }
};

module.exports = getStockData;