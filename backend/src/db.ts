import mongoose from "mongoose";
import config from "./config/DB";

mongoose.connect(config.DB.URI,{ useNewUrlParser: true ,useUnifiedTopology: true})

const connection  = mongoose.connection
connection.once('open',()=>{
    console.log("conexion establecida");
})

connection.on('error',(err)=>{
    console.log("error en la DB",err);
    process.exit(0)
})