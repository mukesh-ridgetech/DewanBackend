import Message from '../models/messageModel.js';

// Get all messages
export const getAllMessages = async (req, res) => {
    try {
        const messages = await Message.find();
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new message
export const createMessage = async (req, res) => {
    const { email, status } = req.body;
    try {
        const newMessage = new Message({ email, status });
        await newMessage.save();
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a single message by ID
export const getMessageById = async (req, res) => {
    const { id } = req.params;
    try {
        const message = await Message.findById(id);
        if (!message) return res.status(404).json({ message: "Message not found" });
        res.status(200).json(message);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a message by ID
export const updateMessage = async (req, res) => {
    const { id } = req.params;
    const { email, status } = req.body;
    try {
        const updatedMessage = await Message.findByIdAndUpdate(
            id,
            { email, status },
            { new: true } // Return the updated document
        );
        if (!updatedMessage) return res.status(404).json({ message: "Message not found" });
        res.status(200).json(updatedMessage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a message by ID
export const deleteMessage = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedMessage = await Message.findByIdAndDelete(id);
        if (!deletedMessage) return res.status(404).json({ message: "Message not found" });
        res.status(200).json({ message: "Message deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
