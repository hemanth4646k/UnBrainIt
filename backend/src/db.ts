import { Schema,model } from "mongoose";
import mongoose from "mongoose"; 

const UserSchema= new Schema({
    username:{type:String,unique:true},
    password:String
});

export const UserModel=model('users',UserSchema);

const ContentSchema= new Schema({
    title: String,
    link: String,
    tags:[{type:String}],
    userId:{type:mongoose.Types.ObjectId,ref:'users',required:true},
    share:Boolean
})

export const ContentModel= model('contents',ContentSchema);
