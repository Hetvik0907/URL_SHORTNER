// import { generatenanoid } from "../utils/helper.js";
// import ShortUrl from "../models/shorturl.models.js";
// import { saveshorturl } from "../dao/shorturl.js";

// export const createshorturlwithoutuserservice = async (url) =>{
//   const shorturl = generatenanoid(7);
//   if(!shorturl) throw new Error ("Short url not generated")
//   await  saveshorturl(url,shorturl)
//   return shorturl
// }

// export const createshorturlwithuserservice = async (url,userid,slug=null) =>{
//   const shorturl =slug || generatenanoid(7);
//   const exists = await ShortUrl.findOne({shortUrl:shorturl});
//   if(exists) throw new Error("This customrl is already exists");
//   await  saveshorturl(url,shorturl,userid);
//   return shorturl
// }
import { generateNanoId } from "../utils/helper.js"
import urlSchema from "../models/short_url.model.js"
import { getCustomShortUrl, saveShortUrl } from "../dao/short_url.js"

export const createShortUrlWithoutUser = async (url) => {
    const shortUrl = generateNanoId(7)
    if(!shortUrl) throw new Error("Short URL not generated")
    await saveShortUrl(shortUrl,url)
    return shortUrl
}

export const createShortUrlWithUser = async (url,userId,slug=null) => {
    const shortUrl = slug || generateNanoId(7)
    const exists = await getCustomShortUrl(slug)
    if(exists) throw new Error("This custom url already exists")

    await saveShortUrl(shortUrl,url,userId)
    return shortUrl
}