import mongoose from 'mongoose';

const overviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
    status:{
        type:String,
        default:"Active"
    },

    type:{
        type:{String},
        enum:['Number','text','dropdown','boolean'],
    },

    logo: { type: String, required: true },
}, { timestamps: true });

const Overview = mongoose.model('Overview', overviewSchema);
export default Overview;
