// import { getShortUrl } from "../dao/shorturl.js";
// import { createshorturlwithoutuserservice , createshorturlwithuserservice } from "../services/shorturl.service.js";
// import { generatenanoid } from "../utils/helper.js";
// import { wrapasync } from "../utils/helper.js";

// export const createshorturl =wrapasync( async(req,res)=>{
//   const {url} = req.body;
//   let shortUrl;
//   if(req.user){
//     shortUrl = await createshorturlwithuserservice(url,req.user._id); 
//   }else{
//     shortUrl = await createshorturlwithoutuserservice(url);
//   } 
//   res.status(200).json({shortUrl:process.env.APP_URL + shortUrl});
//   })


//   export const redirectfromshorturl =wrapasync( async (req,res)=>{  
//   const {shorturl} = req.params;
//   const url = await getShortUrl(shorturl)
//   if(!url) throw new Error("url not found"); 
//   res.redirect(url.longUrl);
    
// })
  
// export const createcustomshorturl =wrapasync( async(req,res)=>{
//   const {url,customurl} = req.body;
//   const shortUrl = await createshorturlwithuserservice(url,req.user._id,customurl); 
//   res.send(process.env.APP_URL + shortUrl)
//   })
import { getShortUrl } from "../dao/short_url.js"
import { createShortUrlWithoutUser, createShortUrlWithUser } from "../services/short_url.service.js"
import wrapAsync from "../utils/tryCatchWrapper.js"

export const createShortUrl = wrapAsync(async (req,res)=>{
    const data = req.body
    let shortUrl
    if(req.user){
        shortUrl = await createShortUrlWithUser(data.url,req.user._id,data.slug)
    }else{  
        shortUrl = await createShortUrlWithoutUser(data.url)
    }
    res.status(200).json({shortUrl : process.env.APP_URL + shortUrl})
})


export const redirectFromShortUrl = wrapAsync(async (req,res)=>{
    const {id} = req.params
    const url = await getShortUrl(id)
    if(!url) throw new Error("Short URL not found")
    res.redirect(url.full_url)
})

export const createCustomShortUrl = wrapAsync(async (req,res)=>{
    const {url,slug} = req.body
    const shortUrl = await createShortUrlWithoutUser(url,customUrl)
    res.status(200).json({shortUrl : process.env.APP_URL + shortUrl})
})