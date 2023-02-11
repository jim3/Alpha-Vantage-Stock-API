require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

const apiKey = `${process.env.API_KEY}`;
const func = "UNEMPLOYMENT";
const baseURL = `https://www.alphavantage.co/query?`;

const getEconomics = async () => {
    try {
        const endPoint = `function=${func}&apikey=${apiKey}`;
        const getURL = baseURL + endPoint;
        const res = await fetch(getURL);
        const data = await res.json();

        // extract the data from the JSON object
        const month = Object.values(data["data"]).map((e) => e["date"]);
        const percentage = Object.values(data["data"]).map((e) => e["value"]);
        mydb(month, percentage); // call mydb

        return {
            month: month,
            percentage: percentage,
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
const mydb = async (month, percentage) => {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas");
        const economicDataCollection = client.db("alpha_vantage").collection("economics");
        await economicDataCollection.insertOne({
            month: month,
            percentage: percentage,
        });
    } catch (err) {
        console.error("Error connecting to MongoDB Atlas:", err);
    }
};

module.exports = getEconomics;

