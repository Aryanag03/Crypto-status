# Crypto Price Tracker

A Node.js application that fetches cryptocurrency data from CoinGecko, stores it in MongoDB, and provides APIs to retrieve the data.

## Features

- Fetches and stores the current price, market cap, and 24-hour change of **Bitcoin**, **Ethereum**, and **Matic** every 2 hours.
- `/api/stats` API: Returns the latest data for a requested cryptocurrency.
- `/api/deviation` API: Returns the standard deviation of the price for the last 100 records of a requested cryptocurrency.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database to store cryptocurrency data.
- **Axios**: HTTP client for making API requests.
- **CoinGecko API**: Used to fetch cryptocurrency data.

## Prerequisites

1. Install [Node.js](https://nodejs.org/).
2. Install [MongoDB](https://www.mongodb.com/try/download/community).
3. REST client like [Postman](https://www.postman.com/) or `curl`.

## Setup and Run Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/crypto-price-tracker.git
   cd crypto-price-tracker
