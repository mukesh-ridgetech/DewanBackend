import express from 'express';
import { createBuilder, getBuilders, updateBuilder, deleteBuilder } from '../controllers/builderController.js';
import { uploadMultiple } from '../config/multerConfig.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/createBuilder',  uploadMultiple, createBuilder);
router.get('/getBuilder', getBuilders);
router.put('/updateBuilder/:id',  uploadMultiple, updateBuilder);
router.delete('/deleteBuilder/:id',  deleteBuilder);

export default router;
