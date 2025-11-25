const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 5000;

// Example flight search using Skyscanner API
app.get('/api/flights', async (req, res) => {
  const { destination, dates } = req.query;
  
  try {
    const response = await axios.get(`https://api.skyscanner.net/apiservices/browseroutes/v1.0/US/USD/en-US/${origin}/${destination}/${dates}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching flight data');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
