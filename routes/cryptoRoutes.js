const express = require('express');
const Crypto = require('../models/Crypto');
const router = express.Router();

// Task 2: Get Latest Data
router.get('/stats', async (req, res) => {
    const { coin } = req.query;
    if (!coin) return res.status(400).json({ error: 'Coin is required.' });

    try {
        const latestData = await Crypto.findOne({ coin }).sort({ timestamp: -1 });
        if (!latestData) return res.status(404).json({ error: 'No data found for the requested coin.' });

        res.json({
            price: latestData.price,
            marketCap: latestData.marketCap,
            "24hChange": latestData.change24h,
        });
    } catch (error) {
        res.status(500).json({ error: 'Server error.' });
    }
});

// Task 3: Get Standard Deviation
router.get('/deviation', async (req, res) => {
    const { coin } = req.query;
    if (!coin) return res.status(400).json({ error: 'Coin is required.' });

    try {
        const prices = await Crypto.find({ coin }).sort({ timestamp: -1 }).limit(100).select('price -_id');
        if (prices.length === 0) return res.status(404).json({ error: 'No data found for the requested coin.' });

        const priceValues = prices.map((record) => record.price);
        const mean = priceValues.reduce((sum, value) => sum + value, 0) / priceValues.length;
        const variance = priceValues.reduce((sum, value) => sum + (value - mean) ** 2, 0) / priceValues.length;
        const deviation = Math.sqrt(variance);

        res.json({ deviation: deviation.toFixed(2) });
    } catch (error) {
        res.status(500).json({ error: 'Server error.' });
    }
});

module.exports = router;
