export const authmiddleware = async(req,res,next)=>{
  const token = req.cookies.accesstoken;
  if(!token) throw new Error("Not Authorized");
  const decoded = verifytoken(token);
  const user = await getuserbyid(decoded.id);
  if(!user) throw new Error("Not Authorized");
  req.user = user;
  next();
}