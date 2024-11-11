




import Amenity from '../models/amenitiesModel.js';
import path from 'path';
import fs from 'fs';


export const createAmenity = async (req, res) => {
    const { name, createdBy,logo } = req.body;
    // const logos = req.files['logo'] ? req.files['logo'].map(file => file.path) : []; // Collect logo paths

    try {
        const newAmenity = new Amenity({ name, logo, createdBy });
        await newAmenity.save();

        if(newAmenity){
          res.status(201).send({
            success: true,
            message: "Amenties created successfully",
            newAmenity,
            
          });
        }
        // res.status(201).json(newAmenity);
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "Errro in Creating Amenties",
        error,
      });
    }
};

export const getAmenities = async (req, res) => {
    try {
        const amenities = await Amenity.find();
        // res.status(200).json(amenities);

        res.status(201).send({
          success: true,
          message: "Amenties fetch successfully",
          amenities,
          
        });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "Errro in Fetching Amenties",
        error,
      });
    }
};

export const updateAmenity = async (req, res) => {
    const { id } = req.params;
    const { name, createdBy ,logo} = req.body;
    // const logos = req.files['logo'] ? req.files['logo'].map(file => file.path) : [];

    try {
        const updatedAmenity = await Amenity.findByIdAndUpdate(id, { name, logo, createdBy }, { new: true });
      
        if(updatedAmenity){
          res.status(201).send({
            success: true,
            message: "Amenties updated successfully",
            updatedAmenity,
            
          });
        }
      
       
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "Errro in updating Amenties",
        error,
      });
    }
};




export const toggeled = async(req,res)=>{
  try {

   const { id } = req.params;
  

   // Find the admin by ID
   let Amenity = await Amenity.findById(id);
   if(Amenity.status ==='Active'){
    Amenity.status = "Inactive";
   }
   else{
    Amenity.status = "Active"
   }



 const newAmenity =  await Amenity.save();


   if(newAmenity){
       res.status(201).send({
           success: true,
           message: "User Status updated",
           newAmenity
         });
   }
   
  } catch (error) {
   res.status(500).send({
       success: false,
       message: "Errro in updating Amenity status",
       error,
     });
  }
}

export const deleteAmenity = async (req, res) => {
    const { id } = req.params;
    try {
      const amenties=  await Amenity.findByIdAndDelete(id);
        res.status(204).send({
            massage:"Amenties delete successfully",
            amenties:amenties
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



export const uploadImage = async (req, res) => {
    // If no file is uploaded, return an error
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
  
    // Create the image URL based on the server's static folder path
    const imageUrl = `/uploads/${req.file.filename}`;
  
    try {
      res.status(201).json({
        message: 'Image uploaded successfully',
        imageUrl: imageUrl,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  


  export const deleteImage = async (req, res) => {
    const { filename } = req.params;
  
    // Path of the file to be deleted
    const filePath = path.join('uploads', filename);
  
    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        return res.status(404).json({ message: 'File not found' });
      }
  
      // Delete the file from the system
      fs.unlink(filePath, (err) => {
        if (err) {
          return res.status(500).json({ message: 'Error deleting file' });
        }
        res.status(200).json({ message: 'File deleted successfully' });
      });
    });
  };
  