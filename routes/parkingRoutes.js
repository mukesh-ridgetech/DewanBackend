import express from 'express';
import { createParking ,getParking,updateParking,toggeled} from '../controllers/parkingController.js';


const router = express.Router();

router.post('/createParking', createParking);
router.get('/getParking',  getParking);
router.put('/updateParking/:id',  updateParking);
router.patch('/toggled/:id',  toggeled);
// router.delete('/deleteAmenties/:id', authenticate, deleteAmenity);
// router.post('/uploadImage', upload.single('image'), uploadImage);
// router.delete('/deleteImage/:filename', deleteImage);



export default router;
