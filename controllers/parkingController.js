




import Parking from '../models/parkingModel.js';
import path from 'path';
import fs from 'fs';


export const createParking = async (req, res) => {
    const { name, createdBy} = req.body;
    // const logos = req.files['logo'] ? req.files['logo'].map(file => file.path) : []; // Collect logo paths

    try {
        const newParking = new Parking({ name, createdBy });
        await newParking.save();

        if(newParking){
          res.status(201).send({
            success: true,
            message: "Parking created successfully",
            newParking,
            
          });
        }
        // res.status(201).json(newAmenity);
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "Errro in Creating Parking",
        error,
      });
    }
};

export const getParking = async (req, res) => {
    try {
        const newParking = await Parking.find();
        // res.status(200).json(amenities);

        res.status(201).send({
          success: true,
          message: "Parking fetch successfully",
          newParking,
          
        });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "Errro in Fetching Parking",
        error,
      });
    }
};


export const updateParking = async (req, res) => {
    const { id } = req.params;
    const { name, createdBy} = req.body;
    // const logos = req.files['logo'] ? req.files['logo'].map(file => file.path) : [];

    try {
        const updatedParking = await Parking.findByIdAndUpdate(id, { name,createdBy }, { new: true });
      
        if(updatedParking){
          res.status(201).send({
            success: true,
            message: "Amenties updated successfully",
            updatedParking,
            
          });
        }
      
       
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "Errro in updating Parking",
        error,
      });
    }
};




export const toggeled = async(req,res)=>{
  try {

   const { id } = req.params;
  

   // Find the admin by ID
   let Parkings = await Parking.findById(id);
   if(Parkings.status ==='Active'){
    Parkings.status = "Inactive";
   }
   else{
    Parkings.status = "Active"
   }



 const newParkings =  await Parkings.save();


   if(newParkings){
       res.status(201).send({
           success: true,
           message: "User Status updated",
           newParkings
         });
   }
   
  } catch (error) {
   res.status(500).send({
       success: false,
       message: "Errro in updating Parkings status",
       error,
     });
  }
}



  
