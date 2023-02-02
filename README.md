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

1. Enter stock symbol into your html form, e.g. `AAPL`
2. Click the `Submit` button
3. The server will make a request to the Alpha Vantage API and return the data to the client
4. The client will display the data in the browser
5. ...
