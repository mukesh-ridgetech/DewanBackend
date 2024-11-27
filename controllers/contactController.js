import Contact from "../models/contactModel.js";

// Create a new contact
export const createContact = async (req, res) => {
    try {


        const newContact = new Contact(req.body);
        await newContact.save();
        // const newContact = await Contact.create(req.body);
        res.status(201).json({ success: true, data: newContact });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all contacts
export const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json({ success: true, data: contacts });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get a single contact by ID
export const getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ success: false, message: "Contact not found" });
        }
        res.status(200).json({ success: true, data: contact });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Update a contact by ID
export const updateContact = async (req, res) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updatedContact) {
            return res.status(404).json({ success: false, message: "Contact not found" });
        }
        res.status(200).json({ success: true, data: updatedContact });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete a contact by ID
export const deleteContact = async (req, res) => {
    try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);
        if (!deletedContact) {
            return res.status(404).json({ success: false, message: "Contact not found" });
        }
        res.status(200).json({ success: true, message: "Contact deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
