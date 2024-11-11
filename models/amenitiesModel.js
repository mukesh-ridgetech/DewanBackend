import mongoose from 'mongoose';

const amenitiesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    logo: { type: String, required: true },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        required: true,
    },
    status:{
        type:String,
        default:"Active",
    }
}, { timestamps: true });

const Amenities = mongoose.model('Amenities', amenitiesSchema);
export default Amenities;
