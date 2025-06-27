import { registeruser,loginuser } from "../services/auth.service.js";
import { coockieOptions } from "../config/config.js";

export const register = async(req,res)=>{
  const {name,email,password} = req.body;
  if(!name || !email || !password) throw new Error("Please fill all the fields");
  const token = await registeruser(name,email,password)
  req.user = user;
  res.cookie("accesstoken",token,coockieOptions)
  res.status(200).json({message:"register successful"});
}

export const login = async(req,res)=>{
  const {email,password} = req.body;
  if(!email || !password) throw new Error("Please fill all the fields");
  const token = await loginuser(email,password)
  req.user = user;
  res.cookie("accesstoken",token,coockieOptions)
  res.status(200).json({message:"login successful"});
}