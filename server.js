import express, { response } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import adminRoutes from './routes/adminRoutes.js';
import amenitiesRoutes from './routes/amenitiesRoutes.js';
import builderRoutes from './routes/builderRoutes.js';
import overviewRoutes from './routes/overviewRoutes.js';
import locationRoutes from './routes/locationRoutes.js';
import furnishedRoutes from './routes/furnishedRoutes.js'
import fencingRoutes from './routes/fencingRoutes.js'
import flooringRoutes from './routes/flooringRoutes.js'
import parkingRoutes from './routes/parkingRoutes.js'
import neighbourhoodRoutes from './routes/neighbourhoodRoutes.js'
import transitionRoutes from './routes/transitionRoutes.js'
import propertiesRoutes from './routes/propertiesRoutes.js'
import trendingRoutes from './routes/trendingRoutes.js'
import testinomialRoutes from './routes/testinomialRoutes.js'
import cors from 'cors'
// Initialize App and Configurations
dotenv.config()
const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

// Middleware
app.use(express.json()); // For parsing JSON requests

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/amenities', amenitiesRoutes);
app.use('/api/builders', builderRoutes);
app.use('/api/overviews', overviewRoutes);
app.use('/api/locations', locationRoutes);
app.use('/api/furnished', furnishedRoutes);
app.use('/api/fencing', fencingRoutes);
app.use('/api/flooring', flooringRoutes);
app.use('/api/parking', parkingRoutes);
app.use('/api/neighbourhood', neighbourhoodRoutes);
app.use('/api/transition', transitionRoutes);
app.use('/api/properties', propertiesRoutes);
app.use('/api/trending', trendingRoutes);
app.use('/api/testinomial', testinomialRoutes);


app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Deewan Realty</h1>');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
