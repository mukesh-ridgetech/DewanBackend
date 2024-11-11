import mongoose from 'mongoose';

const builderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    logo: { type: String, required: true },
    locations: {
        type: [String],  
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

const Builder = mongoose.model('Builder', builderSchema);
export default Builder;
