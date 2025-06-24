import ShortUrl from "../models/shorturl.models.js"
export const saveshorturl = async(url,shorturl,user)=>{
  const newurl = await ShortUrl.create({
    longUrl:url,
    shortUrl:shorturl
  })
  if(user){
    newurl.user=user
  }
}

export const getShortUrl = async (shorturl) => {
  return await ShortUrl.findOneAndUpdate(
    { shortUrl: shorturl },
    { $inc: { clicks: 1 } },
    { new: true } 
  );
};

