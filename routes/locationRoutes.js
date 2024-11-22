import express from 'express';
import { createLocation, getLocations, updateLocation, deleteLocation } from '../controllers/locationController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/createlocation',  createLocation);
router.get('/getLoacation', getLocations);
router.put('/updatelocation/:id', authenticate, updateLocation);
router.delete('/deletelocation/:id', authenticate, deleteLocation);

export default router;
