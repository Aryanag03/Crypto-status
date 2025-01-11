const express = require('express');
const mongoose = require('mongoose');
const cron = require('node-cron');
const fetchCryptoData = require('./jobs/fetchCryptoData');
const cryptoRoutes = require('./routes/cryptoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = 'mongodb+srv://aryanagarwal010903:0VhWRp0Wvac7DklU@cluster0.flg0y.mongodb.net/';

app.use(express.json());
app.use('/api', cryptoRoutes);

mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected.'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Schedule the background job
cron.schedule('0 */2 * * *', fetchCryptoData); // Runs every 2 hours

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
