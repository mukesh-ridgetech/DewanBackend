import mongoose, { Types } from 'mongoose';

const propertiesSchema = new mongoose.Schema({
    
    builder: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Builder',
        required: true,
    },

    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location',
        required: true,
    },
    propertiesName:{
        type:String,
        required:true,
    },

    defaultImage:{
        Type:String,
        required:true,
    },

    images:{
        type:[String],
        required:ture,
    },

    description:{
        type:String,
        required:true,
    },

   

    floorPlan:{
        type:String,
        required:true,
    },

    floortypes: {
        type: [
            {
                bhk: { type: String, required: true },
                Area: { type: String, required: true },
                price:{type:Number,required:true}
            }
        ],
        required: true,
    },

    address:{
        type:String,
        required:true,
    },


    propertiesStatus:{
        type:String,
        required:true,
    },

    price:{
        type:Number,
        required:true,
    },

    
    camelliasImage:{
        type:String,
        required:true
    },


    mapCenter:{
        type:[Number],
        required:true,
    },
    
    amenities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Amenities' }],
    

    overview:[
           
        {
            name:{type: mongoose.Schema.Types.ObjectId,ref:'Overview'},
            value:{type:String},
            valuesType:{type:String,enum:['id','custom']},
            masterName:{type:String},
        }
    ],

    neighbourhood:[
         {
            typeName:{type: mongoose.Schema.Types.ObjectId,ref:'Neighborhood'},
            typeOftype:{type: mongoose.Schema.Types.ObjectId,ref:'Neighborhood'},
            value:{
                 nameValue:{
                    type:String,
                 },
                 kmValue:{
                    type:String,
                 },
                 
            },
         }
    ]



}, { timestamps: true });

const Properties = mongoose.model('properties', propertiesSchema);
export default Properties;
