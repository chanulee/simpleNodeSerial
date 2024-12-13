const express = require('express');
const { SerialPort } = require('serialport');
const path = require('path');

const app = express();
const port = 3000;

// Create serial port connection
// Note: Replace 'COM3' with your Arduino port
const serialPort = new SerialPort({
    path: '/dev/cu.usbmodem2101',
    baudRate: 9600,
});

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/send', (req, res) => {
    const { number } = req.body;
    
    // Send the number to Arduino
    serialPort.write(number.toString(), (err) => {
        if (err) {
            console.error('Error writing to serial port:', err);
            return res.status(500).json({ error: 'Failed to send command' });
        }
        res.json({ message: `Sent command: ${number}` });
    });
});

// Error handling for serial port
serialPort.on('error', (err) => {
    console.error('Serial port error:', err);
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});