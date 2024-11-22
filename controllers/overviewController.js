// import Overview from '../models/overviewModel.js';

// // Create a new overview
// export const createOverview = async (req, res) => {
//     const { name, value } = req.body;
//     const logo = req.file ? req.file.path : '';

//     try {
//         const newOverview = new Overview({
//             name,
//             value,
//             logo,
//         });
//         await newOverview.save();
//         res.status(201).json(newOverview);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // Get all overviews
// export const getOverviews = async (req, res) => {
//     try {
//         const overviews = await Overview.find();
//         res.json(overviews);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // Update an overview
// export const updateOverview = async (req, res) => {
//     const { name, value } = req.body;
//     const logo = req.file ? req.file.path : '';

//     try {
//         const overview = await Overview.findById(req.params.id);
//         if (!overview) {
//             return res.status(404).json({ message: 'Overview not found' });
//         }

//         overview.name = name || overview.name;
//         overview.value = value || overview.value;
//         overview.logo = logo || overview.logo;
//         await overview.save();
//         res.json(overview);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // Delete an overview
// export const deleteOverview = async (req, res) => {
//     try {
//         const overview = await Overview.findById(req.params.id);
//         if (!overview) {
//             return res.status(404).json({ message: 'Overview not found' });
//         }
//         await overview.remove();
//         res.json({ message: 'Overview removed' });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };



import Overview from '../models/overviewModel.js';

export const createOverview = async (req, res) => {


//     let fieldName = "Age of Building";
// let updatedFieldName = fieldName.replace(/ /g, "_");  // Replaces all spaces with underscores
// console.log(updatedFieldName);  // Output: "Age_of_Building"



    const { name, value,logo } = req.body;
    console.log(name,value,logo)
    // const logos = req.files['logo'] ? req.files['logo'].map(file => file.path) : [];

    try {
        const newOverview = new Overview({ name, value, logo});
        await newOverview.save();
      
        if(newOverview){
            res.status(201).send({
                success: true,
                message: "Overview created successfully",
                newOverview,
                
              });
        }
        
        // res.status(201).json(newOverview);
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Errro in creating Overview",
            error,
          });
    }
};

export const getOverviews = async (req, res) => {
    try {
        const overviews = await Overview.find();

        if(overviews){
            res.status(201).send({
                success: true,
                message: "Overview fetched successfully",
                overviews,
                
              });
        }
        // res.status(200).json(overviews);
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Errro in fetching Overview",
            error,
          });
    }
};

export const updateOverview = async (req, res) => {
    const { id } = req.params;
    const { name, value ,logo} = req.body;
    // const logos = req.files['logo'] ? req.files['logo'].map(file => file.path) : [];

    try {
        const updatedOverview = await Overview.findByIdAndUpdate(id, { name, value, logo }, { new: true });
        
        if(updatedOverview){
            res.status(201).send({
                success: true,
                message: "Overview updated successfully",
                updatedOverview,
                
              });
        }
        // res.status(200).json(updatedOverview);
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Errro in updating Overview",
            error,
          });
    }
};

export const deleteOverview = async (req, res) => {
    const { id } = req.params;
    try {
       const overview =  await Overview.findByIdAndDelete(id);
        res.status(204).send({
            massage:"Overview data deleted successfully",
            overview:overview
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

