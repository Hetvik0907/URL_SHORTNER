import { nanoid } from "nanoid"
import { coockieOptions } from "../config/config.js";
import jwt from "jsonwebtoken";

export const generatenanoid = (length)=>{
  return nanoid(length);
}

export const signtoken = (payload)=>{
  return jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"1h"});
}

export const verifytoken = (token)=>{
  return jwt.verify(token,process.env.JWT_SECRET);
}