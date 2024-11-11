import express from 'express';
import { createFacing ,getFacing,updateFacing,toggeled} from '../controllers/facingController.js';


const router = express.Router();

router.post('/createFacing', createFacing);
router.get('/getFacing',  getFacing);
router.put('/updateFacing/:id',  updateFacing);
router.patch('/toggled/:id',  toggeled);
// router.delete('/deleteAmenties/:id', authenticate, deleteAmenity);
// router.post('/uploadImage', upload.single('image'), uploadImage);
// router.delete('/deleteImage/:filename', deleteImage);



export default router;
