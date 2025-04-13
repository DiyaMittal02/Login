const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

let users = [
    { id: 1, name: "Amit", email: "amit@example.com" },
    { id: 2, name: "Shreya", email: "shreya@example.com" }
];

// ✅ Root route to fix "Cannot GET /"
app.get('/', (req, res) => {
    res.send('Welcome to the User API!');
});

// GET all users
app.get('/users', (req, res) => {
    res.json(users);
});

// POST new user
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    const newUser = {
        id: users.length + 1,
        name,
        email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT update user by ID
app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;

    const user = users.find(u => u.id === id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.name = name || user.name;
    user.email = email || user.email;
    res.json(user);
});

// DELETE user by ID
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === id);

    if (index === -1) return res.status(404).json({ message: 'User not found' });

    const deletedUser = users.splice(index, 1);
    res.json({ message: 'User deleted', user: deletedUser[0] });
});

app.listen(PORT, () => {
    console.log(`✅ Server is running at http://localhost:${PORT}`);
});
