import mongoose from 'mongoose';

const facingSchema = mongoose.Schema(
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

const Facing = mongoose.model('Facing', facingSchema);
export default Facing;
