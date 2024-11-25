import express from 'express';
import {
    createTrending,
    getAllTrending,
    getTrendingById,
    updateTrending,
    deleteTrending,
} from '../controllers/trendingPropertiesController.js';

const router = express.Router();

// Routes
router.post('/createTrending', createTrending); // Create
router.get('/getTrending', getAllTrending); // Read All
router.get('/getByIdTrending/:id', getTrendingById); // Read by ID
router.put('/updateTrending/:id', updateTrending); // Update
router.delete('/deleteTrending/:id', deleteTrending); // Delete

export default router;