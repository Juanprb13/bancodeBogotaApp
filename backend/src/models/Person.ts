import mongoose, { model,Schema } from "mongoose";
const Person = new Schema({
    fullname:{ 
        type:String,
        required:true
    },
    birth:{
        type:String
    },
    adopt: {
        type:Boolean,
        default:false
    },
    adopter:{
        type:String,
        default:false
    },
    typePerson:{
        type:String
    }
})


export default model('Person',Person)