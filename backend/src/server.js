const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();
const connectDB = require('./config/db');

// Connect to Database
connectDB();

// Register Models
require('./models/User');
require('./models/Admin');
require('./models/Job');
require('./models/Application');
require('./models/Company');
require('./models/Skill');

const app = express();

// Middleware
app.use(helmet());
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3000', 'https://centennial-infotech-hiring.netlify.app', 'https://talentsolution.onrender.com'], // Or simply '*' but explicit is safer
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
}));
app.use(express.json());
app.use(morgan('dev'));

// Basic Route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Job Portal API' });
});

// Health API Endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'API is healthy and running' });
});

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/jobs', require('./routes/jobRoutes'));
app.use('/api/applications', require('./routes/applicationRoutes'));



// Port configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
