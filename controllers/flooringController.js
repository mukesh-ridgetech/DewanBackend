




import Floring from '../models/fooringModel.js';
import path from 'path';
import fs from 'fs';


export const createFloring = async (req, res) => {
    const { name, createdBy} = req.body;
    // const logos = req.files['logo'] ? req.files['logo'].map(file => file.path) : []; // Collect logo paths

    try {
        const newFloring = new Floring({ name, createdBy });
        await newFloring.save();

        if(newFloring){
          res.status(201).send({
            success: true,
            message: "Floring created successfully",
            newFloring,
            
          });
        }
        // res.status(201).json(newAmenity);
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "Errro in Creating Floring",
        error,
      });
    }
};

export const getFloring = async (req, res) => {
    try {
        const newFloring = await Floring.find();
        // res.status(200).json(amenities);

        res.status(201).send({
          success: true,
          message: "Floring fetch successfully",
          newFloring,
          
        });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "Errro in Fetching Floring",
        error,
      });
    }
};


export const updateFloring = async (req, res) => {
    const { id } = req.params;
    const { name, createdBy} = req.body;
    // const logos = req.files['logo'] ? req.files['logo'].map(file => file.path) : [];

    try {
        const updatedFloring = await Floring.findByIdAndUpdate(id, { name,createdBy }, { new: true });
      
        if(updatedFloring){
          res.status(201).send({
            success: true,
            message: "Floring updated successfully",
            updatedFloring,
            
          });
        }
      
       
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "Errro in updating Floring",
        error,
      });
    }
};




export const toggeled = async(req,res)=>{
  try {

   const { id } = req.params;
  

   // Find the admin by ID
   let Florings = await Floring.findById(id);
   if(Florings.status ==='Active'){
    Florings.status = "Inactive";
   }
   else{
    Florings.status = "Active"
   }



 const newFlorings =  await Florings.save();


   if(newFlorings){
       res.status(201).send({
           success: true,
           message: "flooring Status updated",
           newFlorings
         });
   }
   
  } catch (error) {
   res.status(500).send({
       success: false,
       message: "Errro in updating flooring status",
       error,
     });
  }
}



  
