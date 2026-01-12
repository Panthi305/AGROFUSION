import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Import your routes (In ES Modules, you MUST include the .js extension)
import contactRoutes from './routes/contact.js';
import locationRoutes from './routes/location.js';

// Initialize environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Essential for reading the contact form data

// Use Routes
app.use('/api/contact', contactRoutes);
app.use('/api/location', locationRoutes);

// Test Route
app.get('/', (req, res) => {
    res.send('JG Agro Fusion Backend is running properly.');
});

app.listen(PORT, () => {
    console.log(`🚀 Server is live at http://localhost:${PORT}`);
});