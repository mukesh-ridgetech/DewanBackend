// import Builder from '../models/builderModel.js';

// // Create a new builder
// export const createBuilder = async (req, res) => {
//     const { name, locations } = req.body;
//     const logo = req.file ? req.file.path : '';

//     try {
//         const newBuilder = new Builder({
//             name,
//             logo,
//             locations: locations.split(','),  // Split locations by comma
//             createdBy: req.admin._id,
//         });
//         await newBuilder.save();
//         res.status(201).json(newBuilder);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // Get all builders
// export const getBuilders = async (req, res) => {
//     try {
//         const builders = await Builder.find();
//         res.json(builders);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // Update a builder
// export const updateBuilder = async (req, res) => {
//     const { name, locations } = req.body;
//     const logo = req.file ? req.file.path : '';

//     try {
//         const builder = await Builder.findById(req.params.id);
//         if (!builder) {
//             return res.status(404).json({ message: 'Builder not found' });
//         }

//         builder.name = name || builder.name;
//         builder.logo = logo || builder.logo;
//         builder.locations = locations ? locations.split(',') : builder.locations;
//         await builder.save();
//         res.json(builder);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // Delete a builder
// export const deleteBuilder = async (req, res) => {
//     try {
//         const builder = await Builder.findById(req.params.id);
//         if (!builder) {
//             return res.status(404).json({ message: 'Builder not found' });
//         }
//         await builder.remove();
//         res.json({ message: 'Builder removed' });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };




import Builder from '../models/builderModel.js';

export const createBuilder = async (req, res) => {
    const { name, createdBy,logo, locations } = req.body;
    // const logos = req.files['logo'] ? req.files['logo'].map(file => file.path) : [];

    try {
        const newBuilder = new Builder({ name, logo, locations, createdBy });
        await newBuilder.save();
        if(newBuilder){
            res.status(201).send({
              success: true,
              message: "Builder created successfully",
              newBuilder,
              
            });
          }
        // res.status(201).json(newBuilder);
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Errro in Creating Builder",
            error,
          });
    }
};

export const getBuilders = async (req, res) => {
    try {
        const builders = await Builder.find();

        res.status(201).send({
            success: true,
            message: "builders fetch successfully",
            builders,
            
          });
        // res.status(200).json(builders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateBuilder = async (req, res) => {
    const { id } = req.params;
    const { name, createdBy,logo, locations } = req.body;
    // const logos = req.files['logo'] ? req.files['logo'].map(file => file.path) : [];

    try {
        const updatedBuilder = await Builder.findByIdAndUpdate(id, { name, logo, locations, createdBy }, { new: true });
        res.status(200).json(updatedBuilder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteBuilder = async (req, res) => {
    const { id } = req.params;
    try {
       const builder =  await Builder.findByIdAndDelete(id);
        res.status(204).send({
            massage:"builder deleted successfully",
            builder:builder
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

