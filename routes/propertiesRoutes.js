import express from 'express';
import {filterProperties , createProperty, getAllProperties, getPropertyById, updateProperty, deleteProperty } from '../controllers/propertiesController.js';

const router = express.Router();

// Create a new property
router.post('/cretePropeties', createProperty);

// Get all properties
router.get('/getProperties', getAllProperties);
router.get('/filter', filterProperties);

// Get a specific property by ID
router.get('/getById/:id', getPropertyById);

// Update a specific property by ID
router.put('/updatePropeties/:id', updateProperty);

// Delete a specific property by ID
router.delete('/:id', deleteProperty);

export default router;
