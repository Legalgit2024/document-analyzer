require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname)));

// API endpoint to get OpenAI key
app.get('/api/config', (req, res) => {
    res.json({
        apiKey: process.env.OPENAI_API_KEY
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
