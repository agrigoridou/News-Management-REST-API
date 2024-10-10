const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/news', require('./routes/newsRoutes'));
app.use('/api/topics', require('./routes/topicRoutes'));
app.use('/api/comments', require('./routes/commentRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
