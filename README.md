...work-in-progress Node.js/Express app that uses the [Alpha Vantage](https://www.alphavantage.co) Stock API.

## Installation

---

1. Clone the repo
2. Run `npm install`
3. Create a `.env` file in the root directory and add your Alpha Vantage API key as `API_KEY=your_api_key`
4. Run `npm start` to start the server
5. Navigate to `localhost:3000` in your browser

## Usage

---

The stock symbol is currently hardcoded to display the daily stock price.

To change the stock symbol, just edit the `symbol` varaible in `getStockData.js`.
