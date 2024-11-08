const express = require('express');
const app = express();
const port = 3000;

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
app.get('/shipment/:orderId', (req, res) => {
    const orderId = parseInt(req.params.orderId, 10);
    const status = shipmentStatus[orderId];

    if (status) {
        res.json({
            success: true,
            orderId,
            status
        });
    } else {
        res.status(404).json({
            success: false,
            message: 'Order not found'
        });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

