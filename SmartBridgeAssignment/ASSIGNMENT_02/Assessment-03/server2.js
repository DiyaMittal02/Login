const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse JSON requests
app.use(express.json());  // This will parse incoming JSON requests automatically

// Test route to ensure the server is working
app.get('/', (req, res) => {
    res.send('Express server is running on port 5000!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
