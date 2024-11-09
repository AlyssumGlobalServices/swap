import express from 'express';
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
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

// Shipment Service

app.get('/shipment', (req, res) => {
    res.json({
        success: true,
        shipmentStatus
    });
});


app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
