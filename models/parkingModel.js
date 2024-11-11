import mongoose from 'mongoose';

const parkingSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        
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

const Parking = mongoose.model('Parking', parkingSchema);
export default Parking;
