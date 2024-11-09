import express from 'express';
const app = express();

// Middleware to handle CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-api-key');
  next();
});

// Mock data for Orders
const orders = [
  { id: 1, item: 'Laptop', quantity: 1 },
  { id: 2, item: 'Phone', quantity: 2 },
  { id: 3, item: 'Headphones', quantity: 1 },
  { id: 4, item: 'Keyboard', quantity: 3 },
  { id: 5, item: 'Mouse', quantity: 1 }
];

// Mock data for Shipment status
const shipmentStatus = {
  1: 'Shipped',
  2: 'Not Shipped',
  3: 'Shipped',
  4: 'Not Shipped',
  5: 'Shipped'
};

// Orders Service
app.get('/orders', (req, res) => {
  res.json({
    success: true,
    orders
  });
});

// Middleware to check API key for /shipment
app.use('/shipment', (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  const allowedApiKey = 'AIzaSyAB34QVZFzX7Osp8vk0L5aIRV88j4FaJd0'; // Replace with the actual API key for CUST-B

  if (apiKey === allowedApiKey) {
    next(); // Allow access
  } else {
    res.status(403).json({
      success: false,
      message: 'Forbidden: You are not authorized to access this resource.'
    });
  }
});

// Shipment Service
app.get('/shipment', (req, res) => {
  res.json({
    success: true,
    shipmentStatus
  });
});

// Default Route
app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});

