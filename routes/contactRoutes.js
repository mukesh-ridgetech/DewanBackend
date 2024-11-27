import express from "express";
import {
    createContact,
    getAllContacts,
    getContactById,
    updateContact,
    deleteContact,
} from "../controllers/contactController.js";

const router = express.Router();

// Routes for CRUD operations
router.post("/createContact", createContact); // Create
router.get("/getContact", getAllContacts); // Read All
router.get("/getContactbyId/:id", getContactById); // Read Single
router.put("/updateContact/:id", updateContact); // Update
router.delete("/:id", deleteContact); // Delete

export default router;
