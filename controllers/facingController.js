




import Facing from '../models/facingModel.js';
import path from 'path';
import fs from 'fs';


export const createFacing = async (req, res) => {
    const { name, createdBy} = req.body;
    // const logos = req.files['logo'] ? req.files['logo'].map(file => file.path) : []; // Collect logo paths

    try {
        const newFacing = new Facing({ name, createdBy });
        await newFacing.save();

        if(newFacing){
          res.status(201).send({
            success: true,
            message: "Facing created successfully",
            newFacing,
            
          });
        }
        // res.status(201).json(newAmenity);
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "Errro in Creating Facing",
        error,
      });
    }
};

export const getFacing = async (req, res) => {
    try {
        const newFacing = await Facing.find();
        // res.status(200).json(amenities);

        res.status(201).send({
          success: true,
          message: "Amenties fetch successfully",
          newFacing,
          
        });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "Errro in Fetching Facing",
        error,
      });
    }
};


export const updateFacing = async (req, res) => {
    const { id } = req.params;
    const { name, createdBy} = req.body;
    // const logos = req.files['logo'] ? req.files['logo'].map(file => file.path) : [];

    try {
        const updatedFacing = await Facing.findByIdAndUpdate(id, { name,createdBy }, { new: true });
      
        if(updatedFacing){
          res.status(201).send({
            success: true,
            message: "Amenties updated successfully",
            updatedFacing,
            
          });
        }
      
       
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "Errro in updating Facing",
        error,
      });
    }
};




export const toggeled = async(req,res)=>{
  try {

   const { id } = req.params;
  

   // Find the admin by ID
   let Facings = await Facing.findById(id);
   if(Facings.status ==='Active'){
    Facings.status = "Inactive";
   }
   else{
    Facings.status = "Active"
   }



 const newFacings =  await Facings.save();


   if(newFacings){
       res.status(201).send({
           success: true,
           message: "fencing Status updated",
           newFacings
         });
   }
   
  } catch (error) {
   res.status(500).send({
       success: false,
       message: "Errro in updating fencing status",
       error,
     });
  }
}



  
