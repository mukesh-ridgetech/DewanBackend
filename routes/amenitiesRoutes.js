import express from 'express';
import { createAmenity, getAmenities, updateAmenity, deleteAmenity,uploadImage,deleteImage,toggeled } from '../controllers/amenitiesController.js';
import { uploadMultiple } from '../config/multerConfig.js';
import { authenticate } from '../middleware/authMiddleware.js';
import upload from '../config/Single.js';

const router = express.Router();

router.post('/createAmenties', authenticate, uploadMultiple, createAmenity);
router.get('/getAmenties', authenticate, getAmenities);
router.put('/updateAmenties/:id', authenticate, uploadMultiple, updateAmenity);
router.patch('/toggled/:id', authenticate,  toggeled);
router.delete('/deleteAmenties/:id', authenticate, deleteAmenity);
router.post('/uploadImage', upload.single('image'), uploadImage);
router.delete('/deleteImage/:filename', deleteImage);



export default router;
