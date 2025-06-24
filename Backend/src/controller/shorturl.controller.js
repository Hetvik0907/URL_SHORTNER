import { getShortUrl } from "../dao/shorturl.js";
import { createshorturlwithoutuserservice} from "../services/shorturl.service.js";
import { generatenanoid } from "../utils/helper.js";

export const createshorturl = async(req,res)=>{
  const {url} = req.body;
  const shortUrl = await createshorturlwithoutuserservice(url); 
  res.send(process.env.APP_URL + shortUrl)
  }

  export const redirectfromshorturl = async (req,res)=>{  
  const {shorturl} = req.params;
  const url = await getShortUrl(shorturl)
  if(!url) throw new Error("url not found"); 
  res.redirect(url.longUrl);
    
}
  