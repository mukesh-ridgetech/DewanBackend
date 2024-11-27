import Shedule from '../models/shedulModel.js';

// Get all schedules
export const getAllSchedules = async (req, res) => {
  try {
    const schedules = await Shedule.find().populate('properties');
    res.status(200).json(schedules);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a schedule by ID
export const getScheduleById = async (req, res) => {
  try {
    const schedule = await Shedule.findById(req.params.id).populate('properties');
    if (!schedule) return res.status(404).json({ message: 'Schedule not found' });
    res.status(200).json(schedule);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new schedule
export const createSchedule = async (req, res) => {
  try {
    const newSchedule = new Shedule(req.body);
    await newSchedule.save();
    res.status(201).json(newSchedule);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a schedule by ID
export const updateSchedule = async (req, res) => {
  try {
    const updatedSchedule = await Shedule.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedSchedule) return res.status(404).json({ message: 'Schedule not found' });
    res.status(200).json(updatedSchedule);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a schedule by ID
export const deleteSchedule = async (req, res) => {
  try {
    const deletedSchedule = await Shedule.findByIdAndDelete(req.params.id);
    if (!deletedSchedule) return res.status(404).json({ message: 'Schedule not found' });
    res.status(200).json({ message: 'Schedule deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
