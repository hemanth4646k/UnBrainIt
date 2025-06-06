import { NextFunction, Request, Response } from "express";
import { JWT_SECRET } from "./index";
import jwt, { JwtPayload } from "jsonwebtoken";


export const middleware=(req:Request,res:Response,next:NextFunction)=>{
    const token=req.headers['token'];
    const userid=jwt.verify(token as string,JWT_SECRET as string);
    if(userid){
        req.userId=userid as string;
        next();
    }
    else{
        res.status(403).json({message:'You are not logged in'});
    }
}