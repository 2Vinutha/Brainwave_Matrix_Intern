const express = require('express');
const app = express();

app.use(express.static('public')); // Serve index.html

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from Vercel + Express 👋', timeUtc: new Date().toISOString() });
});

module.exports = app;
