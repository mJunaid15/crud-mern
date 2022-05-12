 
const DB = "mongodb+srv://junaid:junaid@cluster0.elpvt.mongodb.net/mernstack?retryWrites=true&w=majority";

import mongoose from "mongoose";


export const  connectDatabase = ()=>{
    mongoose.connect("mongodb+srv://junaid:junaid@cluster0.elpvt.mongodb.net/mernstack?retryWrites=true&w=majority").then((c)=>{
        console.log(`MongoDB connect to: ${c.connection.host}`);
    }).catch((e)=>{
        console.log(e);
    })
}