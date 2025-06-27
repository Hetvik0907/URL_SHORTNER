export const attachuser = async(req,res,next)=>{
  const token = req.cookies.accesstoken;
  if(!token) return next();
  const decoded = verifytoken(token);
  const user = await getuserbyid(decoded.id);
  if(!user) return next();
  req.user = user;
  next();
}