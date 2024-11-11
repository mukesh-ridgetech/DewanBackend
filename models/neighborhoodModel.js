import mongoose from 'mongoose';
const { Schema } = mongoose; 

const neighborhoodSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        type: [{
            _id: {
                type: Schema.Types.ObjectId,
                auto: true, 
            },
            value: {
                type: String,
                required: true,
            }
        }],

        status:{
            type:String,
            default:"Active"
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Admin',
        },
    },
    {
        timestamps: true, // Automatically add createdAt and updatedAt fields
    }
);

const Neighborhood = mongoose.model('Neighborhood', neighborhoodSchema);
export default Neighborhood;
