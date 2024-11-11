
import Neighborhood from '../models/neighborhoodModel.js';
import path from 'path';
import fs from 'fs';


export const createNeighborhood = async (req, res) => {
    const { name, createdBy,type} = req.body;
    // const logos = req.files['logo'] ? req.files['logo'].map(file => file.path) : []; // Collect logo paths

    try {
        const newNeighborhood = new Neighborhood({ name, createdBy,type });
       const neighbourhood =  await newNeighborhood.save();

        if(neighbourhood){
          res.status(201).send({
            success: true,
            message: "Neighbourhood created successfully",
            neighbourhood,
            
          });
        }
        // res.status(201).json(newAmenity);
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "Errro in Creating Neighbourhood",
        error,
      });
    }
};

export const getNeighborhood = async (req, res) => {
    try {
        const newNeighborhood = await Neighborhood.find();
        // res.status(200).json(amenities);

        res.status(201).send({
          success: true,
          message: "Neighborhood fetch successfully",
          newNeighborhood,
          
        });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "Errro in Fetching Neighborhood",
        error,
      });
    }
};


export const updateNeighborhood = async (req, res) => {
    const { id } = req.params;
    const { name, createdBy,type} = req.body;
    // const logos = req.files['logo'] ? req.files['logo'].map(file => file.path) : [];

    try {
        const updatedNeighborhood = await Neighborhood.findByIdAndUpdate(id, { name,createdBy,type }, { new: true });
      
        if(updatedNeighborhood){
          res.status(201).send({
            success: true,
            message: "Neighborhood updated successfully",
            updatedNeighborhood,
            
          });
        }
      
       
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "Errro in updating Neighborhood",
        error,
      });
    }
};




export const toggeled = async(req,res)=>{
  try {

   const { id } = req.params;
  

   // Find the admin by ID
   let Neighborhoods = await Neighborhood.findById(id);
   if(Neighborhoods.status ==='Active'){
    Neighborhoods.status = "Inactive";
   }
   else{
    Neighborhoods.status = "Active"
   }



 const newNeighborhoods =  await Neighborhoods.save();


   if(newNeighborhoods){
       res.status(201).send({
           success: true,
           message: "Neighborhoods Status updated",
           newNeighborhoods
         });
   }
   
  } catch (error) {
   res.status(500).send({
       success: false,
       message: "Errro in updating Neighborhoods status",
       error,
     });
  }
}



  
