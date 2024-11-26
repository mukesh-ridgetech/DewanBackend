import mongoose from 'mongoose';

const trendingSchema = mongoose.Schema(
    {
        location: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Location',
            required: true,
        },

        properties: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'properties',
            required: true,
        }],

        // amenities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Amenities' }],
        
       
        Status:{
            type:String,
            default:"Active"
        },

       
    },
    {
        timestamps: true, // Automatically add createdAt and updatedAt fields
    }
);

const Trending = mongoose.model('Trending', trendingSchema);
export default Trending;
