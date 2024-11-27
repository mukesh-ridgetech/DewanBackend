import express from 'express';
import {
  getAllSchedules,
  getScheduleById,
  createSchedule,
  updateSchedule,
  deleteSchedule,
} from '../controllers/sheduleController.js';

const router = express.Router();

router.get('/getShedule', getAllSchedules); // Get all schedules
router.get('/:id', getScheduleById); // Get a schedule by ID
router.post('/createShedule', createSchedule); // Create a new schedule
router.put('/:id', updateSchedule); // Update a schedule
router.delete('/:id', deleteSchedule); // Delete a schedule

export default router;
