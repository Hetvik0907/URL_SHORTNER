// import { createuser } from "../dao/user.dao.js";
// import { getuserbyemail } from "../dao/user.dao.js";
// import { signtoken } from "../utils/helper.js";

// export const registeruser = async(name,email,password)=>{
//   const user = await getuserbyemail(email);
//   if(user) throw new Error("User already exists");
//   const newuser = await createuser(name,email,password);
//   const token =await signtoken({id:newuser._id});
//   return token;
// }

// export const loginuser = async(email,password)=>{
//   const user = await getuserbyemail(email);
//   if(!user || user.password !== password) throw new Error("Invalid Credentials");
//   const token =signtoken({id:user._id});
//   return {token,user};
// }

import { createUser, findUserByEmail, findUserByEmailByPassword } from "../dao/user.dao.js"
import { ConflictError } from "../utils/errorHandler.js"
import {signToken} from "../utils/helper.js"

export const registerUser = async (name, email, password) => {
    const user = await findUserByEmail(email)
    if(user) throw new ConflictError("User already exists")
    const newUser = await createUser(name, email, password)
    const token = await signToken({id: newUser._id})
    return {token,user}
}

export const loginUser = async (email, password) => {
    const user = await findUserByEmailByPassword(email)
    if(!user) throw new Error("Invalid email or password")

    const isPasswordValid = await user.comparePassword(password)
    if(!isPasswordValid) throw new Error("Invalid email or password")
    const token = signToken({id: user._id})
    return {token,user}
}