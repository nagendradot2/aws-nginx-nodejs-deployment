const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// Bike data
const bikes = [
  {
    id: 1,
    name: "Royal Enfield Classic 350",
    price: 190000,
    image: "https://via.placeholder.com/200",
    description: "Powerful cruiser bike"
  },
  {
    id: 2,
    name: "KTM Duke 200",
    price: 210000,
    image: "https://via.placeholder.com/200",
    description: "Sporty street bike"
  },
  {
    id: 3,
    name: "Yamaha R15",
    price: 180000,
    image: "https://via.placeholder.com/200",
    description: "Racing style bike"
  }
];

// API
app.get('/api/bikes', (req, res) => {
  res.json(bikes);
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
