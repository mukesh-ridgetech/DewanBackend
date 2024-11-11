import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    sector: {
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
        required: true,
    },
}, { timestamps: true });

const Location = mongoose.model('Location', locationSchema);
export default Location;
