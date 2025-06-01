const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

// Enable CORS for frontend requests
app.use(cors());

// Endpoint to get the API key
app.get('/api-key', (req, res) => {
    const apiKey = process.env.API_KEY;
    if (apiKey) {
        res.json({ apiKey });
    } else {
        res.status(404).json({ error: 'API key not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
