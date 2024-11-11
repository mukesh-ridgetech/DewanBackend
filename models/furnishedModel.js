import mongoose from 'mongoose';

const furnishedSchema = mongoose.Schema(
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

const Furnished = mongoose.model('Furnished', furnishedSchema);
export default Furnished;
