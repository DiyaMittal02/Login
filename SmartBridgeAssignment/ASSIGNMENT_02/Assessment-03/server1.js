const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// GET /welcome route
app.get('/welcome', (req, res) => {
    res.json({ message: "Welcome to Express!" });
});

// Optional: Root route to avoid "Cannot GET /"
app.get('/', (req, res) => {
    res.send('Server is running. Go to /welcome for the message.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
