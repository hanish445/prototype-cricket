const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/status', (req, res) => {
    res.json({ message: "Cricket club live "});
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});