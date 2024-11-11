
import Location from '../models/locationModel.js';




export const createLocation = async (req, res) => {
    const { country, state, city, sector, createdBy } = req.body;
     console.log("createdBy",createdBy);
     console.log("createdBy",country);
     console.log("createdBy",state);
     console.log("createdBy",city);
    try {
        const newLocation = new Location({ country, state, city, sector, createdBy });
        await newLocation.save();
        res.status(201).json(newLocation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getLocations = async (req, res) => {
    try {
        const locations = await Location.find();
        res.status(201).send({
            success: true,
            message: "Amenties fetch successfully",
            locations,
            
          });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateLocation = async (req, res) => {
    const { id } = req.params;
    const { country, state, city, sector, createdBy } = req.body;

    try {
        const updatedLocation = await Location.findByIdAndUpdate(id, { country, state, city, sector, createdBy }, { new: true });
        res.status(200).json(updatedLocation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteLocation = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const location = await Location.findByIdAndDelete(id);
        console.log(location)
        res.status(204).send({
            massage:"location deleted succefully",
            location
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
