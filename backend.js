// backend/server.js

const express = require('express');
const si = require('systeminformation');

const app = express();
const port = process.env.PORT || 3000;

app.get('/temperature', async (req, res) => {
  try {
    const data = await si.cpuTemperature();
    res.json({ temperature: data.main });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
