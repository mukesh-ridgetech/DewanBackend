import mongoose from 'mongoose';

const transitionSchema = new mongoose.Schema({
    type: {
        type: mongoose.Schema.Types.ObjectId,
        // ref:'Neighborhood',
        required: true,
    },
    
    LankMarkName:{
        type:String,
        requird:true
    },
    
    locations: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location',  
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        required: true,
    },
    status:{
        type:String,
        default:"Active"
    }
}, { timestamps: true });

const Transition = mongoose.model('Transition', transitionSchema);
export default Transition;
