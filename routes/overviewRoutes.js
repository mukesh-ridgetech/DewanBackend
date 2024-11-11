import express from 'express';
import { createOverview, getOverviews, updateOverview, deleteOverview } from '../controllers/overviewController.js';
import { uploadMultiple } from '../config/multerConfig.js';

const router = express.Router();

router.post('/CreateOverview',  createOverview);
router.get('/getOverview', getOverviews);
router.put('/updateOverview/:id', updateOverview);
router.delete('/deleteOverview/:id', deleteOverview);

export default router;
