const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public'))); // ✅ Serve static files

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from Vercel + Express 👋', timeUtc: new Date().toISOString() });
});

module.exports = app;
