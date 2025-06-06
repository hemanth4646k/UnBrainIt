import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { ContentModel, UserModel } from "./db";
import { middleware } from "./middleware";
export const JWT_SECRET = process.env.JWT_SECRET;
import cors from 'cors';

mongoose.connect(process.env.MONGO_URL as string);
const app=express();
app.use(express.json());
app.use(cors());
app.post('/api/v1/signup',async (req,res)=>{
    // zod validation and hash password
    try{
        const {username,password}=req.body;
        await UserModel.create({username,password});
        res.json({message:"user Signed up successfully"});
        
    }catch(e){
        res.status(411).json({message:"User Already exists"});
    }
});
app.post('/api/v1/signin',async (req,res)=>{
    const {username,password}=req.body;
    const user=await UserModel.findOne({
        username,
        password
    });
    if(user){
        const token=jwt.sign(user._id.toString(),JWT_SECRET as string);
        res.json({message:"user signed in",token});
    }
    else{
        res.status(404).json({message:"User Not found"});
    }
    
});
app.post('/api/v1/content',middleware,async(req,res)=>{
    // Auth middleware
    const {title,link}=req.body;
    const tags:any[]=(req.body.tags)?req.body.tags:[];
    await ContentModel.create({
        title,link,
        userId:req.userId ,
        tags:tags,
        share:false
    })
    res.json({
        message:"content has been created"
    })

});
app.get('/api/v1/content',middleware,async(req,res)=>{
    try{
        const content=await ContentModel.find({userId:req.userId});
        res.json({content});
    }catch(e){
        res.status(404).json({message:"Content not found"});
    }
});
app.delete('/api/v1/content',middleware,async(req,res)=>{
    const contentId=req.body.contentId;
    await ContentModel.deleteMany({
        _id:contentId,
        userId:req.userId
    });
    res.json({message:"deleted"});
});
app.put('/api/v1/allcontent/share',middleware,async(req,res)=>{
    //share is input bool value that tells us to enable share or not
    const share=req.body.share;
    const contentId=req.body.contentId;
    const content=await ContentModel.findOne({
        _id:contentId,
        userId:req.userId
    });
    if(share){
        if(content){
            if(content.share){
                res.json({message:"the Content is shareable"});
            }
            else{
                content.link=content._id.toString();
                content.share=true;
                await content.save();
                res.json({message:"The content is now sharable"})
            }
        }
        else{
            res.status(404).json({message:"content not found"});
        }
    }        
    else{
        if(content){
            content.share=false;
            await content.save();
            res.json({message:'content is now not shareable'})
        }
        else{
            res.status(404).json({message:"content does not exist"});
        }
    }
});
app.get('/api/v1/allcontent/:shareLink',middleware,async(req,res)=>{
    const contentId=req.params.shareLink;
    const searchedContent=await ContentModel.findOne({
        _id:contentId
    });
    if(searchedContent&&(searchedContent.share||req.userId==searchedContent.userId)){
        res.json({searchedContent:searchedContent})
    }else{
        res.json({message:"Content Not found or Inaccessible"});
    }
});

app.listen(3000);