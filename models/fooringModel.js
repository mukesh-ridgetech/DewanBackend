import mongoose from 'mongoose';

const floringSchema = mongoose.Schema(
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

const Floring = mongoose.model('Floring', floringSchema);
export default Floring;
