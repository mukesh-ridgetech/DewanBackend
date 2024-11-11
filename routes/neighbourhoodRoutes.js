import express from 'express';
import { createNeighborhood ,getNeighborhood,updateNeighborhood,toggeled} from '../controllers/neighborhoodController.js';


const router = express.Router();

router.post('/createNeighborhood', createNeighborhood);
router.get('/getNeighborhood',  getNeighborhood);
router.put('/updateNeighborhood/:id',  updateNeighborhood);
router.patch('/toggled/:id',  toggeled);
// router.delete('/deleteAmenties/:id', authenticate, deleteAmenity);
// router.post('/uploadImage', upload.single('image'), uploadImage);
// router.delete('/deleteImage/:filename', deleteImage);



export default router;
