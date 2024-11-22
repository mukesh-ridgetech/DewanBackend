import Properties from '../models/propertiesModel.js';

// Create a property
export const createProperty = async (req, res) => {
    try {
        const newProperty = new Properties(req.body);
        const savedProperty = await newProperty.save();
        res.status(201).json(savedProperty);
    } catch (err) {
        res.status(500).json({ message: 'Error creating property', error: err.message });
    }
};

// Get all properties
// export const getAllProperties = async (req, res) => {
//     try {
//         const properties = await Properties.find()
//             .populate('builder location amenities')  // Populate builder, location, and amenities
//             .populate({
//                 path: 'overview.name',
//                 select: 'name type logo', 
//                 populate: {
//                     path: 'name',         // Refers to the dynamic ref based on refPath
//                     model: function (doc) {
//                         return doc.pageType; // Dynamically return the correct model based on pageType
//                     }
//                 }
//             })
//             .exec();  // Execute the query

//         res.status(200).json(properties);
//     } catch (err) {
//         res.status(500).json({ message: 'Error fetching properties', error: err.message });
//     }
// };


// export const getAllProperties = async (req, res) => {
//     try {
//         const properties = await Properties.find()
//             .populate('builder location amenities')  // Populate builder, location, and amenities
//             .populate({
//                 path: 'overview.name',    // Populate the name field inside the overview array
//                 select: 'name type logo', // Include only specific fields from the referenced document
//                 model: (doc) => doc.pageType,  // Dynamically determine the model based on pageType
//             })
//             .exec();  // Execute the query

//         res.status(200).json(properties);
//     } catch (err) {
//         res.status(500).json({ message: 'Error fetching properties', error: err.message });
//     }
// };



// export const getAllProperties = async (req, res) => {
//     try {
//         const properties = await Properties.find()
//             .populate('builder location amenities')  // Populate builder, location, and amenities
//             .populate({
//                 path: 'overview.name',    // Populate the name field inside the overview array
//                 select: 'name type logo', // Include only specific fields from the referenced document
//             })
//             .exec();  // Execute the query

//         res.status(200).json(properties);
//     } catch (err) {
//         res.status(500).json({ message: 'Error fetching properties', error: err.message });
//     }
// };




export const getAllProperties = async (req, res) => {
    try {
        const properties = await Properties.find()
            .populate('builder location amenities')  // Populate builder, location, and amenities
            .populate({
                path: 'overview.name',    // Populate the name field inside the overview array
                select: 'name type logo', // Include only specific fields from the referenced document
                model: 'Overview',        // Reference the Overview model (for dynamic refs, use refPath)
         
            })
            .populate({
                path: 'overview',         // Populate the entire overview array if needed
                populate: {
                    path: 'name',         // Nested populate for overview.name
                    model: 'Overview',    // Reference to the correct model (Overview)
                }
            })
            .exec();  // Execute the query

        res.status(200).json(properties);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching properties', error: err.message });
    }
};



// Get a single property by ID



export const getPropertyById = async (req, res) => {
    try {
        const property = await Properties.findById(req.params.id)
            .populate('builder location amenities')  // Populate builder, location, and amenities
            .populate({
                path: 'overview.name',    // Populate the name field inside the overview array
                select: 'name type logo', // Include only specific fields from the referenced document
                model: 'Overview',        // Reference the Overview model
            })
            .populate({
                path: 'overview',         // Populate the entire overview array if needed
                populate: {
                    path: 'name',         // Nested populate for overview.name
                    model: 'Overview',    // Reference to the correct model (Overview)
                }
            })
            .exec(); // Execute the query

        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }

        res.status(200).json(property);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching property', error: err.message });
    }
};


// Update a property
export const updateProperty = async (req, res) => {
    try {
        const updatedProperty = await Properties.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProperty) return res.status(404).json({ message: 'Property not found' });
        res.status(200).json(updatedProperty);
    } catch (err) {
        res.status(500).json({ message: 'Error updating property', error: err.message });
    }
};

// Delete a property
export const deleteProperty = async (req, res) => {
    try {
        const deletedProperty = await Properties.findByIdAndDelete(req.params.id);
        if (!deletedProperty) return res.status(404).json({ message: 'Property not found' });
        res.status(200).json({ message: 'Property deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting property', error: err.message });
    }
};



// controllers/propertiesController.js

// import Properties from '../models/Properties.js';

export const filterProperties = async (req, res) => {
  try {
    // Extract query parameters
    const {
      builderName,
      locationName,
      propertiesName,
      minPrice,
      maxPrice,
      propertiesType,
      propertiesCategory,
      propertiesStatus,
      bhkType,
      amenitiesName,
      minAge,
      maxAge,
    } = req.query;

    var location = ""
    // Build the base filter query
    const filterQuery = {};

    if (propertiesName) {
      filterQuery.propertiesName = { $regex: propertiesName, $options: 'i' }; // Case-insensitive search
    }

    if (minPrice || maxPrice) {
      filterQuery.price = {};
      if (minPrice) filterQuery.price.$gte = parseInt(minPrice);
      if (maxPrice) filterQuery.price.$lte = parseInt(maxPrice);
    }


    if (minAge || maxAge) {
        filterQuery.propertiesAge = {};
        if (minAge) filterQuery.propertiesAge.$gte = parseInt(minAge);
        if (maxAge) filterQuery.propertiesAge.$lte = parseInt(maxAge);
      }

    if (propertiesType) {
      filterQuery.propertiesType = propertiesType;
    }

    if (propertiesCategory) {
      filterQuery.propertiesCategory = propertiesCategory;
    }

    if (propertiesStatus) {
        // Replace underscores with spaces
        const formattedStatus = propertiesStatus.replace(/_/g, ' ');
        filterQuery.propertiesStatus = formattedStatus;
      }


      if(locationName){
        location = locationName.replace(/_/g, ' ');
      }

    if (bhkType) {
      filterQuery.bhkType = bhkType;
    }

    // Initial query to find properties
    let query = Properties.find(filterQuery)
      .populate({
        path: 'builder',
        match: builderName ? { name: { $regex: builderName, $options: 'i' } } : {}, // Filter builder by name
        select: 'name logo', // Select specific fields
      })
      .populate({
        path: 'location',
        match: location ? { sector: { $regex: location, $options: 'i' } } : {}, // Filter location by name
        // select: 'name', // Select specific fields
      })
      .populate({
        path: 'amenities',
        // match:  { name: { $regex: amenitiesName, $options: 'i' } },
        // select: 'name', // Select specific fields
      });

    // Execute the query
    let properties = await query;
    // console.log(properties)

    // Filter out results where the populated fields do not match the query (due to Mongoose populate limitations)
    // properties = properties.filter(
    //   (property) =>
    //     (!builderName || property.builder) &&
    //     (!locationName || property.location) &&
    //     (!amenitiesName || property.amenities.length > 0)
    // );

    const requiredAmenities = amenitiesName ? amenitiesName.split("_").map(item => item.replace(/-/g, " ")) : [];

    properties = properties.filter(
      (property) =>
        (!builderName || property.builder) &&
        (!locationName || property.location) &&
        (!amenitiesName || 
          (property.amenities.length > 0 &&
           requiredAmenities.every((amenity) =>
             property.amenities.map((a) => a.name).includes(amenity)
           )
          )
        )
    );

    res.status(200).json(properties);

    // res.status(200).json({ success: true, data: properties });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error', error });
  }
};
