import express from 'express';
import { createFurnished ,getFurnished,updateFurnished,toggeled} from '../controllers/furnishedController.js';


const router = express.Router();

router.post('/createFurnished', createFurnished);
router.get('/getFurnished',  getFurnished);
router.put('/updateFurnished/:id',  updateFurnished);
router.patch('/toggled/:id',  toggeled);
// router.delete('/deleteAmenties/:id', authenticate, deleteAmenity);
// router.post('/uploadImage', upload.single('image'), uploadImage);
// router.delete('/deleteImage/:filename', deleteImage);



export default router;
