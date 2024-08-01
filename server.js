const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello World' });
});

// Start server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});