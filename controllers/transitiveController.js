




import Transition from '../models/transitionModel.js';
import path from 'path';
import fs from 'fs';
import Neighborhood from '../models/neighborhoodModel.js';


export const createTransition = async (req, res) => {
    const { locations, createdBy,type,LankMarkName} = req.body;
    // const logos = req.files['logo'] ? req.files['logo'].map(file => file.path) : []; // Collect logo paths

    try {
        const newTransition = new Transition({ locations, createdBy,type,LankMarkName });
        await newTransition.save();

        if(newTransition){
          res.status(201).send({
            success: true,
            message: "Floring created successfully",
            newTransition,
            
          });
        }
        // res.status(201).json(newAmenity);
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "Errro in Creating Transition",
        error,
      });
    }
};

// export const getTransition = async (req, res) => {
//     try {
//         const newTransition = await Transition.find({}).populate('locations')

//         // res.status(200).json(amenities);

//         res.status(201).send({
//           success: true,
//           message: "Transition fetch successfully",
//           newTransition,
          
//         });
//     } catch (error) {
//       res.status(500).send({
//         success: false,
//         message: "Errro in Fetching Transition",
//         error,
//       });
//     }
// };




export const getTransition = async (req, res) => {
    try {
        // Fetch all transitions and populate the 'locations' field
        const transitions = await Transition.find({}).populate('locations');

        // Loop over each transition and populate the 'type' field from the Neighborhood model
        const populatedTransitions = await Promise.all(
            transitions.map(async (transition) => {
                // Find the Neighborhood containing the specific type._id
                const neighborhood = await Neighborhood.findOne(
                    { 'type._id': transition.type }, // Find by type._id
                    { 'type.$': 1, name: 1 }  // Only return the matching type and name
                );

                if (neighborhood) {
                    // Attach the type value and the neighborhood name to the transition
                    transition = {
                        ...transition.toObject(),
                        neighborhoodType: neighborhood.type[0].value,  // Get the specific type value
                        neighborhoodName: neighborhood.name,  // Add neighborhood name
                    };
                }

                return transition;
            })
        );

        // Send the response with the populated transitions
        res.status(201).send({
            success: true,
            message: "Transition fetch successfully",
            transitions: populatedTransitions,
        });

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in Fetching Transitions",
            error,
        });
    }
};



export const updateTransition = async (req, res) => {
    const { id } = req.params;
    const { locations, createdBy,type,LankMarkName} = req.body;
    // const logos = req.files['logo'] ? req.files['logo'].map(file => file.path) : [];

    try {
        const updatedTransition = await Transition.findByIdAndUpdate(id, { locations,createdBy,type,LankMarkName }, { new: true });
      
        if(updatedTransition){
          res.status(201).send({
            success: true,
            message: "Transition updated successfully",
            updatedTransition,
            
          });
        }
      
       
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "Errro in updating Transition",
        error,
      });
    }
};




export const toggeled = async(req,res)=>{
  try {

   const { id } = req.params;
  

   // Find the admin by ID
   let Transitions = await Transition.findById(id);
   if(Transitions.status ==='Active'){
    Transitions.status = "Inactive";
   }
   else{
    Transitions.status = "Active"
   }



 const newTransitions =  await Transitions.save();
   if(newTransitions){
       res.status(201).send({
           success: true,
           message: "flooring Status updated",
           newTransitions
         });
   }
   
  } catch (error) {
   res.status(500).send({
       success: false,
       message: "Errro in updating Transitions status",
       error,
     });
  }
}



  
