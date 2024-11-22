import mongoose, { Schema } from 'mongoose';

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
    
    propertiesName: {
        type: String,
        required: true,
    },

    defaultImage: {
        type: String,  // Corrected 'Type' to 'type'
        // required: true,
    },

    images: {
        type: [String], // Corrected 'ture' to 'true'
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    floorPlan: {
        type: String,
        // required: true,
    },

    floortypes: {
        type: [
            {
                bhk: { type: String, required: true },
                Area: { type: String, required: true },
                price: { type: Number, required: true },
            }
        ],
        required: true,
    },

    address: {
        type: String,
        required: true,
    },

    Status: {
        type: String,
        // required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    camelliasImage: {
        type: String,
        required: true,
    },

    mapCenter: {
        type: [Number],
        required: true,
    },

    amenities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Amenities' }],

    overview: [
        {
            name: { type: mongoose.Schema.Types.ObjectId, refPath: 'pageType' }, // Add reference to 'MasterName' collection
            value: { type: String },
            pageType: { type: String, required: true, enum: ['Overview', 'Neighborhood'] },
            inputType:{type: String},
        }
    ],

    // neighbourhood: [
    //     {
    //         typeName: { type: mongoose.Schema.Types.ObjectId, ref: 'Neighborhood' },
    //         typeOftype: { type: mongoose.Schema.Types.ObjectId, ref: 'Neighborhood' },
    //         value: {
    //             nameValue: { type: mongoose.Schema.Types.ObjectId, ref: 'Transition' },
    //             kmValue: { type: String },
    //             time: { type: String }
    //         },
    //     }
    // ],

    neighbourhood:[
               {
                  type:{type:String,required:true},

                  Transition:[
                    {
                        TypeOfType:{type:String,required:true},
                        value:[
                          {
                              landMark:{type:String},
                              distance:{type:String,required:true},
                              time:{type:String,required:true}
                          }
                        ]
                    }
                  ]
                 
               }
    ],

    tag: [
        {
            value: { type: String}, // Example field: 'value'
        }
    ],

    propertiesType: {
        type: String,
        enum: ['rent', 'sell', 'both'],
    },

    builderLogo: {
        type: String,
    },

    propertiesCategory: {
        type: String,
        enum: ['Residential', 'Commercial', 'Rental'],
    },

    propertiesStatus: {
        type: String,
        enum: ['Ready to Move', 'Under Construction'],
    },

    propertiesAge: {
        type: Number,
    },

    bhkType: {
        type: String,
    }
}, { timestamps: true });

const Properties = mongoose.model('properties', propertiesSchema);
export default Properties;
