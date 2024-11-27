import mongoose from 'mongoose';

const sheduleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    phone: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    date: {
        type: String,
        required: true,
    },

    properties: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Properties',
        required: true,
    },
   

    status:{
        type:String,
        default:"Active",
    }
}, { timestamps: true });

const Shedule = mongoose.model('Shedule', sheduleSchema);
export default Shedule;
