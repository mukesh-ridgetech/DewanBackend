import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
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

    massage: {
        type: String,
        required: true,
    },

    massageType:{
        type: String,
    },

    status:{
        type:String,
        default:"Active",
    }
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);
export default Contact;
