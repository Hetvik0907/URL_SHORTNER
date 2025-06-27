import User from "../models/user.model.js";

export const getuserbyid = async(id)=>{
  return await User.findById(id);
}

export const getuserbyemail = async(email)=>{
  return await User.findOne({email});
}

export const createuser = async(name,email,password)=>{
  return await User.create({
    name,
    email,
    password
  })
}