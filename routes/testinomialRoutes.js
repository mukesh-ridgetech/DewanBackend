import express from 'express';
import {
    createTestinomial,
    getAllTestinomials,
    getTestinomialById,
    updateTestinomial,
    deleteTestinomial,
} from '../controllers/testinomailController.js'

const router = express.Router();

// CRUD Routes
router.post('/createTestinomial', createTestinomial); // Create
router.get('/getTestinomial', getAllTestinomials); // Read All
router.get('/getByIdtestinomial/:id', getTestinomialById); // Read One
router.put('/updateTestinomial/:id', updateTestinomial); // Update
router.delete('/deleteTestinomial/:id', deleteTestinomial); // Delete

export default router;
