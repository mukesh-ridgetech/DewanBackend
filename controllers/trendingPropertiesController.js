import Trending from '../models/trendingModel.js';

// Create a new Trending item
export const createTrending = async (req, res) => {
    try {

       
        const { location, properties, Status } = req.body;
        const newTrending = new Trending({ location, properties });
        

        // const newTrending = new Trending.create({
        //     location,
        //     properties,
        //     Status,
        // });

        await newTrending.save();
         
        res.status(201).json(newTrending);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all Trending items
export const getAllTrending = async (req, res) => {
    try {
        const trending = await Trending.find()
            .populate('location')
            .populate({
                path: 'properties',
                populate: [
                    { path: 'builder', model: 'Builder' }, // Populate builder details
                    { path: 'location', model: 'Location' }, // Populate location details
                    { path: 'amenities', model: 'Amenities' }, // Populate amenities details
                    {path:'overview.name',model: 'Overview'}
                ],
            })

            // path: 'overview',         // Populate the entire overview array if needed
            // populate: {
            //     path: 'name',         // Nested populate for overview.name
            //     model: ''Overview',    // Reference to the correct model (Overview)
            // }
        res.status(200).json(trending);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getAllTrendingByLocation = async (req, res) => {
    try {

        const {location} = req.body;
        const trending = await Trending.find()
            .populate('location')
            .populate({
                path: 'properties',
                populate: [
                    { path: 'builder', model: 'Builder' }, // Populate builder details
                    { path: 'location', model: 'Location' }, // Populate location details
                    { path: 'amenities', model: 'Amenities' }, // Populate amenities details
                    {path:'overview.name',model: 'Overview'}
                ],
            })
         
            const filterdata = trending.filter((property)=>{
                       return property?.location?.city?.toLowerCase() === location?.toLowerCase();
            })

            // path: 'overview',         // Populate the entire overview array if needed
            // populate: {
            //     path: 'name',         // Nested populate for overview.name
            //     model: ''Overview',    // Reference to the correct model (Overview)
            // }
        res.status(200).json(filterdata);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
};

// Get a single Trending item by ID
export const getTrendingById = async (req, res) => {
    try {
        const { id } = req.params;

        const trending = await Trending.findById(id)
        .populate('location')
        .populate({
            path: 'properties',
            populate: [
                { path: 'builder', model: 'Builder' }, // Populate builder details
                { path: 'location', model: 'Location' }, // Populate location details
                { path: 'amenities', model: 'Amenities' }, // Populate amenities details
                {path:'overview.name',model: 'Overview'}
            ],
        })

        if (!trending) return res.status(404).json({ message: 'Trending item not found' });

        res.status(200).json(trending);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a Trending item
export const updateTrending = async (req, res) => {
    try {
        const { id } = req.params;
        const { location, properties, Status } = req.body;

        const updatedTrending = await Trending.findByIdAndUpdate(
            id,
            { location, properties, Status },
            { new: true } // Return the updated document
        );

        if (!updatedTrending) return res.status(404).json({ message: 'Trending item not found' });

        res.status(200).json(updatedTrending);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




// Delete a Trending item
export const deleteTrending = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedTrending = await Trending.findByIdAndDelete(id);

        if (!deletedTrending) return res.status(404).json({ message: 'Trending item not found' });

        res.status(200).json({ message: 'Trending item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
