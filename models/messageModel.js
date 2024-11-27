import mongoose from 'mongoose';

const messageSchema = mongoose.Schema(
    {
       
        email: {
            type: String,
            required: true,
        },
       
        Status:{
            type:String,
            default:"Active"
        },

        
    },
    {
        timestamps: true, // Automatically add createdAt and updatedAt fields
    }
);

const Message = mongoose.model('Message', messageSchema);
export default Message;
