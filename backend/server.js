import express from 'express';
import booksRouter from './routes/book_rootes.js';
import categoriesRouter from './routes/category_routes.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();

const app = express();

// CORS configuration for Keycloak
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:8080'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5000;

app.use('/api/livres', booksRouter);
app.use('/api/categories', categoriesRouter);

// Test route that doesn't require auth
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

async function start() {
    try {
        await mongoose.connect(process.env.DB_URI);
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

start();