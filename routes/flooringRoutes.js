import express from 'express';
import { createFloring ,getFloring,updateFloring,toggeled} from '../controllers/flooringController.js';


const router = express.Router();

router.post('/createFloring', createFloring);
router.get('/getFloring',  getFloring);
router.put('/updateFloring/:id',  updateFloring);
router.patch('/toggled/:id',  toggeled);
// router.delete('/deleteAmenties/:id', authenticate, deleteAmenity);
// router.post('/uploadImage', upload.single('image'), uploadImage);
// router.delete('/deleteImage/:filename', deleteImage);



export default router;
