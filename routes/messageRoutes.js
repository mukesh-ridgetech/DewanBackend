import express from 'express';
import {
    getAllMessages,
    createMessage,
    getMessageById,
    updateMessage,
    deleteMessage,
} from '../controllers/messageController.js';

const router = express.Router();

// Define routes for message CRUD operations
router.get('/getMessage', getAllMessages); // Get all messages
router.post('/createMessage', createMessage); // Create a new message
router.get('/getbyIdMessage/:id', getMessageById); // Get a single message by ID
router.put('/updateMessage/:id', updateMessage); // Update a message by ID
router.delete('/:id', deleteMessage); // Delete a message by ID

export default router;
