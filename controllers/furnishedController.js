




import Furnished from '../models/furnishedModel.js';
import path from 'path';
import fs from 'fs';


export const createFurnished = async (req, res) => {
    const { name, createdBy} = req.body;
    // const logos = req.files['logo'] ? req.files['logo'].map(file => file.path) : []; // Collect logo paths

    try {
        const newFurnished = new Furnished({ name, createdBy });
        await newFurnished.save();

        if(newFurnished){
          res.status(201).send({
            success: true,
            message: "Furnished created successfully",
            newFurnished,
            
          });
        }
        // res.status(201).json(newAmenity);
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "Errro in Creating Furnished",
        error,
      });
    }
};

export const getFurnished = async (req, res) => {
    try {
        const newFurnished = await Furnished.find();
        // res.status(200).json(amenities);

        res.status(201).send({
          success: true,
          message: "Amenties fetch successfully",
          newFurnished,
          
        });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "Errro in Fetching Furnished",
        error,
      });
    }
};


export const updateFurnished = async (req, res) => {
    const { id } = req.params;
    const { name, createdBy} = req.body;
    // const logos = req.files['logo'] ? req.files['logo'].map(file => file.path) : [];

    try {
        const updatedFurnished = await Furnished.findByIdAndUpdate(id, { name,createdBy }, { new: true });
      
        if(updatedFurnished){
          res.status(201).send({
            success: true,
            message: "Amenties updated successfully",
            updatedFurnished,
            
          });
        }
      
       
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "Errro in updating Furnished",
        error,
      });
    }
};




export const toggeled = async(req,res)=>{
  try {

   const { id } = req.params;
  

   // Find the admin by ID
   let Furnishe = await Furnished.findById(id);
   if(Furnishe.status ==='Active'){
    Furnishe.status = "Inactive";
   }
   else{
    Furnishe.status = "Active"
   }



 const newFurnished =  await Furnishe.save();


   if(newFurnished){
       res.status(201).send({
           success: true,
           message: "User Status updated",
           newFurnished
         });
   }
   
  } catch (error) {
   res.status(500).send({
       success: false,
       message: "Errro in updating Furnished status",
       error,
     });
  }
}



  
