import express from 'express';
import { createTransition, getTransition, updateTransition, toggeled } from '../controllers/transitiveController.js';
// import { uploadMultiple } from '../config/multerConfig.js';
// import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/createTransition',  createTransition);
router.get('/getTransition', getTransition);
router.put('/updateTransition/:id',   updateTransition);
router.patch('/toggled/:id',  toggeled);


export default router;
