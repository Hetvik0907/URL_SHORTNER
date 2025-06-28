// import { nanoid } from "nanoid"
// import { coockieOptions } from "../config/config.js";
// import jwt from "jsonwebtoken";

// export const generatenanoid = (length)=>{
//   return nanoid(length);
// }

// export const signtoken = (payload)=>{
//   return jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"1h"});
// }

// export const verifytoken = (token)=>{
//   const decoded =   jwt.verify(token,process.env.JWT_SECRET);
 
//   return decoded.id;

// }

// export const wrapasync = (fn) => {
//   return function (req, res, next) {
//     fn(req, res, next).catch(next);
//   };
// }; 
import { nanoid } from "nanoid";
import { cookieOptions } from "../config/config.js";
import jsonwebtoken from "jsonwebtoken"

export const generateNanoId = (length) =>{
    return nanoid(length);
}

export const signToken = (payload) =>{
    return jsonwebtoken.sign(payload, process.env.JWT_SECRET, {expiresIn: "1h"})
}

export const verifyToken = (token) =>{

    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET)
    console.log(decoded.id)
    return decoded.id
}