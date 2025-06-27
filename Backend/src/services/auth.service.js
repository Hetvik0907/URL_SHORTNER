import { createuser } from "../dao/user.dao.js";
import { getuserbyemail } from "../dao/user.dao.js";
import { signtoken } from "../utils/helper.js";

export const registeruser = async(name,email,password)=>{
  const user = await getuserbyemail(email);
  if(user) throw new Error("User already exists");
  const newuser = await createuser(name,email,password);
  const token =await signtoken({id:newuser._id});
  return token;
}

export const loginuser = async(email,password)=>{
  const user = await getuserbyemail(email);
  if(!user || user.password !== password) throw new Error("Invalid Credentials");
  const token =signtoken({id:user._id});
  return token;
}

