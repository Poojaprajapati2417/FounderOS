import mongoose, { Schema } from "mongoose";
const taskSchema= new Schema(
    {
       task:{
        type:String,
        required:true,
        trim:true
       },
       status:{
        type:String,
        enum:[Pending,WScript,Done],
        required:true
       },
       

}
)