require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

const apiKey = `${process.env.API_KEY}`;
const ticker = "MSFT";
const func = "NEWS_SENTIMENT";
const baseURL = `https://www.alphavantage.co/query?`;

const getStockNews = async () => {
    try {
        const endPoint = `function=${func}&tickers=${ticker}&apikey=${apiKey}`;
        const getURL = baseURL + endPoint;
        const res = await fetch(getURL);
        const data = await res.json();

        const title = Object.values(data["feed"]).map((e) => e["title"]);
        const url = Object.values(data["feed"]).map((e) => e["url"]);
        const summary = Object.values(data["feed"]).map((e) => e["summary"]);
        
        mydb(title, url, summary); // call mydb before the return

        return {
            title: title,
            url: url,
            summary: summary,
        };
    } catch (error) {
        console.log(error);
    }
};

// mongodb atlas
const uri = `mongodb+srv://${process.env.MONGO_DB_CONNECTION_STRING}`;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});

// Update the mydb function to accept the callers variables as arguments
const mydb = async (title, url, summary) => {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas");
        const stockDataCollection = client.db("alpha_vantage").collection("stocks");
        await stockDataCollection.insertOne({
            title: title,
            url: url,
            summary: summary,
        });
    } catch (err) {
        console.error("Error connecting to MongoDB Atlas:", err);
    }
};

module.exports = getStockNews;
