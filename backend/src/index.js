const express = require('express');
const cors = require('cors');
const connectMongoDb = require('./config/db.js');

const app = express();
const PORT = 3001;

connectMongoDb();

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.get('/api', (req, res) => {
    res.json({ message: 'Um oi do Backend!' });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
