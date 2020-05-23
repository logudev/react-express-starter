const express = require('express');
const customers = require('./customers');

const app = express();

app.get('/api/customers', (req, res) => {
    res.json(customers);
});

app.listen(5000, () => console.log('Server started on port 5000'));